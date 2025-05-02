import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px 0;
  min-height: calc(100vh - 300px); // Considerando header e footer
  background-color: #FFF8F2;
`

export const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(472px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
`

export const LoadingContainer = styled.div`
  text-align: center;
  padding: 40px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 18px;
    color: #E66767;
  }
`

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 40px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 18px;
    color: #E66767;
    margin-bottom: 16px;
  }

  button {
    background-color: #E66767;
    color: #FFFFFF;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #d45555;
    }
  }
`
