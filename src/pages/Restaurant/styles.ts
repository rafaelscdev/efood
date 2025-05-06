import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  padding: 24px 0 120px;
  background-color: ${colors.background};

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 32px;
  }
`

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
    position: relative;
    z-index: 1;
  }

  span {
    font-weight: 100;
    font-size: 32px;
    color: ${colors.white};
    text-transform: capitalize;
  }

  h2 {
    font-size: 32px;
    font-weight: 900;
    color: ${colors.white};
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 32px;
  padding: 0 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
