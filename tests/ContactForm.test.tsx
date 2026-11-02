import { afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import ContactPage from '../src/pages/ContactPage'
import ServicePicker from '../src/components/contact/ServicePicker'
import { serviceFromParam } from '../src/constants/services'
import { limitPhone } from '../src/constants/contactLimits'

const nativeReportValidity = HTMLFormElement.prototype.reportValidity

afterEach(() => {
  vi.unstubAllGlobals()
  HTMLFormElement.prototype.reportValidity = nativeReportValidity
})

function renderContact(url = '/contact') {
  return render(
    <MemoryRouter initialEntries={[url]}>
      <ContactPage />
    </MemoryRouter>
  )
}

describe('serviceFromParam / limitPhone', () => {
  it('retrouve un service par id ou libellé', () => {
    expect(serviceFromParam('seo')).toBe('Référencement naturel (SEO)')
    expect(serviceFromParam('Création de site web')).toBe('Création de site web')
    expect(serviceFromParam('inconnu')).toBe('')
    expect(serviceFromParam(null)).toBe('')
  })

  it('filtre les caractères non téléphoniques et limite la longueur', () => {
    expect(limitPhone('06 abc 12-34')).toBe('06  12-34')
    expect(limitPhone('1'.repeat(30))).toHaveLength(20)
  })
})

describe('ServicePicker', () => {
  it('ouvre la liste, sélectionne un service et la referme', async () => {
    const onChange = vi.fn()
    render(<ServicePicker value="" disabled={false} onChange={onChange} />)
    const user = userEvent.setup()

    await user.click(screen.getByRole('button', { name: /choisir un service/i }))
    await user.click(screen.getByRole('option', { name: /référencement seo/i }))

    expect(onChange).toHaveBeenCalledWith('Référencement naturel (SEO)')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('se ferme avec Échap', async () => {
    render(<ServicePicker value="" disabled={false} onChange={() => {}} />)
    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: /choisir un service/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })
})

describe('ContactPage', () => {
  it('préselectionne le service depuis ?service=', () => {
    renderContact('/contact?service=seo')
    expect(screen.getAllByText('Référencement SEO').length).toBeGreaterThan(0)
  })

  it('n’appelle pas l’API quand le formulaire est invalide', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    renderContact()
    // Champs requis vides : la validation native bloque l'envoi
    fireEvent.keyDown(screen.getByRole('button', { name: /glisser vers la droite/i }), {
      key: 'Enter',
    })

    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('envoie le message et affiche la confirmation', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(
        new Response(JSON.stringify({ ok: true, emailSent: true, sheetSaved: true }))
      )
    vi.stubGlobal('fetch', fetchMock)
    // jsdom n'implémente pas reportValidity de façon fiable sur les champs cachés
    HTMLFormElement.prototype.reportValidity = () => true
    renderContact('/contact?service=seo')
    const user = userEvent.setup()

    await user.type(screen.getByPlaceholderText('Votre nom'), '  Sara ')
    await user.type(screen.getByPlaceholderText('Votre email'), 'sara@example.com')
    await user.type(screen.getByPlaceholderText('Votre message ...'), 'Bonjour')
    fireEvent.keyDown(screen.getByRole('button', { name: /glisser vers la droite/i }), {
      key: 'Enter',
    })

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))
    const [url, init] = fetchMock.mock.calls[0]
    expect(url).toBe('/api/contact')
    expect(JSON.parse(init.body)).toMatchObject({
      name: 'Sara',
      email: 'sara@example.com',
      message: 'Bonjour',
      services: ['Référencement naturel (SEO)'],
    })
    expect(await screen.findByRole('status')).toHaveTextContent(/bien été envoyé/i)
  })

  it('affiche l’erreur renvoyée par l’API', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ ok: false, error: 'Adresse email invalide.' }), {
          status: 422,
        })
      )
    )
    HTMLFormElement.prototype.reportValidity = () => true
    renderContact()
    const user = userEvent.setup()
    await user.type(screen.getByPlaceholderText('Votre nom'), 'Sara')
    await user.type(screen.getByPlaceholderText('Votre email'), 'x@y.z')
    await user.type(screen.getByPlaceholderText('Votre message ...'), 'Salut')
    fireEvent.keyDown(screen.getByRole('button', { name: /glisser vers la droite/i }), {
      key: 'Enter',
    })

    expect(await screen.findByRole('status')).toHaveTextContent('Adresse email invalide.')
  })
})
