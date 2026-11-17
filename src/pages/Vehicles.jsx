import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageIntro from '../components/PageIntro.jsx'
import VehicleCard from '../components/VehicleCard.jsx'
import WhatsAppLink from '../components/WhatsAppLink.jsx'
import TravelImage from '../components/TravelImage.jsx'
import { vehicles } from '../data/vehicles.js'
import { maduraiPanorama, maduraiPanoramaAlt } from '../utils/images.js'
import { bookingMessage } from '../utils/whatsapp.js'

const vehicleTerms = [
  'Toll, parking, and permit charges are extra and to be paid by the customer.',
  'Minimum 300 km per day for outstation trips.',
  'Hill station charges apply as listed for each vehicle type.',
  'Prices are subject to change during peak season and festivals.',
  'AC will be switched off in hilly areas to prevent engine overheating.',
]

export default function Vehicles() {
  return (
    <>
      <PageIntro eyebrow="YOUR RIDE, YOUR ROUTE" title="Comfort for every kind of journey." text="Browse vehicle options for city travel, family plans and trips further afield. Ask us about availability and the details that matter to your group." />
      <section className="section-pad vehicles-page"><div className="page-shell"><div className="section-heading heading-inline"><div><p className="eyebrow">SOUTH DESTINATION · VEHICLES &amp; TARIFF</p><h2>Our Vehicles &amp; Tariff</h2><p className="heading-note">Comfortable and reliable vehicles for your journey.</p></div><p className="heading-note">Message us to confirm availability and travel details.</p></div><div className="vehicle-grid">{vehicles.map((vehicle, index) => <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />)}</div></div></section>
      <motion.section className="vehicle-terms section-pad section-warm" aria-labelledby="vehicle-terms-title" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5 }}>
        <div className="page-shell vehicle-terms-layout">
          <div className="vehicle-terms-heading"><p className="eyebrow">BEFORE YOU TRAVEL</p><h2 id="vehicle-terms-title">Terms &amp; Conditions</h2><p>Please review these details when planning your journey.</p></div>
          <ol className="vehicle-terms-list">{vehicleTerms.map((term) => <li key={term}><span>{term}</span></li>)}</ol>
        </div>
      </motion.section>
      <section className="fleet-banner"><TravelImage src={maduraiPanorama} alt={maduraiPanoramaAlt} loading="lazy" /><div className="fleet-banner-overlay" /><div className="page-shell fleet-banner-content"><p className="eyebrow eyebrow-light">THE JOURNEY IS OURS TO HELP WITH</p><h2>Choose your vehicle.<br /><em>We’ll take care of your journey.</em></h2><WhatsAppLink message={bookingMessage()}>Find the right vehicle <ArrowRight size={16} /></WhatsAppLink><span className="sr-only">Travel arrangements are confirmed directly with South Destination.</span></div></section>
      <section className="section-pad vehicle-notes"><div className="page-shell vehicle-notes-inner"><div><p className="eyebrow">A GOOD FIT MAKES A DIFFERENCE</p><h2>Let’s find your<br />kind of comfortable.</h2></div><div className="note-list"><p><Check size={18} />Tell us how many people are travelling.</p><p><Check size={18} />Share your route and preferred dates.</p><p><Check size={18} />Ask us to confirm availability and seating details.</p><Link className="text-action" to="/contact">Have a question? Contact us <ArrowRight size={16} /></Link></div></div></section>
    </>
  )
}
