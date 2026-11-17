import { vehicleTariffRules } from '../data/vehicles.js'

export function calculateTripEstimate(vehicle, distance, days) {
  if (!vehicle || !Number.isFinite(distance) || distance <= 0 || !Number.isInteger(days) || days < 1) {
    throw new Error('Choose a vehicle and enter a positive distance and at least one day.')
  }

  const thresholdKm = vehicleTariffRules.includedKmPerDay
  const isAboveThreshold = distance > thresholdKm
  const dayCost = isAboveThreshold ? 0 : vehicle.pricing.below300Km.dayRent * days
  const perKmRate = isAboveThreshold ? null : vehicle.pricing.below300Km.perKm
  const perKmCharge = perKmRate === null ? 0 : distance * perKmRate
  const extraKm = isAboveThreshold ? distance - thresholdKm : 0
  const extraKmRate = isAboveThreshold ? vehicle.pricing.above300Km.perKm : null
  const aboveThresholdCharge = extraKmRate === null ? 0 : distance * extraKmRate

  return {
    vehicleName: vehicle.name,
    days,
    distance,
    thresholdKm,
    dayCost,
    perKmRate,
    perKmCharge,
    extraKm,
    extraKmRate,
    aboveThresholdCharge,
    isAboveThreshold,
    total: dayCost + perKmCharge + aboveThresholdCharge,
  }
}
