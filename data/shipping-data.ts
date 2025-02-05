export const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
]

export const distanceMatrix: { [key: string]: { [key: string]: number } } = {
  "New York": { "Los Angeles": 2789, Chicago: 800, Houston: 1627, Phoenix: 2411 },
  "Los Angeles": { "New York": 2789, Chicago: 2015, Houston: 1553, Phoenix: 374 },
  Chicago: { "New York": 800, "Los Angeles": 2015, Houston: 1082, Phoenix: 1754 },
  Houston: { "New York": 1627, "Los Angeles": 1553, Chicago: 1082, Phoenix: 1178 },
  Phoenix: { "New York": 2411, "Los Angeles": 374, Chicago: 1754, Houston: 1178 },
  // Add more cities as needed
}

export const weightPrices = [
  { maxWeight: 5, pricePerMile: 0.05 },
  { maxWeight: 20, pricePerMile: 0.1 },
  { maxWeight: 50, pricePerMile: 0.2 },
  { maxWeight: 100, pricePerMile: 0.3 },
  { maxWeight: Number.POSITIVE_INFINITY, pricePerMile: 0.5 },
]

export const speedMultipliers = {
  Standard: 1,
  Express: 1.5,
  Overnight: 2,
}

export const discountCodes = {
  SHIP10: 0.1,
  FREESHIP: 0.15,
  SUMMER2023: 0.2,
}

