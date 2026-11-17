import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro.jsx'
import DestinationCard from '../components/DestinationCard.jsx'
import TravelImage from '../components/TravelImage.jsx'
import WhatsAppLink from '../components/WhatsAppLink.jsx'
import { destinations, destinationImageSources, travelExperiences } from '../data/destinations.js'

const tamilNaduDestinations = destinations.filter((destination) => destination.state === 'Tamil Nadu')
const keralaDestinations = destinations.filter((destination) => destination.state === 'Kerala')

export default function Destinations() {
  return (
    <>
      <PageIntro
        eyebrow="A REGION MADE FOR THE ROAD"
        title="Explore South India with South Destination"
        text="Comfortable journeys from Madurai to beautiful destinations across Tamil Nadu and Kerala."
      />

      <section className="section-pad destinations-page">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">TAMIL NADU</p>
            <h2>Popular destinations from Madurai</h2>
          </div>
          <div className="destination-grid">
            {tamilNaduDestinations.map((destination, index) => (
              <DestinationCard key={destination.slug} destination={destination} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-warm">
        <div className="page-shell">
          <div className="section-heading heading-inline">
            <div>
              <p className="eyebrow">EXPLORE KERALA</p>
              <h2>Travel from Madurai to the beautiful destinations of Kerala.</h2>
            </div>
          </div>
          <div className="destination-grid">
            {keralaDestinations.map((destination, index) => (
              <DestinationCard key={destination.slug} destination={destination} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">MADURAI TO DESTINATIONS</p>
            <h2>Travel Experiences from Madurai</h2>
          </div>
          <div className="travel-experience-grid">
            {travelExperiences.map((route) => (
              <article key={route.route} className="experience-route-card">
                <div className="experience-route-image">
                  <TravelImage id={destinations.find((destination) => destination.slug === route.route)?.image || route.image} alt={`${route.name} route`} width={900} loading="lazy" />
                  <a className="image-source" href={destinationImageSources[route.route].url} target="_blank" rel="noreferrer">Photo: {destinationImageSources[route.route].author}</a>
                </div>
                <div className="experience-route-copy">
                  <h3>{route.name}</h3>
                  <WhatsAppLink className="button-whatsapp" icon={false} message={route.whatsappMessage}>Enquire</WhatsAppLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="destination-cta">
        <div className="page-shell destination-cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">GOOD ROUTES BEGIN WITH A CONVERSATION</p>
            <h2>Already know where you want to go?</h2>
          </div>
          <div>
            <WhatsAppLink message="Hello South Destination, I would like to plan a South India trip. Please share the available vehicles, pricing and travel details.">Plan your South India trip</WhatsAppLink>
            <Link to="/contact" className="text-action light-action">Talk to our team <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
