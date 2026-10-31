export type ContactPayload = {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  services: string[]
  website?: string
}

export type ContactSendResult = {
  emailSent?: boolean
  sheetSaved?: boolean
  warning?: string
}

export async function sendContactMessage(payload: ContactPayload): Promise<ContactSendResult> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = (await response.json().catch(() => ({}))) as {
    error?: string
    ok?: boolean
    emailSent?: boolean
    sheetSaved?: boolean
    warning?: string
  }

  if (!response.ok || !data.ok) {
    throw new Error(data.error || 'Impossible d’envoyer le message. Réessayez dans un instant.')
  }

  return {
    emailSent: data.emailSent,
    sheetSaved: data.sheetSaved,
    warning: data.warning,
  }
}
