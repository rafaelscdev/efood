import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  padding: 32px 0;
  text-align: center;
  background-color: #FFEBD9;
  min-height: calc(100vh - 300px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(230, 103, 103, 0.1);

  h2 {
    color: #E66767;
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    color: #4B4B4B;
    font-size: 16px;
    margin-bottom: 24px;
  }

  a {
    display: inline-block;
    background-color: #E66767;
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c75555;
    }
  }
`
