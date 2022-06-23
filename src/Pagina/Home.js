import React from 'react'
import Hero from '../Componentes/Hero/Hero'
import Servicios from '../Componentes/Servicios/Servicios'
import Sobremi from '../Componentes/Sobre-mi/Sobre-mi'
import { Habilidades } from '../Componentes/Habilidades/Habilidades';
import Portafolio from '../Componentes/Portafolio/Portafolio';
import Whatsapp from '../Componentes/botonwhatsapp/Whatsapp';
import Contacto from '../Componentes/Contacto/Contacto';
import Footer from '../Componentes/Footer/Footer';

const Home = () => {
  return (
    <>
        <Hero/>
        <Sobremi/>
        <Servicios/>
        <Habilidades/>
        <Portafolio/>
        <Contacto/>
        <Footer/>
        <Whatsapp/>
    </>
  )
}

export default Home