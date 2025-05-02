import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #FFEBD9;
  padding: 40px 0;
`

export const FooterContent = styled.div`
  max-width: 480px;
  margin: 0 auto;
  text-align: center;

  img {
    margin-bottom: 80px;
  }

  p {
    font-size: 10px;
    color: #E66767;
    line-height: 1.5;
  }
`

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;

  li {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
    }
  }
`
