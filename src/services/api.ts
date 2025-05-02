import axios from 'axios'
import { Restaurant } from '../types/restaurant'

const api = axios.create({
  baseURL: 'https://fake-api-tau.vercel.app/api/efood'
})

export const getRestaurants = async (): Promise<Restaurant[]> => {
  try {
    console.log('Iniciando chamada à API...')
    const response = await api.get('/restaurantes')
    console.log('Status da resposta:', response.status)

    if (!response.data) {
      console.error('Dados nulos recebidos da API')
      throw new Error('Dados não encontrados')
    }

    if (!Array.isArray(response.data)) {
      console.error('Resposta não é um array:', typeof response.data)
      throw new Error('Formato de dados inválido')
    }

    console.log('Quantidade de restaurantes:', response.data.length)
    console.log('Primeiro restaurante:', JSON.stringify(response.data[0], null, 2))

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro na chamada da API:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data
      })
    } else {
      console.error('Erro inesperado:', error)
    }
    throw new Error('Não foi possível carregar os restaurantes. Por favor, tente novamente.')
  }
}

export const getRestaurantById = async (id: number): Promise<Restaurant> => {
  const response = await api.get(`/restaurantes/${id}`)
  return response.data
}

export default api
