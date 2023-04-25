import { useEffect, useState } from 'react'
import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getPizzas } from '../../../services/api'
export default function Burgers() {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    (async () => {
      const pizzasRequest =  await getPizzas()

      setPizzas(pizzasRequest.data)
    
    })()
  }, [])

  return (
    <>
      <Head title='Pizzas' description='Nossas melhores pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
