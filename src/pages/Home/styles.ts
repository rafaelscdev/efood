import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px 0;
`

export const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(472px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
