import React, { useState } from 'react'
import Sidebar  from '../Componentes/Sidebar/Sidebar';
import Navbar  from '../Componentes/NavBar/NavBar';
import Hero from '../Componentes/Hero/Hero'
import Servicios from '../Componentes/Servicios/Servicios'
import Sobremi from '../Componentes/Sobre-mi/Sobre-mi'
import { Habilidades } from '../Componentes/Habilidades/Habilidades';
import Portafolio from '../Componentes/Portafolio/Portafolio';
import Testimonios from '../Componentes/Testimonios/Testimonios';
import Whatsapp from '../Componentes/botonwhatsapp/Whatsapp';
import Contacto from '../Componentes/Contacto/Contacto';
import Footer from '../Componentes/Footer/Footer';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Hero/>
        <Sobremi/>
        <Servicios/>
        <Habilidades/>
        <Portafolio/>
        <Testimonios/>
        <Contacto/>
        <Footer/>
        <Whatsapp/>
    </>
  )
}

export default Home