import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro.jsx'
import VehicleCard from '../components/VehicleCard.jsx'
import VehiclePhoto from '../components/VehiclePhoto.jsx'
import WhatsAppLink from '../components/WhatsAppLink.jsx'
import TravelImage from '../components/TravelImage.jsx'
import { vehicles } from '../data/vehicles.js'
import { imageUrl } from '../utils/images.js'
import { bookingMessage } from '../utils/whatsapp.js'

export default function Vehicles() {
  return (
    <>
      <PageIntro eyebrow="YOUR RIDE, YOUR ROUTE" title="Comfort for every kind of journey." text="Browse vehicle options for city travel, family plans and trips further afield. Ask us about availability and the details that matter to your group." image={imageUrl('photo-1500530855697-b586d89ba3ee', 1800)} alt="Scenic travel route through a green landscape" />
      <section className="section-pad vehicles-page"><div className="page-shell"><div className="section-heading heading-inline"><div><p className="eyebrow">OUR VEHICLE COLLECTION</p><h2>Our Vehicles</h2><p className="heading-note">Comfortable and reliable vehicles for your journey.</p></div><p className="heading-note">Message us to confirm availability and travel details.</p></div><div className="vehicle-grid">{vehicles.map((vehicle, index) => <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />)}</div></div></section>
      <section className="section-pad section-warm vehicle-gallery">
        <div className="page-shell">
          <div className="section-heading"><p className="eyebrow">A CLOSER LOOK</p><h2>Travel With Comfort</h2></div>
          <div className="vehicle-gallery-grid">{vehicles.map((vehicle) => <figure className="vehicle-gallery-item" key={vehicle.id}><VehiclePhoto vehicle={vehicle} /><figcaption>{vehicle.name}</figcaption></figure>)}</div>
        </div>
      </section>
      <section className="fleet-banner"><TravelImage src={imageUrl('photo-1500530855697-b586d89ba3ee', 1800)} alt="Scenic road framed by green hills" loading="lazy" /><div className="fleet-banner-overlay" /><div className="page-shell fleet-banner-content"><p className="eyebrow eyebrow-light">THE JOURNEY IS OURS TO HELP WITH</p><h2>Choose your vehicle.<br /><em>We’ll take care of your journey.</em></h2><WhatsAppLink message={bookingMessage()}>Find the right vehicle <ArrowRight size={16} /></WhatsAppLink><span className="sr-only">Travel arrangements are confirmed directly with South Destination.</span></div></section>
      <section className="section-pad vehicle-notes"><div className="page-shell vehicle-notes-inner"><div><p className="eyebrow">A GOOD FIT MAKES A DIFFERENCE</p><h2>Let’s find your<br />kind of comfortable.</h2></div><div className="note-list"><p><Check size={18} />Tell us how many people are travelling.</p><p><Check size={18} />Share your route and preferred dates.</p><p><Check size={18} />Ask us to confirm availability and seating details.</p><Link className="text-action" to="/contact">Have a question? Contact us <ArrowRight size={16} /></Link></div></div></section>
    </>
  )
}
