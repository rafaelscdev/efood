import { useState } from 'react'
import { Card, Description, Title, Button } from './styles'
import { MenuItem } from '../../types/restaurant'
import ProductModal from '../ProductModal'

type ProductCardProps = {
  product: MenuItem
  onAddToCart?: () => void
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card>
        <img src={product.foto} alt={product.nome} />
        <Title>{product.nome}</Title>
        <Description>{product.descricao}</Description>
        <Button onClick={() => setIsModalOpen(true)}>
          Mais detalhes
        </Button>
      </Card>
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={product}
        onAddToCart={onAddToCart}
      />
    </>
  )
}

export default ProductCard
