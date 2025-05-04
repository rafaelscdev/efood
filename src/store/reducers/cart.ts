import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../../types/restaurant'

export interface CartItem extends MenuItem {
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<MenuItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
      state.isOpen = true
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id === action.payload)
      if (index !== -1) {
        const item = state.items[index]
        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          state.items.splice(index, 1)
        }
      }
    },
    clearCart: (state) => {
      state.items = []
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const { addItem, removeItem, clearCart, toggleCart } = cartSlice.actions
export default cartSlice.reducer
