import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../../estilos/Servicios.css';
import Cajaservicios from "./Cajaservicios"
import { Servicio01, Servicio02, Servicio03, Servicio04 } from './Data';
const cuerposervicios = () => {
    return (
      <Container className='bloque-servicios'>
              <Row>
                  <Cajaservicios {...Servicio01}/>
                  <Cajaservicios {...Servicio02}/>
                  <Cajaservicios {...Servicio03}/>
                  <Cajaservicios {...Servicio04}/>
              </Row>
      </Container>
    );
  };
  
  export default cuerposervicios