import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.beige};
  padding: 40px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FooterContent = styled.div`
  max-width: 480px;
  width: 100%;
  text-align: center;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 125px;
    height: auto;
    margin-bottom: 32px;
  }

  p {
    color: ${colors.red};
    line-height: 1.5;
    font-size: 10px;
    max-width: 480px;
  }
`

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
  list-style: none;
  padding: 0;

  li {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`
