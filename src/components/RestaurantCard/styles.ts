import styled from 'styled-components'

export const Card = styled.div`
  background-color: #FFFFFF;
  border: 1px solid #E66767;
  border-radius: 8px;
  overflow: hidden;
`

export const CardImage = styled.div`
  width: 100%;
  height: 217px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CardTag = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #E66767;
  color: #FFFFFF;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
`

export const CardContent = styled.div`
  padding: 16px;

  a {
    background-color: #E66767;
    color: #FFFFFF;
    text-decoration: none;
    display: inline-block;
    padding: 6px 12px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
    margin-top: 16px;

    &:hover {
      background-color: #c75555;
    }
  }
`

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  span {
    display: flex;
    align-items: center;
    font-weight: bold;

    &::before {
      content: '★';
      margin-right: 4px;
    }
  }
`

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #4B4B4B;
`
