import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderContent, Logo } from './styles'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <Link to="/">
            <img src={logo} alt="efood" />
          </Link>
        </Logo>
        <p>Viva experiências gastronômicas no conforto da sua casa</p>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
