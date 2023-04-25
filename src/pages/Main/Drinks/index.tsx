import { useState, useEffect } from 'react'
import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getDrinks } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'

export default function Burgers() {
  const [drinks, setDrinks] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      const drinksRequest = await getDrinks()

      setDrinks(drinksRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Drinks' description='Nossos melhores Drinks' />
      <SnackTitle>Drinks</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
