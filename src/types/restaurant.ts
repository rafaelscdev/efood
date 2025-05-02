export type Product = {
  id: number
  name: string
  description: string
  image: string
  price: number
}

export type Restaurant = {
  id: number
  name: string
  category: string
  rating: number
  description: string
  image: string
  banner?: string
  products?: Product[]
}
