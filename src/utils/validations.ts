export const validateCEP = (cep: string): boolean => {
  const cepRegex = /^[0-9]{8}$/
  return cepRegex.test(cep)
}

export const validateCardNumber = (cardNumber: string): boolean => {
  const cardNumberRegex = /^[0-9]{16}$/
  return cardNumberRegex.test(cardNumber)
}

export const validateCVV = (cvv: string): boolean => {
  const cleanCVV = cvv.replace(/\D/g, '')
  return cleanCVV.length === 3
}

export const validateExpirationDate = (month: string, year: string): boolean => {
  const monthNumber = parseInt(month, 10)
  const yearNumber = parseInt(year, 10)
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear() % 100
  const currentMonth = currentDate.getMonth() + 1

  if (monthNumber < 1 || monthNumber > 12) return false
  if (yearNumber < currentYear) return false
  if (yearNumber === currentYear && monthNumber < currentMonth) return false

  return true
}

export const formatCEP = (cep: string): string => {
  return cep.replace(/\D/g, '')
}

export const formatCardNumber = (cardNumber: string): string => {
  return cardNumber.replace(/\D/g, '')
}

export const formatExpirationDate = (value: string): string => {
  return value.replace(/\D/g, '').slice(0, 2)
}
