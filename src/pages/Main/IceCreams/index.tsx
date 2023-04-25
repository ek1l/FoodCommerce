import { useEffect, useState } from 'react'
import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getIceCreams } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'

export default function Burgers() {
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      const iceCreamsRequest = await getIceCreams()

      setIceCreams(iceCreamsRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Ice Creams' description='Nossos melhores Sorvetes' />
      <SnackTitle>Ice Creams</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
