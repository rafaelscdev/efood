import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCart } from '../../store/reducers/cart'
import type { CartItem } from '../../store/reducers/cart'
import { RootState } from '../../store'
import { HeaderContainer, HeaderContent, Logo, CartButton } from './styles'
import logo from '../../assets/logo.png'
import cartIcon from '../../assets/cart.svg'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  const itemCount = items.reduce((total: number, item: CartItem) => total + item.quantity, 0)

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderContent>
          <Logo>
            <Link to="/">
              <img src={logo} alt="efood" />
            </Link>
          </Logo>
          <CartButton onClick={() => dispatch(toggleCart())}>
            <img src={cartIcon} alt="Carrinho" />
            {itemCount > 0 && <span>{itemCount}</span>}
          </CartButton>
          <p>Viva experiências gastronômicas no conforto da sua casa</p>
        </HeaderContent>
      </div>
    </HeaderContainer>
  )
}

export default Header
