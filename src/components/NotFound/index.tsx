import { Link } from 'react-router-dom'
import { NotFoundContainer, Content } from './styles'

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Content>
        <h2>Restaurante não encontrado</h2>
        <p>
          Desculpe, não conseguimos encontrar o restaurante que você está procurando.
          Que tal explorar outros restaurantes incríveis?
        </p>
        <Link to="/">Voltar para a página inicial</Link>
      </Content>
    </NotFoundContainer>
  )
}

export default NotFound
