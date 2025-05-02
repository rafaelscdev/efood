import { Container, RestaurantList } from './styles'
import RestaurantCard from '../../components/RestaurantCard'
import hiokiImage from '../../assets/Hioki Sushi.png'
import dolceVitaImage from '../../assets/La Dolce Vita Trattoria.png'

const restaurants = [
  {
    id: 1,
    name: 'Hioki Sushi',
    category: 'Japonesa',
    rating: 4.9,
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis e pratos quentes.',
    image: hiokiImage
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: 4.8,
    description: 'A verdadeira cozinha italiana com massas frescas, pizzas artesanais e vinhos selecionados.',
    image: dolceVitaImage
  },
  {
    id: 3,
    name: 'Hioki Sushi Express',
    category: 'Japonesa',
    rating: 4.7,
    description: 'Combinados exclusivos de sushi com preço especial, entrega rápida e pratos quentes.',
    image: hiokiImage
  },
  {
    id: 4,
    name: 'La Dolce Vita Pizzaria',
    category: 'Italiana',
    rating: 4.9,
    description: 'As melhores pizzas artesanais com ingredientes importados da Itália e massa fermentada naturalmente.',
    image: dolceVitaImage
  }
]

const Home = () => {
  return (
    <Container>
      <div className="container">
        <RestaurantList>
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </RestaurantList>
      </div>
    </Container>
  )
}

export default Home
