import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #FFEBD9;
  height: 384px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderContent = styled.div`
  text-align: center;

  p {
    font-size: 36px;
    font-weight: bold;
    color: #E66767;
    max-width: 540px;
    margin: 136px auto 0;
  }
`

export const Logo = styled.div`
  position: absolute;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 125px;
    height: 58px;
  }
`
