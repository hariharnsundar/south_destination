import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../utils/whatsapp.js'

export default function FloatingWhatsApp() {
  return (
    <a className="floating-whatsapp" href={whatsappUrl('Hello South Destination, I would like to plan a trip. Please share the details.')} target="_blank" rel="noreferrer" aria-label="Contact South Destination on WhatsApp">
      <MessageCircle size={23} aria-hidden="true" />
      <span>WhatsApp us</span>
    </a>
  )
}