/**
 * Google Apps Script — coller TOUT ce fichier, puis :
 * Déployer > Gérer les déploiements > crayon > Nouvelle version > Déployer
 *
 * Ligne 1 : Date | Nom | Email | Téléphone | Service | Message | Statut
 * Validée = vert | En cours = rouge | Terminée = bleu | Annulée = gris
 *
 * GET  ?action=update&row=&statut=&email=&message=  → modifie la ligne (jamais d’ajout)
 * POST JSON {nom,email,...}                         → nouvelle demande uniquement
 */

var HEADERS = ['Date', 'Nom', 'Email', 'Téléphone', 'Service', 'Message', 'Statut']

function jsonOutput(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
}

function ensureHeaders(sheet) {
  var current = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0]
  var needs = false
  for (var i = 0; i < HEADERS.length; i++) {
    if (String(current[i] || '') !== HEADERS[i]) needs = true
  }
  if (!needs) return
  var range = sheet.getRange(1, 1, 1, HEADERS.length)
  range.setValues([HEADERS])
  range.setFontWeight('bold')
  range.setBackground('#1F2937')
  range.setFontColor('#FFFFFF')
}

function normalizeStatut(statut) {
  var s = String(statut || '').trim()
  if (s === 'Valider' || s === 'Validé') return 'Validée'
  if (s === 'Terminer' || s === 'Terminé') return 'Terminée'
  if (s === 'Annuler' || s === 'Annulé') return 'Annulée'
  return s
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
    var hasName = String(values[i][1] || '') !== ''
    if (hasName) return i + 1
    if (!fallback) fallback = i + 1
  }
  return fallback
}

function updateStatus(sheet, data) {
  var row = findRowIndex(sheet, data)
  var statut = normalizeStatut(data.statut)
  if (!row || row < 2) {
    throw new Error('Ligne introuvable')
  }
  if (!statut) {
    throw new Error('Statut manquant')
  }
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
    var data = parseBody(e)

    if (isUpdatePayload(data)) {
      var updatedRow = updateStatus(sheet, data)
      return jsonOutput({ success: true, ok: true, updated: true, row: updatedRow })
    }

    if (!(data.nom || data.email)) {
      return jsonOutput({
        success: false,
        ok: false,
        error: 'Pas de nouvelle ligne : nom/email manquant',
      })
    }

    var statutNew = normalizeStatut(data.statut) || 'Nouvelle'
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
        statut: row[6] || 'Nouvelle',
      }
    }).reverse()

    return jsonOutput({ ok: true, version: 3, rows: rows })
  } catch (error) {
    return jsonOutput({ ok: false, success: false, error: String(error) })
  }
}
