<?php
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Méthode non autorisée']);
  exit;
}

$secretsFile = __DIR__ . '/secrets.php';
if (!is_file($secretsFile)) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Configuration email manquante (secrets.php).']);
  exit;
}

$secrets = require $secretsFile;
$apiKey = trim((string) ($secrets['RESEND_API_KEY'] ?? ''));
$toRaw = $secrets['CONTACT_TO'] ?? [
  'meriemflyer@gmail.com',
  'ikhlef.othmane@gmail.com',
];
if (is_string($toRaw)) {
  $toList = array_map('trim', explode(',', $toRaw));
} elseif (is_array($toRaw)) {
  $toList = array_map(static function ($item) {
    return trim((string) $item);
  }, $toRaw);
} else {
  $toList = [];
}
$toList = array_values(array_filter($toList, static function ($email) {
  return filter_var($email, FILTER_VALIDATE_EMAIL);
}));
if ($toList === []) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Aucun destinataire email configuré.']);
  exit;
}
$from = trim((string) ($secrets['CONTACT_FROM'] ?? 'We Yan Digital <contact@weyandigital.ma>'));

if ($apiKey === '' || strpos($apiKey, 're_xxxx') === 0) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Clé API Resend non configurée.']);
  exit;
}

$raw = file_get_contents('php://input');
$input = json_decode($raw ?: '', true);
if (!is_array($input)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Requête invalide.']);
  exit;
}

$honeypot = trim((string) ($input['website'] ?? ''));
if ($honeypot !== '') {
  echo json_encode(['ok' => true]);
  exit;
}

$name = trim((string) ($input['name'] ?? ''));
$email = trim((string) ($input['email'] ?? ''));
$message = trim((string) ($input['message'] ?? ''));
$services = $input['services'] ?? [];
if (!is_array($services)) {
  $services = [];
}
$services = array_values(array_filter(array_map(static function ($item) {
  return trim((string) $item);
}, $services)));

if ($name === '' || mb_strlen($name) > 120) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Nom invalide.']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 180) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Adresse email invalide.']);
  exit;
}

if ($message === '' || mb_strlen($message) > 5000) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Message invalide.']);
  exit;
}

$safeName = htmlspecialchars($name, ENT_QUOTES | ENT_HTML5, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES | ENT_HTML5, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES | ENT_HTML5, 'UTF-8'));
$safeServices = $services
  ? htmlspecialchars(implode(', ', $services), ENT_QUOTES | ENT_HTML5, 'UTF-8')
  : 'Non précisé';

$html = <<<HTML
  <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
    <h1 style="font-size:20px;margin:0 0 16px">Nouveau message — We Yan Digital</h1>
    <p><strong>Nom :</strong> {$safeName}</p>
    <p><strong>Email :</strong> {$safeEmail}</p>
    <p><strong>Services :</strong> {$safeServices}</p>
    <p><strong>Message :</strong></p>
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px">{$safeMessage}</div>
  </div>
HTML;

$payload = [
  'from' => $from,
  'to' => $toList,
  'reply_to' => $email,
  'subject' => 'Nouveau contact We Yan Digital — ' . $name,
  'html' => $html,
];

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json',
  ],
  CURLOPT_POSTFIELDS => json_encode($payload),
  CURLOPT_TIMEOUT => 20,
]);

$responseBody = curl_exec($ch);
$status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($responseBody === false) {
  http_response_code(502);
  echo json_encode(['ok' => false, 'error' => 'Erreur réseau vers Resend.']);
  exit;
}

$resend = json_decode($responseBody, true);
if ($status < 200 || $status >= 300) {
  http_response_code(502);
  $resendError = is_array($resend) ? ($resend['message'] ?? $resend['error']['message'] ?? null) : null;
  echo json_encode([
    'ok' => false,
    'error' => is_string($resendError) && $resendError !== '' ? $resendError : 'Resend a refusé l’envoi.',
  ]);
  exit;
}

echo json_encode(['ok' => true]);
