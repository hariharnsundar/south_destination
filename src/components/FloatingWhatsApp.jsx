import { MessageCircle, Phone } from 'lucide-react'
import { whatsappUrl } from '../utils/whatsapp.js'
import { site } from '../data/site.js'
import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
  return (
    <motion.div className="floating-contact-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}>
      {site.phone && <motion.a className="floating-call" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href={`tel:${site.phone}`} aria-label="Call South Destination" title="Call South Destination">
        <Phone size={21} aria-hidden="true" />
        <span>Call Us</span>
      </motion.a>}
      <motion.a className="floating-whatsapp" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href={whatsappUrl('Hello South Destination, I would like to plan a trip. Please share the details.')} target="_blank" rel="noreferrer" aria-label="Contact South Destination on WhatsApp">
        <MessageCircle size={23} aria-hidden="true" />
        <span>WhatsApp us</span>
      </motion.a>
    </motion.div>
  )
}
