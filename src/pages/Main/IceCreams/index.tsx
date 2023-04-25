import { useContext, useEffect, useState } from 'react'
import { SnackContext } from '../../../contexts/SnackContext'
import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getIceCreams } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'


export default function iceCreams() {
  const { iceCreams } = useContext(SnackContext)

  return (
    <>
      <Head title='Ice Creams' description='Nossos melhores Sorvetes' />
      <SnackTitle>Ice Creams</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
