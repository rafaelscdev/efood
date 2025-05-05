import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import DefaultLayout from './layouts/DefaultLayout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path="/restaurante/:id" element={<Restaurant />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirmacao" element={<OrderConfirmation />} />
    </Route>
  </Routes>
)

export default Rotas
