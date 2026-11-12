import { site } from '../data/site.js'

export function whatsappUrl(message) {
  const number = site.whatsapp.replace(/\D/g, '')
  const base = number ? `https://wa.me/${number}` : 'https://wa.me/'
  return `${base}?text=${encodeURIComponent(message)}`
}

export function bookingMessage(subject = 'a trip') {
  return `Hello South Destination, I would like to enquire about ${subject}. Please share the details.`
}