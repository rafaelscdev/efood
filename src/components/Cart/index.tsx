import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeItem, toggleCart } from '../../store/reducers/cart'
import type { CartItem } from '../../store/reducers/cart'
import closeIcon from '../../assets/images/close.svg'
import trashIcon from '../../assets/LixeiraIcone.png'
import * as S from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state: RootState) => state.cart)

  const getTotalPrice = () => {
    return items.reduce((total: number, item: CartItem) => total + item.preco * item.quantity, 0)
  }

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace('.', ',')
  }

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id))
  }

  if (!isOpen) return null

  return (
    <S.CartContainer>
      <S.Overlay onClick={() => dispatch(toggleCart())} />
      <S.CartContent>
        <S.CartHeader>
          <h2>Carrinho</h2>
          <button onClick={() => dispatch(toggleCart())}>
            <img src={closeIcon} alt="Fechar carrinho" />
          </button>
        </S.CartHeader>
        {items.length === 0 ? (
          <S.EmptyCart>
            <p>O carrinho está vazio</p>
          </S.EmptyCart>
        ) : (
          <>
            <S.CartItems>
              {items.map((item: CartItem) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <div className="item-header">
                      <h3>{item.nome}</h3>
                      <div className="price">
                        <span>R$ </span>
                        <span>{formatPrice(item.preco)}</span>
                      </div>
                    </div>
                    <div className="item-footer">
                      <p>Quantidade: {item.quantity}</p>
                      <button onClick={() => handleRemoveItem(item.id)}>
                        <img src={trashIcon} alt="Remover item" />
                      </button>
                    </div>
                  </div>
                </S.CartItem>
              ))}
            </S.CartItems>
            <S.CartFooter>
              <div className="total">
                <span>Valor total</span>
                <div className="price">
                  <span>R$ </span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
              </div>
              <button>Continuar com a entrega</button>
            </S.CartFooter>
          </>
        )}
      </S.CartContent>
    </S.CartContainer>
  )
}

export default Cart
