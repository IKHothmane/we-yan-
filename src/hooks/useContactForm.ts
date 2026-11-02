import { useRef, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { serviceFromParam } from '../constants/services'
import { sendContactMessage } from '../lib/sendContact'

const SUCCESS_MESSAGE =
  'Merci ! Votre message a bien été envoyé et enregistré. Notre équipe vous répondra rapidement.'
const GENERIC_ERROR = 'Impossible d’envoyer le message. Réessayez dans un instant.'

export function useContactForm() {
  const [searchParams] = useSearchParams()
  const formRef = useRef<HTMLFormElement>(null)
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState(() => serviceFromParam(searchParams.get('service')))
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('')
  const [feedback, setFeedback] = useState('')
  const [feedbackError, setFeedbackError] = useState(false)
  const [complete, setComplete] = useState(false)
  const [sending, setSending] = useState(false)

  // Préselectionne le service quand le paramètre d'URL change (ajustement d'état pendant le rendu).
  const serviceParam = searchParams.get('service')
  const [lastServiceParam, setLastServiceParam] = useState(serviceParam)
  if (serviceParam !== lastServiceParam) {
    setLastServiceParam(serviceParam)
    setService(serviceFromParam(serviceParam))
  }

  async function submit(): Promise<boolean> {
    const form = formRef.current
    if (!form) return false
    if (!form.reportValidity()) {
      setComplete(false)
      return false
    }
    if (sending || complete) return complete

    setSending(true)
    setFeedback('')
    setFeedbackError(false)

    try {
      const result = await sendContactMessage({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        company: company.trim(),
        message: message.trim(),
        services: service ? [service] : [],
        website,
      })
      setComplete(true)
      setFeedbackError(Boolean(result.warning))
      setFeedback(result.warning ?? SUCCESS_MESSAGE)
      return true
    } catch (error) {
      setComplete(false)
      setFeedbackError(true)
      setFeedback(error instanceof Error ? error.message : GENERIC_ERROR)
      return false
    } finally {
      setSending(false)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (complete || sending) return
    void submit()
  }

  return {
    formRef,
    values: { name, company, email, phone, service, message, website },
    setters: { setName, setCompany, setEmail, setPhone, setService, setMessage, setWebsite },
    feedback,
    feedbackError,
    complete,
    sending,
    submit,
    handleSubmit,
  }
}
