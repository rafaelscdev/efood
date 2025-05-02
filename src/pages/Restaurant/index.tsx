import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Banner, Container, ProductList } from './styles'
import ProductCard from '../../components/ProductCard'
import NotFound from '../../components/NotFound'
import { Restaurant as RestaurantType } from '../../types/restaurant'
import { getRestaurantById } from '../../services/api'

const Restaurant = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRestaurant = async () => {
      if (!id) return

      try {
        setLoading(true)
        setError(null)
        const data = await getRestaurantById(Number(id))
        setRestaurant(data)
      } catch (error) {
        console.error('Erro ao buscar restaurante:', error)
        setError('Erro ao carregar o restaurante')
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurant()
  }, [id])

  if (loading) {
    return (
      <Container>
        <div className="container">
          <p>Carregando restaurante...</p>
        </div>
      </Container>
    )
  }

  if (error || !restaurant) {
    return <NotFound />
  }

  return (
    <>
      <Banner style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <div className="container">
          <span>{restaurant.tipo}</span>
          <h2>{restaurant.titulo}</h2>
        </div>
      </Banner>
      <Container>
        <div className="container">
          <ProductList>
            {restaurant.cardapio.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </ProductList>
        </div>
      </Container>
    </>
  )
}

export default Restaurant
