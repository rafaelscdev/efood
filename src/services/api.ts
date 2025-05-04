import { Restaurant } from '../types/restaurant'

const API_URL = 'https://fake-api-tau.vercel.app/api/efood'

export const getRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch(`${API_URL}/restaurantes`)
  const data = await response.json()
  return data
}

export const getRestaurantById = async (id: number): Promise<Restaurant> => {
  const response = await fetch(`${API_URL}/restaurantes/${id}`)
  const data = await response.json()
  return data
}
