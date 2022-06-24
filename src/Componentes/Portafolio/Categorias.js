import React from 'react';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Categorias = ({ categories, filterItem }) => {
  return (
    <Container>
      <Row>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <Col className='align-items-center justify-content-center bloque-botones-filtro' >
            {
              categories.map((category, index) => {
                return (
                  <Button variant="outline-dark" className='align-items-center justify-content-center boton-filtro'
                    key={index} onClick={() => filterItem(category)}>{category}</Button>
                )
              })
            }
          </Col>
        </AnimationOnScroll>
      </Row>
    </Container>
  )
}
export default Categorias;