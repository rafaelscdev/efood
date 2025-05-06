import styled from 'styled-components'

export const Container = styled.div`
  padding: 24px 0 120px;
  background-color: #FFF8F2;
`

export const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  margin-top: 48px;
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  gap: 16px;

  button {
    background-color: #E66767;
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: bold;
  }
`
