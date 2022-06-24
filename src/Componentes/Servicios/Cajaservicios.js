import React from 'react'
import { Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import './Servicios-estilos.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Cajaservicios = ({ titulo, description, imagen, alt}) => {
  return (
    <>
    
        <Col lg= {3} md={6} sm={12}>
        <AnimationOnScroll animateIn="animate__zoomIn" delay={500} animateOnce={true}>
          <Card className='p-4 mt-3 tarjeta-servicio'>
              <div >
                <img src={  imagen } alt={alt} className='img-servicio'></img>
              </div>
              <Card.Body>
                <Card.Title className='text-center titulo-h3 '>{titulo}</Card.Title>
                  <Card.Text className='texto-cuerpo'>
                    { description }
                  </Card.Text>
              </Card.Body>
          </Card>
          </AnimationOnScroll>
        </Col>
        
    </>
  );
};

export default Cajaservicios