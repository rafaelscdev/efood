import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #FFEBD9;
  padding: 40px 0;
`

export const HeaderContent = styled.div`
  text-align: center;

  p {
    font-size: 36px;
    font-weight: bold;
    color: #E66767;
    max-width: 540px;
    margin: 80px auto 0;

    @media (max-width: 768px) {
      font-size: 24px;
      margin: 40px auto 0;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  img {
    width: 125px;
    height: auto;
  }
`
