import { afterEach, describe, expect, it, vi } from 'vitest'
import { onRequest } from '../functions/api/contact.js'

const env = { RESEND_API_KEY: 're_real', CONTACT_TO_EMAILS: 'team@example.com' }
const body = { name: 'Sara', email: 'sara@example.com', message: 'Bonjour', services: [] }

function post(payload, overrides = env) {
  const request = new Request('https://x.test/api/contact', {
    method: 'POST',
    body: typeof payload === 'string' ? payload : JSON.stringify(payload),
  })
  return onRequest({ request, env: overrides })
}

afterEach(() => vi.unstubAllGlobals())

describe('POST /api/contact', () => {
  it('refuse les méthodes autres que POST', async () => {
    const res = await onRequest({ request: new Request('https://x.test', { method: 'GET' }), env })
    expect(res.status).toBe(405)
  })

  it('renvoie 500 sans destinataires configurés', async () => {
    const res = await post(body, { RESEND_API_KEY: 're_real' })
    expect(res.status).toBe(500)
  })

  it('renvoie 400 sur JSON invalide et 422 sur données invalides', async () => {
    expect((await post('{oops')).status).toBe(400)
    expect((await post({ ...body, email: 'nope' })).status).toBe(422)
  })

  it('répond ok sans rien envoyer quand le honeypot est rempli', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    const res = await post({ ...body, website: 'http://spam' })
    expect(await res.json()).toEqual({ ok: true })
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('envoie l’e-mail aux destinataires configurés', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('{}', { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)
    const res = await post(body, { ...env, GOOGLE_SHEET_URL: 'https://sheet.test/exec' })
    expect(await res.json()).toMatchObject({ ok: true, emailSent: true, sheetSaved: true })
    const resendCall = fetchMock.mock.calls.find(([url]) => String(url).includes('resend'))
    const sent = JSON.parse(resendCall[1].body)
    expect(sent.to).toEqual(['team@example.com'])
    expect(sent.reply_to).toBe('sara@example.com')
  })

  it('renvoie 502 quand Resend refuse', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(new Response('{"message":"domaine non vérifié"}', { status: 403 }))
    )
    const res = await post(body)
    expect(res.status).toBe(502)
    expect((await res.json()).error).toBe('domaine non vérifié')
  })
})
