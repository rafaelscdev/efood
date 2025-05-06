import { useEffect, useState } from 'react'
import { getRestaurants } from '../../services/api'
import RestaurantCard from '../../components/RestaurantCard'
import { Restaurant } from '../../types/restaurant'
import Header from '../../components/Header'
import * as S from './styles'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants()
        setRestaurants(data)
      } catch (error) {
        setError('Erro ao carregar restaurantes')
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurants()
  }, [])

  if (loading) return (
    <>
      <Header isHome />
      <S.Container>
        <S.LoadingContainer>
          <p>Carregando...</p>
        </S.LoadingContainer>
      </S.Container>
    </>
  )

  if (error) return (
    <>
      <Header isHome />
      <S.Container>
        <S.ErrorContainer>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Tentar novamente</button>
        </S.ErrorContainer>
      </S.Container>
    </>
  )

  if (!restaurants.length) return (
    <>
      <Header isHome />
      <S.Container>
        <S.ErrorContainer>
          <p>Nenhum restaurante encontrado</p>
          <button onClick={() => window.location.reload()}>Tentar novamente</button>
        </S.ErrorContainer>
      </S.Container>
    </>
  )

  return (
    <>
      <Header isHome />
      <S.Container>
        <div className="container">
          <S.RestaurantList>
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </S.RestaurantList>
        </div>
      </S.Container>
    </>
  )
}

export default Home
