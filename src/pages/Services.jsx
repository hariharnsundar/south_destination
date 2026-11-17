import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import WhatsAppLink from '../components/WhatsAppLink.jsx'
import { services } from '../data/services.js'
import { bookingMessage } from '../utils/whatsapp.js'

export default function Services() {
  return (
    <>
      <PageIntro eyebrow="FROM THE EVERYDAY TO THE EXTRAORDINARY" title="Travel plans that start with you." text="A city ride, a family holiday or a route still taking shape. Let’s find a way to make it happen." />
      <section className="section-pad"><div className="page-shell"><div className="section-heading heading-inline"><div><p className="eyebrow">HOW CAN WE HELP YOU TRAVEL?</p><h2>A little something<br />for every itinerary.</h2></div><p className="heading-note">Choose a starting point. We’ll help shape the rest around your dates, destination and group.</p></div><div className="service-grid">{services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}</div></div></section>
      <section className="service-cta"><div className="page-shell service-cta-inner"><div><p className="eyebrow eyebrow-light">YOUR PLAN DOESN’T HAVE TO FIT A BOX</p><h2>Have somewhere else<br />in mind?</h2><p>Tell us what you’re planning. We’ll talk through your route and travel needs.</p></div><div><WhatsAppLink message={bookingMessage('a customized trip')}>Tell us about your trip</WhatsAppLink><Link className="text-action light-action" to="/contact">Contact details <ArrowRight size={16} /></Link></div></div></section>
    </>
  )
}
