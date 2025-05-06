import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path="restaurante/:id" element={<Restaurant />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="confirmacao" element={<OrderConfirmation />} />
    </Route>
  </Routes>
)

export default Rotas
