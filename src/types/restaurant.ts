export type MenuItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Menu = {
  foods: MenuItem[]
  drinks: MenuItem[]
}

export type Product = {
  id: number
  name: string
  description: string
  image: string
  price: number
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

// Tipos transformados para uso interno
export type TransformedRestaurant = {
  id: number
  name: string
  highlighted: boolean
  category: string
  rating: number
  description: string
  image: string
  menu: MenuItem[]
}
