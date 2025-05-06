import { Outlet, useLocation } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Cart from '../../components/Cart'
import { Container } from './styles'

const DefaultLayout = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <Container>
      {!isHome && <Header isHome={isHome} />}
      <main>
        <Outlet />
      </main>
      <Footer />
      <Cart />
    </Container>
  )
}

export default DefaultLayout
