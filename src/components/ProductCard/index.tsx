import { Card, Description, Title, Button } from './styles'
import { Product } from '../../types/restaurant'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card>
      <img src={product.image} alt={product.name} />
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
      <Button>
        Adicionar ao carrinho - R$ {product.price.toFixed(2).replace('.', ',')}
      </Button>
    </Card>
  )
}

export default ProductCard
