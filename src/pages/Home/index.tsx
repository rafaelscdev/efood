import { useEffect, useState } from 'react'
import { Container, RestaurantList, LoadingContainer, ErrorContainer } from './styles'
import RestaurantCard from '../../components/RestaurantCard'
import { Restaurant } from '../../types/restaurant'
import { getRestaurants } from '../../services/api'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const fetchRestaurants = async () => {
      try {
        console.log('🔄 Iniciando busca de restaurantes...')
        setLoading(true)
        setError(null)

        const data = await getRestaurants()

        if (!mounted) {
          console.log('⚠️ Componente desmontado, ignorando atualização')
          return
        }

        console.log('✅ Dados recebidos com sucesso:', {
          quantidade: data.length,
          primeiroRestaurante: data[0]
        })

        setRestaurants(data)
      } catch (error) {
        console.error('❌ Erro ao buscar restaurantes:', error)
        if (mounted) {
          setError(error instanceof Error ? error.message : 'Erro ao carregar restaurantes')
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    console.log('🏁 Iniciando componente Home')
    fetchRestaurants()

    return () => {
      console.log('🔚 Desmontando componente Home')
      mounted = false
    }
  }, [])

  console.log('🏠 Estado atual da Home:', {
    loading,
    error,
    restaurantsCount: restaurants.length,
    hasRestaurants: restaurants.length > 0
  })

  const content = () => {
    if (loading) {
      return (
        <LoadingContainer>
          <p>Carregando restaurantes...</p>
        </LoadingContainer>
      )
    }

    if (error) {
      return (
        <ErrorContainer>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>
            Tentar novamente
          </button>
        </ErrorContainer>
      )
    }

    if (!restaurants.length) {
      return (
        <ErrorContainer>
          <p>Nenhum restaurante encontrado.</p>
          <button onClick={() => window.location.reload()}>
            Tentar novamente
          </button>
        </ErrorContainer>
      )
    }

    return (
      <RestaurantList>
        {restaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </RestaurantList>
    )
  }

  return (
    <main>
      <Container>
        <div className="container">
          {content()}
        </div>
      </Container>
    </main>
  )
}

export default Home
