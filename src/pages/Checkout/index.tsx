import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as S from './styles'
import { RootState } from '../../store'
import { checkout, CheckoutPayload } from '../../services/api'
import { clearCart } from '../../store/reducers/cart'
import {
  validateCEP,
  validateCardNumber,
  validateCVV,
  validateExpirationDate,
  formatCEP,
  formatCardNumber,
  formatExpirationDate
} from '../../utils/validations'

type FormData = {
  fullName: string
  address: string
  city: string
  zipCode: string
  number: string
  complement?: string
  cardHolder: string
  cardNumber: string
  cvv: string
  expirationMonth: string
  expirationYear: string
}

const Checkout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const [isLoading, setIsLoading] = useState(false)
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({})
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: '',
    cardHolder: '',
    cardNumber: '',
    cvv: '',
    expirationMonth: '',
    expirationYear: ''
  })

  const [currentStep, setCurrentStep] = useState<'delivery' | 'payment'>('delivery')

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.preco * item.quantity, 0)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let formattedValue = value

    switch (name) {
      case 'zipCode':
        formattedValue = formatCEP(value)
        break
      case 'cardNumber':
        formattedValue = formatCardNumber(value)
        break
      case 'expirationMonth':
      case 'expirationYear':
        formattedValue = formatExpirationDate(value)
        break
      case 'cvv':
        formattedValue = value.replace(/\D/g, '').slice(0, 3)
        break
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }))

    if (formErrors[name as keyof FormData]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateDeliveryForm = (): boolean => {
    const errors: Partial<FormData> = {}

    if (!formData.fullName.trim()) {
      errors.fullName = 'Nome completo é obrigatório'
    } else if (formData.fullName.trim().length < 5) {
      errors.fullName = 'Nome muito curto'
    }

    if (!formData.address.trim()) {
      errors.address = 'Endereço é obrigatório'
    }

    if (!formData.city.trim()) {
      errors.city = 'Cidade é obrigatória'
    }

    if (!validateCEP(formData.zipCode)) {
      errors.zipCode = 'CEP inválido'
    }

    if (!formData.number.trim()) {
      errors.number = 'Número é obrigatório'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validatePaymentForm = (): boolean => {
    const errors: Partial<FormData> = {}

    if (!formData.cardHolder.trim()) {
      errors.cardHolder = 'Nome no cartão é obrigatório'
    } else if (formData.cardHolder.trim().length < 5) {
      errors.cardHolder = 'Nome muito curto'
    }

    if (!validateCardNumber(formData.cardNumber)) {
      errors.cardNumber = 'Número do cartão inválido'
    }

    if (!validateCVV(formData.cvv)) {
      errors.cvv = 'CVV inválido'
    }

    if (!validateExpirationDate(formData.expirationMonth, formData.expirationYear)) {
      errors.expirationMonth = 'Data de validade inválida'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateDeliveryForm()) {
      setCurrentStep('payment')
    }
  }

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validatePaymentForm()) return

    setIsLoading(true)

    try {
      console.log('Carrinho:', cartItems)
      if (cartItems.length === 0) {
        throw new Error('Carrinho vazio')
      }

      const payload: CheckoutPayload = {
        products: cartItems.map(item => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: formData.fullName,
          address: {
            description: formData.address,
            city: formData.city,
            zipCode: formData.zipCode,
            number: formData.number,
            complement: formData.complement
          }
        },
        payment: {
          card: {
            name: formData.cardHolder,
            number: formData.cardNumber,
            code: formData.cvv,
            expires: {
              month: formData.expirationMonth,
              year: formData.expirationYear
            }
          }
        }
      }

      console.log('Payload:', payload)
      const response = await checkout(payload)
      console.log('Response:', response)

      if (response) {
        dispatch(clearCart())
        navigate('/confirmacao', {
          state: {
            orderId: response.orderId,
            status: 'approved'
          }
        })
      }
    } catch (error) {
      console.error('Erro detalhado:', error)
      if (error instanceof Error && error.message === 'Carrinho vazio') {
        alert('Não é possível finalizar a compra com o carrinho vazio.')
      } else {
        alert('Erro ao processar o pagamento. Por favor, tente novamente.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleBack = () => {
    if (currentStep === 'payment') {
      setCurrentStep('delivery')
    } else {
      navigate(-1)
    }
  }

  return (
    <S.CheckoutContainer>
      <S.Overlay onClick={() => navigate(-1)} />
      <S.Content>
        {currentStep === 'delivery' ? (
          <S.Form onSubmit={handleDeliverySubmit}>
            <h2>Entrega</h2>
            <S.InputGroup>
              <label htmlFor="fullName">Quem irá receber</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              {formErrors.fullName && (
                <S.ErrorMessage>{formErrors.fullName}</S.ErrorMessage>
              )}
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              {formErrors.address && (
                <S.ErrorMessage>{formErrors.address}</S.ErrorMessage>
              )}
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
              {formErrors.city && (
                <S.ErrorMessage>{formErrors.city}</S.ErrorMessage>
              )}
            </S.InputGroup>
            <S.InputRow>
              <S.InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                  maxLength={8}
                />
                {formErrors.zipCode && (
                  <S.ErrorMessage>{formErrors.zipCode}</S.ErrorMessage>
                )}
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.number && (
                  <S.ErrorMessage>{formErrors.number}</S.ErrorMessage>
                )}
              </S.InputGroup>
            </S.InputRow>
            <S.InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={formData.complement}
                onChange={handleInputChange}
              />
            </S.InputGroup>
            <S.Button type="submit">Continuar com o pagamento</S.Button>
            <S.BackButton type="button" onClick={handleBack}>
              Voltar para o carrinho
            </S.BackButton>
          </S.Form>
        ) : (
          <S.Form onSubmit={handlePaymentSubmit}>
            <h2>Pagamento - Valor a pagar R$ {getTotalPrice().toFixed(2)}</h2>
            <S.InputGroup>
              <label htmlFor="cardHolder">Nome no cartão</label>
              <input
                type="text"
                id="cardHolder"
                name="cardHolder"
                value={formData.cardHolder}
                onChange={handleInputChange}
                placeholder="Como está gravado no cartão"
                required
              />
              {formErrors.cardHolder && (
                <S.ErrorMessage>{formErrors.cardHolder}</S.ErrorMessage>
              )}
            </S.InputGroup>
            <S.InputRow className="card-info">
              <S.InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="0000 0000 0000 0000"
                  required
                  maxLength={19}
                />
                {formErrors.cardNumber && (
                  <S.ErrorMessage>{formErrors.cardNumber}</S.ErrorMessage>
                )}
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="000"
                  required
                  maxLength={3}
                />
                {formErrors.cvv && (
                  <S.ErrorMessage>{formErrors.cvv}</S.ErrorMessage>
                )}
              </S.InputGroup>
            </S.InputRow>
            <S.InputRow>
              <S.InputGroup>
                <label htmlFor="expirationMonth">Mês de vencimento</label>
                <input
                  type="text"
                  id="expirationMonth"
                  name="expirationMonth"
                  value={formData.expirationMonth}
                  onChange={handleInputChange}
                  placeholder="MM"
                  required
                  maxLength={2}
                />
                {formErrors.expirationMonth && (
                  <S.ErrorMessage>{formErrors.expirationMonth}</S.ErrorMessage>
                )}
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="expirationYear">Ano de vencimento</label>
                <input
                  type="text"
                  id="expirationYear"
                  name="expirationYear"
                  value={formData.expirationYear}
                  onChange={handleInputChange}
                  placeholder="AA"
                  required
                  maxLength={2}
                />
                {formErrors.expirationYear && (
                  <S.ErrorMessage>{formErrors.expirationYear}</S.ErrorMessage>
                )}
              </S.InputGroup>
            </S.InputRow>
            <S.Button type="submit" disabled={isLoading}>
              {isLoading ? 'Processando...' : 'Finalizar pagamento'}
            </S.Button>
            <S.BackButton type="button" onClick={handleBack}>
              Voltar para a edição de endereço
            </S.BackButton>
          </S.Form>
        )}
      </S.Content>
    </S.CheckoutContainer>
  )
}

export default Checkout
