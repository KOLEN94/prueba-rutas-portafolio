import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Servicios-estilos.css'
import Cajaservicios from "./Cajaservicios"
import { Servicio01, Servicio02, Servicio03, Servicio04, Servicio05, Servicio06, Servicio07, Servicio08 } from './Data';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Servicios = () => {
  return (
    <div className='bloque-servicios' id='servicios'>
      <Container >
        <Row>
          <Col>
            <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
              <h2 className='tituloh2 text-center'>Servicios</h2>
            </AnimationOnScroll>
          </Col>
        </Row>

      </Container>
      <Container className='bloque-servicios'>
      
        <Row>
          <Cajaservicios {...Servicio01} />
          <Cajaservicios {...Servicio02} />
          <Cajaservicios {...Servicio03} />
          <Cajaservicios {...Servicio04} />
          <Cajaservicios {...Servicio05} />
          <Cajaservicios {...Servicio06} />
          <Cajaservicios {...Servicio07} />
          <Cajaservicios {...Servicio08} />
        </Row>
      </Container>
    </div>


  );
};

export default Servicios