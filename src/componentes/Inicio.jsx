import React from 'react'
import { ModalSlider } from '../widgets/ModalSlider/ModalSlider'
import { Servicios } from '../widgets/Inicio/Servicios'
import { PreguntasFrecuentes } from '../widgets/Inicio/PreguntasFrecuentes'
import { Noticias } from '../widgets/Inicio/Noticias'

export const Inicio = () => {
  return (
    <>

      <div className='carm'>
        <ModalSlider />
      </div>
      <Servicios/>
      <PreguntasFrecuentes/>
      <Noticias/>

    </>
  )
}
