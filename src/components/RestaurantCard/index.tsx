import { Link } from 'react-router-dom'
import { Card, CardImage, CardContent, CardTitle, CardTag, CardDescription } from './styles'
import { Restaurant } from '../../types/restaurant'

type RestaurantCardProps = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Card>
      <CardImage>
        <img
          src={restaurant.capa}
          alt={restaurant.titulo}
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/600x400?text=Imagem+não+encontrada'
          }}
        />
        <CardTag>{restaurant.tipo}</CardTag>
      </CardImage>
      <CardContent>
        <CardTitle>
          <h2>{restaurant.titulo}</h2>
          <span>{restaurant.avaliacao.toFixed(1)}</span>
        </CardTitle>
        <CardDescription>{restaurant.descricao}</CardDescription>
        <Link to={`/restaurante/${restaurant.id}`}>Saiba mais</Link>
      </CardContent>
    </Card>
  )
}

export default RestaurantCard
