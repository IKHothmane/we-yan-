<?php
/**
 * Copier ce fichier en secrets.php sur OVH (même dossier /api/).
 * Ne jamais commiter secrets.php.
 *
 * Clé API Resend : https://resend.com/api-keys
 */
return [
  'RESEND_API_KEY' => 're_xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  // Destinataires à chaque formulaire contact (les 2 recevront l'email)
  'CONTACT_TO' => [
    'meriemflyer@gmail.com',
    'ikhlef.othmane@gmail.com',
  ],
  // Expéditeur : domaine vérifié sur Resend (weyandigital.ma)
  'CONTACT_FROM' => 'We Yan Digital <contact@weyandigital.ma>',
];
