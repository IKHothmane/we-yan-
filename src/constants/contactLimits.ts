/** Doit rester aligné avec LIMITS dans shared/contact.js. */
export const LIMITS = {
  name: 80,
  company: 100,
  email: 120,
  phone: 20,
  message: 1000,
} as const

export const PHONE_PATTERN = '^[+\\d\\s().-]{8,20}$'

export function limitText(value: string, max: number) {
  return value.slice(0, max)
}

/** Chiffres, espaces, +, ( ) et tirets uniquement. */
export function limitPhone(value: string) {
  return value.replace(/[^\d+\s().-]/g, '').slice(0, LIMITS.phone)
}
