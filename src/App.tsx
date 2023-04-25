import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import {  SnackProvider } from './contexts/SnackContext'
import { AppRoutes } from './routes'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'

export default function App() {
  

  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
          <CartProvider>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
          </CartProvider>
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  )
}
