import React from 'react'
import { Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import './Servicios-estilos.css'

const Cajaservicios = ({ titulo, description, imagen, alt}) => {
  return (
    <>
        <Col lg= {3} md={6} sm={12}>
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
        </Col>
    </>
  );
};

export default Cajaservicios