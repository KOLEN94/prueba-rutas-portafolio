import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Cajahabilidades = ({ titulo, imagen }) => {
  return (
    <>
      <Col lg={3} md={6} sm={12}>
        <AnimationOnScroll animateIn="animate__fadeIn" delay={1000} animateOnce={true}>
          <div className="d-grid">
            <Button variant="outline-dark" size="lg" className='caja-habilidades'>
              {imagen} {titulo}
            </Button>
          </div>
        </AnimationOnScroll>
      </Col>

    </>
  )
}

export default Cajahabilidades
