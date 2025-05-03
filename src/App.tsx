import { GlobalStyle } from './styles'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import RoutesConfig from './routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RoutesConfig />
      <Cart />
      <Footer />
    </>
  )
}

export default App
