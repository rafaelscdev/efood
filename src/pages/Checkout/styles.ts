import styled from 'styled-components'
import { colors } from '../../styles'

export const CheckoutContainer = styled.div`
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

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Form = styled.form`
  h2 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 16px;
  }
`

export const InputGroup = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
    color: ${colors.white};
  }

  input {
    width: 100%;
    padding: 8px;
    background-color: ${colors.beige};
    border: none;
    border-radius: 4px;
    font-size: 14px;
    color: ${colors.text};
    height: 32px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #999;
    }
  }
`

export const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px;
  margin-bottom: 16px;

  &.card-info {
    grid-template-columns: 2fr 1fr;
  }
`

export const ExpirationRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 48px;
    text-align: center;

    &::placeholder {
      text-transform: uppercase;
    }
  }

  span {
    color: ${colors.white};
    font-size: 14px;
    margin: 0 4px;
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
  margin-top: 24px;
  height: 32px;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const ErrorMessage = styled.span`
  color: ${colors.white};
  font-size: 12px;
  margin-top: 4px;
  display: block;
`

export const BackButton = styled(Button)`
  margin-top: 8px;
`
