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

export type CheckoutPayload = {
  products: {
    id: number
    price: number
  }[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: string
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: string
      expires: {
        month: string
        year: string
      }
    }
  }
}

export type CheckoutResponse = {
  orderId: string
  status: string
}

export const checkout = async (payload: CheckoutPayload): Promise<CheckoutResponse> => {
  const response = await fetch(`${API_URL}/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    throw new Error('Erro ao processar o pagamento')
  }

  return response.json()
}
