import { Container } from './styles'
import { ReactComponent as BurguerIcon } from '../../assets/burger.svg'
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
            <a href='#' >
              <BurguerIcon />
              <span>Hambúrgueres</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
