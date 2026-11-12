import { MessageCircle, ArrowUpRight } from 'lucide-react'
import { whatsappUrl } from '../utils/whatsapp.js'

export default function WhatsAppLink({ children = 'Chat on WhatsApp', message, className = '', icon = true }) {
  return (
    <a
      className={`button button-whatsapp ${className}`}
      href={whatsappUrl(message || 'Hello South Destination, I would like to plan a trip. Please share the details.')}
      target="_blank"
      rel="noreferrer"
    >
      {icon && <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />}
      <span>{children}</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  )
}