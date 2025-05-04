import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getRestaurantById } from '../../services/api'
import { addItem } from '../../store/reducers/cart'
import { Restaurant as RestaurantType } from '../../types/restaurant'
import ProductCard from '../../components/ProductCard'
import * as S from './styles'

const Restaurant = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRestaurant = async () => {
      if (!id) return

      try {
        const data = await getRestaurantById(Number(id))
        setRestaurant(data)
      } catch (error) {
        setError('Erro ao carregar restaurante')
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurant()
  }, [id])

  if (loading) return (
    <S.Container>
      <div className="container">
        <p>Carregando...</p>
      </div>
    </S.Container>
  )

  if (error) return (
    <S.Container>
      <div className="container">
        <p>{error}</p>
      </div>
    </S.Container>
  )

  if (!restaurant) return (
    <S.Container>
      <div className="container">
        <p>Restaurante não encontrado</p>
      </div>
    </S.Container>
  )

  return (
    <>
      <S.Banner style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <div className="container">
          <span>{restaurant.tipo}</span>
          <h2>{restaurant.titulo}</h2>
        </div>
      </S.Banner>
      <S.Container>
        <div className="container">
          <S.ProductList>
            {restaurant.cardapio.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onAddToCart={() => dispatch(addItem(item))}
              />
            ))}
          </S.ProductList>
        </div>
      </S.Container>
    </>
  )
}

export default Restaurant
