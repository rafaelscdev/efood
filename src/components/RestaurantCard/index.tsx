import { Link } from 'react-router-dom'
import { Card, CardImage, CardContent, CardTitle, CardTag, CardDescription } from './styles'

type RestaurantProps = {
  restaurant: {
    id: number
    name: string
    category: string
    rating: number
    description: string
    image: string
  }
}

const RestaurantCard = ({ restaurant }: RestaurantProps) => {
  return (
    <Card>
      <CardImage>
        <img src={restaurant.image} alt={restaurant.name} />
        <CardTag>{restaurant.category}</CardTag>
      </CardImage>
      <CardContent>
        <CardTitle>
          <h2>{restaurant.name}</h2>
          <span>{restaurant.rating}</span>
        </CardTitle>
        <CardDescription>{restaurant.description}</CardDescription>
        <Link to={`/restaurante/${restaurant.id}`}>Saiba mais</Link>
      </CardContent>
    </Card>
  )
}

export default RestaurantCard 