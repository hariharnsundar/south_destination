import { useEffect } from 'react'
import { ArrowLeft, MapPin, CarFront, CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import TravelImage from '../components/TravelImage.jsx'
import WhatsAppLink from '../components/WhatsAppLink.jsx'
import { destinations, destinationImageSources } from '../data/destinations.js'

export default function DestinationDetail() {
  const { slug } = useParams()
  const destination = destinations.find((item) => item.slug === slug)

  useEffect(() => {
    if (!destination) return
    document.title = destination.seo.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', destination.seo.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', destination.seo.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', destination.seo.description)
  }, [destination])

  if (!destination) {
    return (
      <section className="section-pad">
        <div className="page-shell">
          <Link to="/destinations" className="text-action"><ArrowLeft size={16} /> Back to destinations</Link>
          <h2>Destination not found.</h2>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="page-intro">
        <TravelImage className="page-intro-image" id={destination.image} alt={destination.alt} width={1800} />
        <div className="page-intro-shade" />
        <a className="image-source detail-image-source" href={destinationImageSources[destination.slug].url} target="_blank" rel="noreferrer">Photo: {destinationImageSources[destination.slug].author}</a>
        <div className="page-shell page-intro-content">
          <Link to="/destinations" className="text-action light-action"><ArrowLeft size={16} /> Back to destinations</Link>
          <p className="eyebrow eyebrow-light">{destination.state} · From {destination.startingPoint}</p>
          <h1>{destination.name}</h1>
          <p>{destination.travelIntro}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell destination-detail-layout">
          <div className="destination-detail-summary">
            <p className="eyebrow">TRAVEL INTRODUCTION</p>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <div className="detail-highlights">
              {destination.whyVisit.map((point) => (
                <div key={point} className="detail-highlight-row">
                  <CheckCircle2 size={16} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="detail-panel">
            <div className="detail-panel-head">
              <CarFront size={18} />
              <h3>Suggested vehicles</h3>
            </div>
            <ul className="detail-panel-list">
              {destination.vehicleTypes.map((vehicle) => (
                <li key={vehicle}><MapPin size={12} /> {vehicle}</li>
              ))}
            </ul>
            <WhatsAppLink className="button-whatsapp detail-cta" message={destination.whatsappMessage}>Plan this trip</WhatsAppLink>
          </aside>
        </div>
      </section>

      <section className="section-pad section-warm">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">POPULAR ATTRACTIONS</p>
            <h2>What to explore</h2>
          </div>
          <div className="detail-attraction-grid">
            {destination.attractions.map((attraction) => (
              <article key={attraction} className="detail-attraction-card">
                <span>{attraction}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell destination-detail-bottom">
          <div>
            <p className="eyebrow">WHY VISIT</p>
            <h2>Why travelers choose this route</h2>
            <p>{destination.travelExperience}</p>
          </div>
          <div className="detail-booking-box">
            <h3>Travel experience</h3>
            <p>We provide travel services for trips from Madurai to {destination.name} with comfortable vehicles, experienced drivers and trip planning that fits your schedule.</p>
            <WhatsAppLink className="button-whatsapp" message={destination.whatsappMessage}>Ask for availability</WhatsAppLink>
          </div>
        </div>
      </section>

    </>
  )
}
