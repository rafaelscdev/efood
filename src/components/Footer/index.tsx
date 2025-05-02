import { FooterContainer, FooterContent, SocialLinks } from './styles'
import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram-round-svgrepo-com (1) 1.png'
import facebook from '../../assets/facebook-round-svgrepo-com 1.png'
import twitter from '../../assets/twitter-2-svgrepo-com 1.png'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <img src={logo} alt="efood" />
        <SocialLinks>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
        </SocialLinks>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
