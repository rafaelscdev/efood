import styled from 'styled-components'
import Modal from '../Modal'
import { MenuItem } from '../../types/restaurant'
import closeIcon from '../../assets/images/close.svg'

type Props = {
  isOpen: boolean
  onClose: () => void
  item: MenuItem
}

const ProductModal = ({ isOpen, onClose, item }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Content>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt="Fechar" />
        </CloseButton>
        <ImageContainer>
          <img src={item.foto} alt={item.nome} />
        </ImageContainer>
        <Info>
          <Title>{item.nome}</Title>
          <Description>{item.descricao}</Description>
          <ServingSize>Serve: {item.porcao}</ServingSize>
          <Price>R$ {item.preco.toFixed(2).replace('.', ',')}</Price>
          <Button>
            Adicionar ao carrinho
          </Button>
        </Info>
      </Content>
    </Modal>
  )
}

const Content = styled.div`
  background-color: #E66767;
  padding: 32px;
  position: relative;
  display: flex;
  gap: 24px;
  width: 1024px;
  max-width: 100%;
  color: #FFFFFF;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px;
  }
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
  }
`

const ImageContainer = styled.div`
  width: 280px;
  height: 280px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: #FFFFFF;
`

const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
`

const ServingSize = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
`

const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 8px;
`

const Button = styled.button`
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  height: 24px;
  width: 218px;
  margin-top: auto;

  &:hover {
    background-color: #FFF8F2;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export default ProductModal
