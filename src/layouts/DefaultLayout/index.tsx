import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Cart from '../../components/Cart'

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Cart />
      <Footer />
    </>
  )
}

export default DefaultLayout
