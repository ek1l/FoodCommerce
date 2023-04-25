import { useContext, useEffect, useState } from 'react'
import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getIceCreams } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'
import { SnackContext } from '../../../App'

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
