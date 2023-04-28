import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'
import { Container, Inner, Form } from './styles'

export default function Payment() {
  return (
    <Container>
      <Head title='Pagamento' />
      <OrderHeader />
      <Inner>
        <Form>
          <h4>Informações pessoais</h4>

          <div className='field'>
            <label htmlFor='full-name'>Nome e sobrenome</label>
            <input type='text' id='full-name' name='full-name' autoComplete='name' />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='email'>E-mail</label>
              <input type='text' name='email' id='email' autoComplete='email' />
            </div>

            <div className='field'>
              <label htmlFor='mobile'>Celular</label>
              <input type='tel' id='mobile' name='mobile' autoComplete='phone' />
            </div>

            <div className='field'>
              <label htmlFor='document'> CPF / CNPJ </label>
              <input type='text' id='document' name='document' />
            </div>
          </div>

          <h4>Endereço de entrega</h4>


          <div className='field'>
            <label htmlFor='zipcode'>CEP</label>
            <input
              type='text'
              id='zipcode'
              name='zipcode'
              autoComplete="'postal-code"
              style={{ width: '120px' }}
            />
          </div>
          
          <div className='field'>
            <label htmlFor='street'>Endereço</label>
            <input type='text' id='street' name='street' autoComplete='street-addess'/>
          </div>

          <div className="field">Complemento</div>
          <input type="text" id='complement' name='complement' /> 
        </Form>
      </Inner>
    </Container>
  )
}
