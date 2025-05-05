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
  cardName: string
  cardNumber: string
  cardCode: string
  expirationMonth: string
  expirationYear: string
  cpf: string
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
    cardName: '',
    cardNumber: '',
    cardCode: '',
    expirationMonth: '',
    expirationYear: '',
    cpf: ''
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
      case 'cardCode':
        formattedValue = value.replace(/\D/g, '').slice(0, 3)
        break
      case 'cpf':
        formattedValue = value.replace(/\D/g, '').slice(0, 11)
        if (formattedValue.length > 3) {
          formattedValue = formattedValue.replace(/(\d{3})(\d)/, '$1.$2')
        }
        if (formattedValue.length > 7) {
          formattedValue = formattedValue.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        }
        if (formattedValue.length > 11) {
          formattedValue = formattedValue.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/, '$1.$2.$3-$4')
        }
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

  const validateCPF = (cpf: string): boolean => {
    const cleanCPF = cpf.replace(/\D/g, '')
    if (cleanCPF.length !== 11) return false
    if (/^(\d)\1+$/.test(cleanCPF)) return false

    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanCPF.charAt(i)) * (10 - i)
    }
    let digit = 11 - (sum % 11)
    if (digit > 9) digit = 0
    if (digit !== parseInt(cleanCPF.charAt(9))) return false

    sum = 0
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanCPF.charAt(i)) * (11 - i)
    }
    digit = 11 - (sum % 11)
    if (digit > 9) digit = 0
    if (digit !== parseInt(cleanCPF.charAt(10))) return false

    return true
  }

  const validatePaymentForm = (): boolean => {
    const errors: Partial<FormData> = {}

    if (!formData.cardName.trim()) {
      errors.cardName = 'Nome no cartão é obrigatório'
    } else if (formData.cardName.trim().length < 5) {
      errors.cardName = 'Nome muito curto'
    }

    if (!validateCardNumber(formData.cardNumber)) {
      errors.cardNumber = 'Número do cartão inválido'
    }

    if (!validateCVV(formData.cardCode)) {
      errors.cardCode = 'CVV inválido'
    }

    if (!validateExpirationDate(formData.expirationMonth, formData.expirationYear)) {
      errors.expirationMonth = 'Data de validade inválida'
    }

    if (!formData.cpf.trim()) {
      errors.cpf = 'CPF é obrigatório'
    } else if (!validateCPF(formData.cpf)) {
      errors.cpf = 'CPF inválido'
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
            name: formData.cardName,
            number: formData.cardNumber,
            code: formData.cardCode,
            expires: {
              month: formData.expirationMonth,
              year: formData.expirationYear
            }
          }
        }
      }

      const response = await checkout(payload)
      dispatch(clearCart())
      navigate('/confirmacao', { state: response })
    } catch (error) {
      console.error('Erro ao processar pagamento:', error)
      alert('Erro ao processar o pagamento. Por favor, tente novamente.')
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
            <S.InputRow>
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
            </S.InputRow>
            <S.InputRow>
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
            </S.InputRow>
            <S.Button type="submit">Continuar com o pagamento</S.Button>
            <S.BackButton type="button" onClick={handleBack}>
              Voltar para o carrinho
            </S.BackButton>
          </S.Form>
        ) : (
          <S.Form onSubmit={handlePaymentSubmit}>
            <h2>Pagamento - Valor a pagar R$ {getTotalPrice().toFixed(2)}</h2>
            <S.InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                required
              />
              {formErrors.cardName && (
                <S.ErrorMessage>{formErrors.cardName}</S.ErrorMessage>
              )}
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleInputChange}
                placeholder="000.000.000-00"
                required
                maxLength={14}
              />
              {formErrors.cpf && (
                <S.ErrorMessage>{formErrors.cpf}</S.ErrorMessage>
              )}
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
                maxLength={16}
              />
              {formErrors.cardNumber && (
                <S.ErrorMessage>{formErrors.cardNumber}</S.ErrorMessage>
              )}
            </S.InputGroup>
            <S.InputRow>
              <S.InputGroup>
                <label htmlFor="cardCode">CVV</label>
                <input
                  type="text"
                  id="cardCode"
                  name="cardCode"
                  value={formData.cardCode}
                  onChange={handleInputChange}
                  required
                  maxLength={3}
                />
                {formErrors.cardCode && (
                  <S.ErrorMessage>{formErrors.cardCode}</S.ErrorMessage>
                )}
              </S.InputGroup>
              <S.InputGroup>
                <label>Vencimento</label>
                <S.ExpirationRow>
                  <input
                    type="text"
                    name="expirationMonth"
                    value={formData.expirationMonth}
                    onChange={handleInputChange}
                    placeholder="MM"
                    required
                    maxLength={2}
                  />
                  <span>/</span>
                  <input
                    type="text"
                    name="expirationYear"
                    value={formData.expirationYear}
                    onChange={handleInputChange}
                    placeholder="AA"
                    required
                    maxLength={2}
                  />
                </S.ExpirationRow>
                {formErrors.expirationMonth && (
                  <S.ErrorMessage>{formErrors.expirationMonth}</S.ErrorMessage>
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
