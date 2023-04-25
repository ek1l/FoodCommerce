import { useState, useEffect, useContext } from 'react'
import { SnackContext } from '../../../contexts/SnackContext'
import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getDrinks } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'
import { useSnack } from '../../../hooks/useSnack'


export default function Drinks() {
  const { drinks } =  useSnack()

  return (
    <>
      <Head title='Drinks' description='Nossos melhores Drinks' />
      <SnackTitle>Drinks</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
