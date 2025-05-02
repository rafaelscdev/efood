import { GlobalStyle } from './styles'
import Header from './components/Header'
import Footer from './components/Footer'
import RoutesConfig from './routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RoutesConfig />
      <Footer />
    </>
  )
}

export default App
