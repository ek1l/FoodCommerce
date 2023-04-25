import { useState, useEffect, useContext } from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { getBurgers } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'
import { SnackContext } from '../../../App'

export default function Burgers() {
  const { burgers } = useContext(SnackContext)

  return (
    <>
      <Head title='Hambúrgueres' description='Nossos melhores hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
