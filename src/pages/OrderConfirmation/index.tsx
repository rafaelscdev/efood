import { useLocation, useNavigate } from 'react-router-dom'
import * as S from './styles'

type OrderResponse = {
  orderId: string
  status: string
}

const OrderConfirmation = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const orderData = location.state as OrderResponse

  if (!orderData) {
    navigate('/')
    return null
  }

  return (
    <S.Container>
      <S.Overlay onClick={() => navigate('/')} />
      <S.Content>
        <S.Title>Pedido realizado - {orderData.orderId}</S.Title>
        <S.OrderInfo>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância da higienização das mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          </p>
          <p>
            Esperamos que desfrute de uma excelente experiência gastronômica. Bom apetite!
          </p>
        </S.OrderInfo>
        <S.Button onClick={() => navigate('/')}>Concluir</S.Button>
      </S.Content>
    </S.Container>
  )
}

export default OrderConfirmation
