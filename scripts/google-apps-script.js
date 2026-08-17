/**
 * Google Apps Script — coller TOUT ce fichier, puis :
 * 1) Enregistrer
 * 2) Choisir installer → Exécuter (autorise l’accès)
 * 3) Déployer → Gérer les déploiements → crayon → Nouvelle version → Déployer
 *
 * Colonne G = liste : Valider | En cours | Terminer | Annuler
 */

var HEADERS = ['Date', 'Nom', 'Email', 'Téléphone', 'Service', 'Message', 'Statut']
var STATUT_LIST = ['Valider', 'En cours', 'Terminer', 'Annuler']

function jsonOutput(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
}

function sheetStatut(statut) {
  var s = String(statut || '').trim()
  if (s === 'Validée' || s === 'Validé' || s === 'Valider') return 'Valider'
  if (s === 'En cours') return 'En cours'
  if (s === 'Terminée' || s === 'Terminé' || s === 'Terminer') return 'Terminer'
  if (s === 'Annulée' || s === 'Annulé' || s === 'Annuler') return 'Annuler'
  return ''
}

function colorForStatus(statut) {
  var s = sheetStatut(statut)
  if (s === 'Valider') return '#C6EFCE'
  if (s === 'En cours') return '#FFC7CE'
  if (s === 'Terminer') return '#BDD7EE'
  if (s === 'Annuler') return '#E5E7EB'
  return '#FFFFFF'
}

function applyRowColor(sheet, row, statut) {
  sheet.getRange(row, 1, 1, HEADERS.length).setBackground(colorForStatus(statut))
}

function ensureHeaders(sheet) {
  var range = sheet.getRange(1, 1, 1, HEADERS.length)
  range.setValues([HEADERS])
  range.setFontWeight('bold')
  range.setBackground('#1F2937')
  range.setFontColor('#FFFFFF')
}

function ensureStatutList(sheet) {
  var last = Math.max(sheet.getMaxRows(), 200)
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(STATUT_LIST, true)
    .setAllowInvalid(true)
    .setHelpText('Valider, En cours, Terminer ou Annuler')
    .build()
  sheet.getRange(2, 7, last - 1, 1).setDataValidation(rule)
}

function installer() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  ensureHeaders(sheet)
  ensureStatutList(sheet)
}

function onEdit(e) {
  if (!e || !e.range) return
  if (e.range.getColumn() !== 7 || e.range.getRow() < 2) return
  applyRowColor(e.range.getSheet(), e.range.getRow(), e.range.getValue())
}

function findRowIndex(sheet, data) {
  var values = sheet.getDataRange().getValues()
  var row = Number(data.row)
  var email = String(data.email || '')
  var message = String(data.message || '')

  if (row >= 2 && row <= values.length) {
    if (!email || String(values[row - 1][2]) === email) return row
  }

  var fallback = 0
  for (var i = values.length - 1; i >= 1; i--) {
    if (email && String(values[i][2]) !== email) continue
    if (message && String(values[i][5]) !== message) continue
    if (String(values[i][1] || '')) return i + 1
    if (!fallback) fallback = i + 1
  }
  return fallback
}

function updateStatus(sheet, data) {
  var row = findRowIndex(sheet, data)
  var statut = sheetStatut(data.statut)
  if (!row || row < 2) throw new Error('Ligne introuvable')
  if (!statut) throw new Error('Statut manquant')
  sheet.getRange(row, 7).setValue(statut)
  applyRowColor(sheet, row, statut)
  return row
}

function parseBody(e) {
  if (e && e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents)
    } catch (err) {
      return {}
    }
  }
  return {}
}

function paramsFromGet(e) {
  var p = (e && e.parameter) ? e.parameter : {}
  return {
    action: p.action || '',
    row: p.row || '',
    statut: p.statut || '',
    email: p.email || '',
    message: p.message || '',
  }
}

function isUpdatePayload(data) {
  return data.action === 'update' || (
    data.statut && !data.nom && !data.telephone && !data.service
  )
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    ensureHeaders(sheet)
    ensureStatutList(sheet)
    var data = parseBody(e)

    if (isUpdatePayload(data)) {
      var updatedRow = updateStatus(sheet, data)
      return jsonOutput({ success: true, ok: true, updated: true, row: updatedRow })
    }

    if (!(data.nom || data.email)) {
      return jsonOutput({ success: false, ok: false, error: 'Pas de nouvelle ligne : nom/email manquant' })
    }

    var statutNew = sheetStatut(data.statut)
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
    return jsonOutput({ success: true, ok: true, created: true })
  } catch (error) {
    return jsonOutput({ success: false, ok: false, error: String(error) })
  }
}

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    ensureHeaders(sheet)
    ensureStatutList(sheet)
    var data = paramsFromGet(e)

    if (data.action === 'update') {
      var updatedRow = updateStatus(sheet, data)
      return jsonOutput({ success: true, ok: true, updated: true, row: updatedRow })
    }

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
        statut: row[6] || '',
      }
    }).reverse()

    return jsonOutput({ ok: true, version: 4, rows: rows })
  } catch (error) {
    return jsonOutput({ ok: false, success: false, error: String(error) })
  }
}
