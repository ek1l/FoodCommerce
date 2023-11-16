import { useCart } from '../../../hooks/useCart'

import { currencyFormat } from '../../../helpers/currencyFormat'

import { Container } from '../styles'

export function ConfirmOrder() {
  const { cart } = useCart()
  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0)
  // eslint-disable-next-line @typescript-eslint/no-empty-function

  return (
    <Container>
      <button>Finalizar Pedido</button>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}
