import { describe, expect, it } from 'vitest'
import {
  buildEmailHtml,
  buildSheetPayload,
  escapeHtml,
  isEmail,
  parseRecipients,
  validateContact,
} from '../shared/contact.js'

const valid = { name: 'Sara', email: 'sara@example.com', message: 'Bonjour', services: ['SEO'] }

describe('validateContact', () => {
  it('accepte un message valide et normalise les champs', () => {
    const result = validateContact({ ...valid, name: '  Sara  ', phone: '', company: ' ACME ' })
    expect(result).toEqual({
      ok: true,
      data: {
        name: 'Sara',
        email: 'sara@example.com',
        message: 'Bonjour',
        phone: '',
        company: 'ACME',
        services: ['SEO'],
      },
    })
  })

  it('rejette un corps non objet', () => {
    expect(validateContact(null).ok).toBe(false)
    expect(validateContact('x').ok).toBe(false)
  })

  it.each([
    ['nom vide', { name: '' }],
    ['nom trop long', { name: 'a'.repeat(81) }],
    ['email invalide', { email: 'pas-un-email' }],
    ['message vide', { message: '   ' }],
    ['message trop long', { message: 'a'.repeat(1001) }],
    ['entreprise trop longue', { company: 'a'.repeat(101) }],
    ['téléphone invalide', { phone: 'abc' }],
  ])('rejette : %s', (_label, patch) => {
    expect(validateContact({ ...valid, ...patch }).ok).toBe(false)
  })

  it('accepte un numéro international', () => {
    expect(validateContact({ ...valid, phone: '+212 6 12 34 56 78' }).ok).toBe(true)
  })

  it('ignore les services vides', () => {
    const result = validateContact({ ...valid, services: ['', '  ', 'SEO'] })
    expect(result.data.services).toEqual(['SEO'])
  })
})

describe('escapeHtml / buildEmailHtml', () => {
  it('échappe les caractères HTML', () => {
    expect(escapeHtml('<b>"x"&\'y\'</b>')).toBe('&lt;b&gt;&quot;x&quot;&amp;&#39;y&#39;&lt;/b&gt;')
  })

  it('n’injecte aucun HTML issu de l’utilisateur dans l’e-mail', () => {
    const html = buildEmailHtml({
      name: '<img src=x onerror=alert(1)>',
      email: 'a@b.co',
      message: '<b>hi</b>\nligne 2',
      phone: '',
      company: '',
      services: [],
    })
    expect(html).not.toContain('<img')
    expect(html).not.toContain('<b>hi')
    expect(html).toContain('&lt;b&gt;hi&lt;/b&gt;<br>ligne 2')
  })
})

describe('buildSheetPayload', () => {
  it('préfixe le message avec l’entreprise', () => {
    const payload = buildSheetPayload({ ...valid, phone: '', company: 'ACME' })
    expect(payload.message).toBe('Entreprise : ACME\n\nBonjour')
    expect(payload.statut).toBe('Nouvelle')
  })
})

describe('isEmail / parseRecipients', () => {
  it('valide les e-mails', () => {
    expect(isEmail('a@b.co')).toBe(true)
    expect(isEmail('a@b')).toBe(false)
  })

  it('parse une liste séparée par des virgules et ignore les valeurs invalides', () => {
    expect(parseRecipients('a@b.co, x ,c@d.ma,')).toEqual(['a@b.co', 'c@d.ma'])
    expect(parseRecipients(undefined)).toEqual([])
  })
})
