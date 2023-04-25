import { Outlet } from 'react-router-dom'
import { MyOrder } from '../../components/myOrder'
import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'
import logoImg from '../../assets/logo.svg'

export default function Main() {
  return <Container>
    <Sidebar />
    <section>
      <img src={logoImg} alt="Logo" />
      <Outlet />
    </section>
    <MyOrder />
    </Container>
  
}
