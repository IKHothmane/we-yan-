/**
 * Google Apps Script — coller dans Extensions > Apps Script du Sheet.
 *
 * Ligne 1 : Date | Nom | Email | Téléphone | Service | Message | Statut
 *
 * Couleurs :
 *  Validée  = vert
 *  En cours = rouge
 *  Terminée = bleu
 *  Annulée  = gris
 *
 * Après modification : Déployer > Gérer les déploiements > Nouvelle version
 */

var HEADERS = ['Date', 'Nom', 'Email', 'Téléphone', 'Service', 'Message', 'Statut']

function ensureHeaders(sheet) {
  var range = sheet.getRange(1, 1, 1, HEADERS.length)
  range.setValues([HEADERS])
  range.setFontWeight('bold')
  range.setBackground('#1F2937')
  range.setFontColor('#FFFFFF')
}

function colorForStatus(statut) {
  if (statut === 'Validée') return '#C6EFCE'
  if (statut === 'En cours') return '#FFC7CE'
  if (statut === 'Terminée') return '#BDD7EE'
  if (statut === 'Annulée') return '#E5E7EB'
  return '#FFFFFF'
}

function applyRowColor(sheet, row, statut) {
  sheet.getRange(row, 1, 1, HEADERS.length).setBackground(colorForStatus(statut))
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    ensureHeaders(sheet)
    var data = JSON.parse(e.postData.contents)

    if (data.action === 'update') {
      var row = Number(data.row)
      var statut = String(data.statut || '')
      if (!row || row < 2) {
        throw new Error('Ligne invalide')
      }
      sheet.getRange(row, 7).setValue(statut)
      applyRowColor(sheet, row, statut)
      return ContentService
        .createTextOutput(JSON.stringify({ success: true, ok: true }))
        .setMimeType(ContentService.MimeType.JSON)
    }

    var statutNew = data.statut || 'Nouvelle'
    sheet.appendRow([
      new Date(),
      data.nom || '',
      data.email || '',
      data.telephone || '',
      data.service || '',
      data.message || '',
      statutNew,
    ])
    applyRowColor(sheet, sheet.getLastRow(), statutNew)

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, ok: true }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  ensureHeaders(sheet)
  var values = sheet.getDataRange().getValues()
  var rows = values.slice(1).map(function (row, index) {
    return {
      row: index + 2,
      date: row[0],
      nom: row[1],
      email: row[2],
      telephone: row[3],
      service: row[4],
      message: row[5],
      statut: row[6] || 'Nouvelle',
    }
  }).reverse()

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, rows: rows }))
    .setMimeType(ContentService.MimeType.JSON)
}
