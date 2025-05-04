import styled from 'styled-components'
import { colors } from '../../styles'

export const CartContainer = styled.div`
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

export const CartContent = styled.div`
  position: relative;
  width: 360px;
  height: 100vh;
  background-color: ${colors.red};
  z-index: 1;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const CartHeader = styled.div`
  padding: 32px 8px;
  position: relative;

  h2 {
    color: ${colors.white};
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  }

  button {
    position: absolute;
    top: 8px;
    right: 8px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;

    img {
      display: block;
    }
  }
`

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 100px);

  p {
    color: ${colors.white};
    font-size: 14px;
  }
`

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 8px;
  margin-bottom: 40px;
`

export const CartItem = styled.div`
  background-color: ${colors.beige};
  padding: 8px;
  display: flex;
  gap: 8px;
  border-radius: 4px;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .item-header {
      display: flex;
      flex-direction: column;
      gap: 4px;

      h3 {
        color: ${colors.red};
        font-size: 18px;
        font-weight: 900;
        margin: 0;
      }

      .price {
        color: ${colors.red};
        font-weight: bold;
        display: flex;
        gap: 4px;
        white-space: nowrap;

        span:first-child {
          font-size: 14px;
        }

        span:last-child {
          font-size: 16px;
        }
      }
    }

    .item-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 14px;
        color: ${colors.red};
        margin: 0;
      }

      button {
        background: none;
        border: none;
        padding: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;

        img {
          width: 16px;
          height: 16px;
          display: block;
        }
      }
    }
  }
`

export const CartFooter = styled.div`
  padding: 16px 8px;
  background-color: ${colors.red};
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    span {
      color: ${colors.white};
      font-size: 16px;
      font-weight: bold;
    }

    .price {
      color: ${colors.white};
      font-weight: bold;
      display: flex;
      gap: 4px;
      white-space: nowrap;

      span:first-child {
        font-size: 14px;
      }

      span:last-child {
        font-size: 16px;
      }
    }
  }

  button {
    width: 100%;
    height: 24px;
    background-color: ${colors.beige};
    border: none;
    border-radius: 4px;
    color: ${colors.red};
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
      background-color: ${colors.white};
    }
  }
`
