import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import WhatsAppLink from './WhatsAppLink.jsx'
import VehiclePhoto from './VehiclePhoto.jsx'

export default function VehicleCard({ vehicle, index = 0 }) {
  return (
    <motion.article className="vehicle-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}>
      <div className="vehicle-image-wrap">
        <VehiclePhoto vehicle={vehicle} />
      </div>
      <div className="vehicle-body">
        <div className="vehicle-heading"><h3>{vehicle.name}</h3><ArrowUpRight size={20} aria-hidden="true" /></div>
        <p>{vehicle.description}</p>
        <div className="vehicle-meta">{vehicle.suitability}</div>
        <WhatsAppLink className="card-action" message={vehicle.whatsappMessage}>Enquire on WhatsApp</WhatsAppLink>
      </div>
    </motion.article>
  )
}
