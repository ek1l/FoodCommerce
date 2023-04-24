import { Container } from './styles'
import { ReactComponent as BurguerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaPopicon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'
import menuImg from '../../assets/menu.svg'
export function Sidebar() {
  return (
    <Container>
      <button type='button'>
        <img src={menuImg} alt='Abrir e fechar o menu' />
      </button>
      <nav>
        <ul>
          <li>
            <a href='#' className='active'>
              <BurguerIcon />
              <span>Hambúrgueres</span>
            </a>
          </li>

          <li>
            <a href='#'>
              <PizzaIcon />
              <span>Pizza</span>
            </a>
          </li>

          <li>
            <a href='#'>
              <SodaPopicon />
              <span>Bebidas</span>
            </a>
          </li>

          <li>
            <a href='#'>
              <IceCreamIcon />
              <span>Sorvetes</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
