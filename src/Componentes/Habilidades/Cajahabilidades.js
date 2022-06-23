import React from 'react'
import { Button, Col } from 'react-bootstrap'

const Cajahabilidades = ( {titulo, imagen}) => {
  return (
    <>
      <Col lg= {3} md={6} sm={12}>
        <div className="d-grid">
              <Button variant="outline-dark" size="lg" className='caja-habilidades'>
                  {imagen} {titulo}
              </Button>
          </div>
      </Col>
        
    </>
  )
}

export default Cajahabilidades
