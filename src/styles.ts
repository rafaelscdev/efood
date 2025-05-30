import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  red: '#E66767',
  background: '#FFF8F2',
  gray: '#666666',
  beige: '#FFEBD9',
  primary: '#E66767',
  primaryDark: '#D55757',
  text: '#666666'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.beige};
    color: ${colors.red};
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }
`
