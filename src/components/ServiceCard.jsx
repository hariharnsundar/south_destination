import { ArrowUpRight, BriefcaseBusiness, Compass, Landmark, MapPin, Mountain, Plane, Route, UsersRound } from 'lucide-react'
import { motion } from 'framer-motion'
import { bookingMessage } from '../utils/whatsapp.js'
import WhatsAppLink from './WhatsAppLink.jsx'

const icons = { BriefcaseBusiness, Compass, Landmark, MapPin, Mountain, Plane, Route, UsersRound }

export default function ServiceCard({ service, index = 0 }) {
  const Icon = icons[service.icon] || Compass
  return (
    <motion.article className="service-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}>
      <div className="service-image"><img src={service.image} alt={service.alt} loading="lazy" /><span className="service-icon"><Icon size={20} /></span></div>
      <div className="service-copy"><h3>{service.title}</h3><p>{service.text}</p><WhatsAppLink className="text-action" icon={false} message={bookingMessage(service.title.toLowerCase())}>Enquire on WhatsApp <ArrowUpRight size={15} /></WhatsAppLink></div>
    </motion.article>
  )
}
