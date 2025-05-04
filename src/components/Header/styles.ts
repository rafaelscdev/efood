import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: #FFEBD9;
  padding: 40px 0;
  position: relative;
`

export const HeaderContent = styled.div`
  text-align: center;
  position: relative;

  p {
    font-size: 36px;
    font-weight: bold;
    color: ${colors.red};
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

export const CartButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 24px;
    height: 24px;
  }

  span {
    background-color: ${colors.red};
    color: ${colors.white};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
  }
`
