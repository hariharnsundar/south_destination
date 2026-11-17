import { useState } from 'react'
import { Calculator, Download, RotateCcw } from 'lucide-react'
import { vehicles, vehicleTariffRules } from '../data/vehicles.js'
import { calculateTripEstimate } from '../utils/tripEstimate.js'
import { downloadEstimatePdf } from '../utils/estimatePdf.js'
import { motion } from 'framer-motion'

const formatRupees = (amount) => new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 2,
}).format(amount)

export default function TripCostCalculator() {
  const [vehicleId, setVehicleId] = useState('')
  const [distance, setDistance] = useState('')
  const [days, setDays] = useState('1')
  const [estimate, setEstimate] = useState(null)
  const [error, setError] = useState('')
  const estimateVehicle = estimate ? vehicles.find((vehicle) => vehicle.id === vehicleId) : null

  const reset = () => {
    setVehicleId('')
    setDistance('')
    setDays('1')
    setEstimate(null)
    setError('')
  }

  const calculate = (event) => {
    event.preventDefault()
    const vehicle = vehicles.find((item) => item.id === vehicleId)
    const parsedDistance = Number(distance)
    const parsedDays = Number(days)

    if (!vehicle || !distance || !Number.isFinite(parsedDistance) || parsedDistance <= 0) {
      setEstimate(null)
      setError('Select a vehicle and enter a distance greater than 0 km.')
      return
    }
    if (!Number.isInteger(parsedDays) || parsedDays < 1) {
      setEstimate(null)
      setError('Enter at least 1 full travel day.')
      return
    }

    setError('')
    setEstimate(calculateTripEstimate(vehicle, parsedDistance, parsedDays))
  }

  return (
    <motion.section className="trip-calculator-section section-pad" aria-labelledby="trip-calculator-title" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.55 }}>
      <div className="page-shell">
        <div className="trip-calculator-heading">
          <p className="eyebrow">PLAN WITH CONFIDENCE</p>
          <h2 id="trip-calculator-title">Trip Cost Calculator</h2>
          <p>Get an instant estimate for your trip based on your vehicle, distance and travel duration.</p>
        </div>

        <div className="trip-calculator-card">
          <form className="trip-calculator-form" onSubmit={calculate} noValidate>
            <div className="trip-calculator-fields">
              <label className="trip-calculator-field">
                <span>Vehicle Type</span>
                <select value={vehicleId} onChange={(event) => { setVehicleId(event.target.value); setEstimate(null); setError('') }}>
                  <option value="">Select Vehicle</option>
                  {vehicles.map((vehicle) => <option value={vehicle.id} key={vehicle.id}>{vehicle.name}</option>)}
                </select>
              </label>
              <label className="trip-calculator-field">
                <span>Total Distance (km)</span>
                <input type="number" inputMode="decimal" min="0.1" step="any" placeholder="e.g. 100" value={distance} onChange={(event) => { setDistance(event.target.value); setEstimate(null); setError('') }} />
              </label>
              <label className="trip-calculator-field">
                <span>Number of Days</span>
                <input type="number" inputMode="numeric" min="1" step="1" value={days} onChange={(event) => { setDays(event.target.value); setEstimate(null); setError('') }} />
              </label>
            </div>
            <p className="trip-calculator-hint">Up to {vehicleTariffRules.includedKmPerDay} km, the estimate includes the day cost and per-km charge. Above {vehicleTariffRules.includedKmPerDay} km, only the extra-km charge applies.</p>
            {error && <p className="trip-calculator-error" role="alert">{error}</p>}
            <div className="trip-calculator-actions">
              <button className="button button-primary" type="submit"><Calculator size={17} /> Calculate Estimate</button>
              <button className="trip-reset-button" type="button" onClick={reset}><RotateCcw size={15} /> Reset</button>
            </div>
          </form>

          {estimate && (
            <div className="trip-estimate-result" aria-live="polite">
              <div className="trip-estimate-card-header">
                <h3>Estimation Result</h3>
                <button className="trip-estimate-download" type="button" onClick={() => downloadEstimatePdf(estimate, estimateVehicle)}><Download size={16} /> Download PDF</button>
              </div>
              <div className="trip-estimate-meta">
                <div className="trip-estimate-meta-block">
                  <span>Vehicle</span>
                  <strong>{estimateVehicle.name}</strong>
                  <small>{estimateVehicle.seating}</small>
                </div>
                <div className="trip-estimate-meta-block">
                  <span>Trip Details</span>
                  <strong>{estimate.distance.toLocaleString('en-IN')} km</strong>
                  <small>{estimate.days} {estimate.days === 1 ? 'day' : 'days'}</small>
                </div>
              </div>
              <div className="trip-estimate-breakdown">
                <h4>Cost Breakdown</h4>
                {estimate.isAboveThreshold ? (
                  <>
                    {/* <div className="trip-estimate-line"><span>Extra KM ({estimate.distance.toLocaleString('en-IN')} − {estimate.thresholdKm})</span><strong>{estimate.extraKm.toLocaleString('en-IN', { maximumFractionDigits: 1 })} km</strong></div> */}
                    <div className="trip-estimate-line"><span>KM Fare ({estimate.distance.toLocaleString('en-IN')} km × {formatRupees(estimate.extraKmRate)}/km)</span><strong>{formatRupees(estimate.aboveThresholdCharge)}</strong></div>
                    <p className="trip-estimate-rule-note">The above-{estimate.thresholdKm} km rate applies to the full trip distance. Day cost is not included.</p>
                  </>
                ) : (
                  <>
                    <div className="trip-estimate-line"><span>Day Cost</span><strong>{formatRupees(estimate.dayCost)}</strong></div>
                    <div className="trip-estimate-line"><span>KM Fare ({estimate.distance.toLocaleString('en-IN')} km × {formatRupees(estimate.perKmRate)}/km)</span><strong>{formatRupees(estimate.perKmCharge)}</strong></div>
                  </>
                )}
              </div>
              <div className="trip-estimate-total"><span>Total Estimated Cost</span><strong>{formatRupees(estimate.total)}</strong></div>
              <p className="trip-estimate-disclaimer">This is a rough estimation. Final cost may vary based on actual route, toll charges, parking fees, and other applicable charges. For accurate pricing, please contact us.</p>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}
