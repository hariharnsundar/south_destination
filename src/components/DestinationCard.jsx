import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import WhatsAppLink from './WhatsAppLink.jsx'
import TravelImage from './TravelImage.jsx'
import { destinationImageSources } from '../data/destinations.js'

export default function DestinationCard({ destination, index = 0 }) {
  return (
    <motion.article className="destination-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}>
      <div className="destination-image"><TravelImage id={destination.image} width={900} alt={destination.alt} loading="lazy" /><a className="image-source" href={destinationImageSources[destination.slug].url} target="_blank" rel="noreferrer">Photo: {destinationImageSources[destination.slug].author}</a><span className="destination-index">{String(index + 1).padStart(2, '0')}</span></div>
      <div className="destination-copy">
        <p className="destination-state">{destination.state}</p>
        <h3>{destination.name}</h3>
        <p className="destination-starting">From {destination.startingPoint}</p>
        <p className="destination-summary">{destination.description}</p>
        <ul className="destination-attractions">
          {destination.attractions.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="destination-actions">
          <Link className="text-action" to={`/destinations/${destination.slug}`}>
            View details <ArrowUpRight size={15} />
          </Link>
          <WhatsAppLink className="destination-enquire" icon={false} message={destination.whatsappMessage}>Plan this trip</WhatsAppLink>
        </div>
      </div>
    </motion.article>
  )
}
