import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Vehicles from './pages/Vehicles.jsx'
import Services from './pages/Services.jsx'
import Destinations from './pages/Destinations.jsx'
import DestinationDetail from './pages/DestinationDetail.jsx'
import Contact from './pages/Contact.jsx'
import { destinations } from './data/destinations.js'
import { MotionConfig } from 'framer-motion'

const pageMeta = {
  '/': ['South Destination | Travels in Madurai', 'Travel comfortably from Madurai with South Destination. Enquire about local journeys, outstation travel and South India tours.'],
  '/about': ['About South Destination | Travels in Madurai', 'Get to know the Madurai travel professionals behind South Destination and our approach to comfortable journeys.'],
  '/vehicles': ['Vehicles | South Destination Madurai', 'Explore cars and group vehicles for local travel, outstation trips and tours from Madurai. Confirm availability and seating details directly.'],
  '/services': ['Travel Services | South Destination Madurai', 'Discover local travel, outstation trips, temple tours, airport transfers and customized journeys from Madurai.'],
  '/destinations': ['Explore South India with South Destination', 'Comfortable journeys from Madurai to beautiful destinations across Tamil Nadu and Kerala.'],
  '/contact': ['Contact South Destination | Madurai Travels', 'Contact South Destination in Madurai to discuss a vehicle, trip or customized South India itinerary.'],
}

function PageMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    let title = pageMeta[pathname]?.[0] || 'South Destination | Travels in Madurai'
    let description = pageMeta[pathname]?.[1] || pageMeta['/'][1]

    if (pathname.startsWith('/destinations/')) {
      const match = pathname.match(/^\/destinations\/([^/]+)$/)
      const slug = match?.[1]
      const destination = destinations.find((item) => item.slug === slug)
      if (destination?.seo) {
        title = destination.seo.title
        description = destination.seo.description
      }
    }

    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://southdestnation.com${pathname}`)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = `https://southdestnation.com${pathname}`
  }, [pathname])

  return null
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
    <>
      <PageMetadata />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/services" element={<Services />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
    </MotionConfig>
  )
}
