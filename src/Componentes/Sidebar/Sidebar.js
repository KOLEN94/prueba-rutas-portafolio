import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, 
    SidebarWrapper ,SidebarLink } from './SidebarEstilos';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
        <Icon onClick={ toggle} >
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='sobre-mi' onClick={toggle} offset={-80}>Sobre Mi</SidebarLink>
                <SidebarLink to='servicios' onClick={toggle} offset={-80} >Servicios</SidebarLink>
                <SidebarLink to='habilidades' onClick={toggle} >Habilidades</SidebarLink>
                <SidebarLink to='Portafolio' onClick={toggle} offset={-80}>Portafolio</SidebarLink>
                <SidebarLink to='Testimonio' onClick={toggle} offset={-80}>Testimonio</SidebarLink>
                <SidebarLink to='contacto' onClick={toggle} >Contacto</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar