import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 8px;
  border: 1px solid ${colors.red};
  position: relative;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 338px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    margin-bottom: 4px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 4px;
  min-height: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
`

export const Button = styled.button`
  width: 100%;
  background-color: ${colors.beige};
  color: ${colors.red};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  height: 24px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: auto;

  &:hover {
    background-color: ${colors.white};
  }
`
