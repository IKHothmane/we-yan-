import { describe, expect, it } from 'vitest'
import { isScriptReady, isUpdateSuccess, normalizeRows, toSheetStatut } from '../shared/sheet.js'

describe('toSheetStatut', () => {
  it('convertit les statuts vers le vocabulaire de la feuille', () => {
    expect(toSheetStatut('Validée')).toBe('Valider')
    expect(toSheetStatut('Terminé')).toBe('Terminer')
    expect(toSheetStatut('Annulée')).toBe('Annuler')
    expect(toSheetStatut('En cours')).toBe('En cours')
    expect(toSheetStatut('Nouvelle')).toBe('')
  })
})

describe('isUpdateSuccess / isScriptReady', () => {
  it('détecte une mise à jour réussie', () => {
    expect(isUpdateSuccess({ updated: true })).toBe(true)
    expect(isUpdateSuccess({ rows: [] })).toBe(false)
    expect(isUpdateSuccess(null)).toBe(false)
  })

  it('détecte un script à jour', () => {
    expect(isScriptReady({ version: 3 })).toBe(true)
    expect(isScriptReady({ rows: [{ statut: 'Nouvelle' }] })).toBe(true)
    expect(isScriptReady({ rows: [] })).toBe(false)
  })
})

describe('normalizeRows', () => {
  it('complète le statut et les numéros de ligne manquants', () => {
    const rows = normalizeRows([{ row: 5 }, { nom: 'x' }])
    expect(rows[0]).toMatchObject({ row: 5, statut: 'Nouvelle' })
    expect(rows[1].row).toBeGreaterThanOrEqual(2)
    expect(normalizeRows('nope')).toEqual([])
  })
})
