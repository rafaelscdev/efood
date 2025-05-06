import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${colors.beige};
  padding: 40px 0;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  gap: 80px;

  &.home {
    justify-content: center;
  }

  @media (max-width: 768px) {
    gap: 32px;
    padding: 0 16px;
  }
`

export const RestaurantText = styled.div`
  flex: 1;
  text-align: right;

  a {
    color: ${colors.red};
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    a {
      font-size: 16px;
    }
  }
`

export const Logo = styled.div`
  text-align: center;
  flex: 0 1 auto;

  img {
    width: 125px;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      width: 88px;
    }
  }
`

export const CartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.red};
  font-weight: bold;
  font-size: 18px;
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const HeaderDescription = styled.div`
  text-align: center;
  margin-top: 138px;

  p {
    font-size: 36px;
    font-weight: bold;
    line-height: 42px;
    color: ${colors.red};
    max-width: 540px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin-top: 80px;

    p {
      font-size: 24px;
      line-height: 28px;
      padding: 0 16px;
    }
  }
`
