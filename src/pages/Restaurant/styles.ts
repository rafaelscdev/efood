import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px 0;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 32px;
  }
`

export const Banner = styled.div`
  position: relative;
  height: 280px;
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 32px;
  }

  span {
    color: #FFFFFF;
    font-size: 32px;
    font-weight: 100;
    margin-bottom: 156px;
    word-break: break-word;

    @media (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 80px;
    }
  }

  h2 {
    color: #FFFFFF;
    font-size: 32px;
    font-weight: bold;
    word-break: break-word;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  padding: 32px 0;
`
