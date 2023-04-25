import { createContext, useState, useEffect, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface updateCartProps {
  id: number
  snack: string
  newQuantity: number
}

interface RemoveSnackFromCart {
  id: number
  snack: string
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: ({ id, snack }: RemoveSnackFromCart) => void
  updateCart: ({ id, snack, newQuantity }: updateCartProps) => void
}

interface CartProviderProps {
  children: ReactNode
}
export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
    
}
