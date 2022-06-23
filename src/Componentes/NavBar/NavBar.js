import React , { useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,
NavItem, NavLinks } from './NavbarEstilos';
import { animateScroll as scroll } from 'react-scroll/modules';
import logoteo from '../../imagenes/icono-pagina.png'

const Navbar = ( { toggle } ) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () =>{
    if(window.scrollY >= 80){
      setScrollNav(true)
    }else {
      setScrollNav(false)
    }
  };

    useEffect(() => {
      window.addEventListener('scroll', changeNav)
    },[]);
  
    const toggleHome = () => {
      scroll.scrollToTop();
    };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}> <img src={logoteo} height="70" alt="logo" className='imagen-logo'/> </NavLogo>
          <MobileIcon onClick={ toggle }>
            <FaBars />
          </MobileIcon>
          <NavMenu className='titulo-nav-menu'>
            <NavItem>
              <NavLinks to='sobre-mi' 
               smooth={true} 
               duration={500} 
               spy={true}
               exact='true'
               offset={-80}
               >Sobre Mi</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='servicios'
               smooth={true} 
               duration={500} 
               spy={true}
               exact='true'
               offset={-80}
               >Servicios</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='habilidades'
               smooth={true} 
               duration={500} 
               spy={true}
               exact='true'
               offset={-80}
               >Habilidades</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Portafolio'
               smooth={true} 
               duration={500} 
               spy={true}
               exact='true'
               offset={-80}
               >Portafolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Testimonio'
               smooth={true} 
               duration={500} 
               spy={true}
               exact='true'
               offset={-80}
               >Testimonios</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contacto'
               smooth={true} 
               duration={500} 
               spy={true}
               exact='true'
               offset={0}
               >Contacto</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar