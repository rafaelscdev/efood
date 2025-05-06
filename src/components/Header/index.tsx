import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCart } from '../../store/reducers/cart'
import type { CartItem } from '../../store/reducers/cart'
import { RootState } from '../../store'
import { HeaderContainer, HeaderContent, Logo, CartButton, RestaurantText, HeaderDescription } from './styles'
import logo from '../../assets/logo.png'

type HeaderProps = {
  isHome?: boolean
}

const Header = ({ isHome = false }: HeaderProps) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  const itemCount = items.reduce((total: number, item: CartItem) => total + item.quantity, 0)

  return (
    <HeaderContainer>
      {isHome ? (
        <>
          <HeaderContent className="home">
            <Logo>
              <Link to="/">
                <img src={logo} alt="efood" />
              </Link>
            </Logo>
          </HeaderContent>
          <HeaderDescription>
            <p>Viva experiências gastronômicas no conforto da sua casa</p>
          </HeaderDescription>
        </>
      ) : (
        <>
          <HeaderContent>
            <RestaurantText>
              <Link to="/">Restaurantes</Link>
            </RestaurantText>
            <Logo>
              <Link to="/">
                <img src={logo} alt="efood" />
              </Link>
            </Logo>
            <CartButton onClick={() => dispatch(toggleCart())}>
              {itemCount} produto(s) no carrinho
            </CartButton>
          </HeaderContent>
        </>
      )}
    </HeaderContainer>
  )
}

export default Header
