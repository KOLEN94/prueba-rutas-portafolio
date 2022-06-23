import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Estilos-contacto.css'
import { Cajacontacto } from './Cajacontacto'
import {contacto01, contacto02, contacto03} from './Data'

function Contacto() {
  return (
    <>
        <Container id='contacto' className='bloque-contacto'>
          <Row className='text-center'>
            <h2 className='titulo-h2'>Contacto</h2>
          </Row>
          <Row>
            <Cajacontacto {...contacto01}/>
            <Cajacontacto {...contacto02}/>
            <Cajacontacto {...contacto03}/>
          </Row>
        </Container>
    </>
  )
}
export default  Contacto