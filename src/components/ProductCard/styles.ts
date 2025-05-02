import styled from 'styled-components'

export const Card = styled.div`
  background-color: #E66767;
  color: #FFFFFF;
  padding: 8px;
  border-radius: 8px;
  position: relative;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    margin-bottom: 8px;
    border-radius: 4px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 8px;
  min-height: 88px;
`

export const Button = styled.button`
  width: 100%;
  background-color: #FFEBD9;
  color: #E66767;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FFF;
  }
`
