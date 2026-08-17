/**
 * Google Apps Script — coller dans Extensions > Apps Script du Sheet.
 *
 * Ligne 1 du Sheet : Date | Nom | Email | Téléphone | Service | Message
 *
 * Déployer > Nouvelle déploiement > Application web
 * Exécuter en tant que : Moi
 * Qui a accès : Tout le monde
 * Copier l’URL /exec dans Cloudflare : GOOGLE_SHEET_URL
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.nom || '',
      data.email || '',
      data.telephone || '',
      data.service || '',
      data.message || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const values = sheet.getDataRange().getValues();
  const rows = values.slice(1).reverse().map(function (row) {
    return {
      date: row[0],
      nom: row[1],
      email: row[2],
      telephone: row[3],
      service: row[4],
      message: row[5],
    };
  });

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, rows: rows }))
    .setMimeType(ContentService.MimeType.JSON);
}
