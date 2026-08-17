export type ContactPayload = {
  name: string
  email: string
  message: string
  services: string[]
  website?: string
}

export async function sendContactMessage(payload: ContactPayload) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = (await response.json().catch(() => ({}))) as { error?: string; ok?: boolean }

  if (!response.ok || !data.ok) {
    throw new Error(data.error || 'Impossible d’envoyer le message. Réessayez dans un instant.')
  }
}
