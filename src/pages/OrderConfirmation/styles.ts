import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const Content = styled.div`
  position: relative;
  width: 360px;
  height: 100vh;
  background-color: ${colors.red};
  z-index: 1;
  overflow-y: auto;
  padding: 32px 8px;
  color: ${colors.white};

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const OrderInfo = styled.div`
  margin-bottom: 24px;

  p {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 16px;
  }
`

export const OrderNumber = styled.p`
  font-size: 14px;
  margin-bottom: 8px;

  strong {
    font-weight: bold;
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 8px;
  background-color: ${colors.beige};
  color: ${colors.red};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  height: 32px;
`
