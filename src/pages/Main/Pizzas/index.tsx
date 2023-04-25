import { useContext, useEffect, useState } from 'react'
import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getPizzas } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'
import { SnackContext } from '../../../App'
export default function Pizzas() {
  const { pizzas } = useContext(SnackContext)

  return (
    <>
      <Head title='Pizzas' description='Nossas melhores pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
