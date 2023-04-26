import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { Container } from './styles'

export function OrderHeader() {
  return (
    <Container>
        <Link to='/'>
        <img src={logoImg} alt='Logo' />
        </Link>

     
    </Container>
  )
}
