import { useParams } from 'react-router-dom'
import { Banner, Container, ProductList } from './styles'
import ProductCard from '../../components/ProductCard'
import NotFound from '../../components/NotFound'
import hiokiImage from '../../assets/Hioki Sushi.png'
import pizzaImage from '../../assets/Pizza Marguerita.png'
import dolceVitaImage from '../../assets/La Dolce Vita Trattoria.png'

type RestaurantType = {
  name: string
  category: string
  banner: string
  products: {
    id: number
    name: string
    description: string
    image: string
    price: number
  }[]
}

const restaurants: Record<string, RestaurantType> = {
  '1': {
    name: 'Hioki Sushi',
    category: 'Japonesa',
    banner: hiokiImage,
    products: [
      {
        id: 1,
        name: 'Combinado Especial',
        description: 'Seleção premium com 44 peças. Sushis, sashimis e hots variados.',
        image: hiokiImage,
        price: 129.90
      },
      {
        id: 2,
        name: 'Sushi Deluxe',
        description: 'Combinado com 22 peças de sushi variado.',
        image: hiokiImage,
        price: 89.90
      }
    ]
  },
  '2': {
    name: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    banner: dolceVitaImage,
    products: [
      {
        id: 1,
        name: 'Pizza Margherita',
        description: 'A clássica pizza italiana com molho de tomate, mussarela de búfala, manjericão fresco e azeite.',
        image: pizzaImage,
        price: 69.90
      },
      {
        id: 2,
        name: 'Pizza Pepperoni',
        description: 'Pizza com generosa camada de pepperoni, molho de tomate e queijo mussarela.',
        image: pizzaImage,
        price: 75.90
      }
    ]
  }
}

const Restaurant = () => {
  const { id } = useParams()
  const restaurant = id ? restaurants[id] : null

  if (!restaurant) {
    return <NotFound />
  }

  return (
    <>
      <Banner style={{ backgroundImage: `url(${restaurant.banner})` }}>
        <div className="container">
          <span>{restaurant.category}</span>
          <h2>{restaurant.name}</h2>
        </div>
      </Banner>
      <Container>
        <div className="container">
          <ProductList>
            {restaurant.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductList>
        </div>
      </Container>
    </>
  )
}

export default Restaurant
