import React from 'react'
import Hero from '../Componentes/Hero/Hero'
import Servicios from '../Componentes/Servicios/Servicios'
import Sobremi from '../Componentes/Sobre-mi/Sobre-mi'

const Home = () => {
  return (
    <>
        <Hero/>
        <Sobremi/>
        <Servicios/>
    </>
  )
}

export default Home