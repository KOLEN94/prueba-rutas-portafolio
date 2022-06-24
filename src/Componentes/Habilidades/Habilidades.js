import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Cajahabilidades from './Cajahabilidades'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './Estilos-Habilidades.css'
import {
  Habilidad01,
  Habilidad02,
  Habilidad03,
  Habilidad04,
  Habilidad05,
  Habilidad06,
  Habilidad07,
  Habilidad08,
  Habilidad09,
  Habilidad10,
  Habilidad11,
  Habilidad12,
  Habilidad13,
  Habilidad14,
  Habilidad15,
  Habilidad16
} from './Data'
export const Habilidades = () => {
  return (
    <>
      <div id='habilidades'>
        <Container >
          <Row>
            <Col>
              <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
                <h2 className='tituloh2 text-center titulo-habilidades'>Habilidades</h2>
              </AnimationOnScroll>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Cajahabilidades {...Habilidad01} />
            <Cajahabilidades {...Habilidad02} />
            <Cajahabilidades {...Habilidad03} />
            <Cajahabilidades {...Habilidad04} />
            <Cajahabilidades {...Habilidad05} />
            <Cajahabilidades {...Habilidad06} />
            <Cajahabilidades {...Habilidad07} />
            <Cajahabilidades {...Habilidad08} />
            <Cajahabilidades {...Habilidad09} />
            <Cajahabilidades {...Habilidad10} />
            <Cajahabilidades {...Habilidad11} />
            <Cajahabilidades {...Habilidad12} />
            <Cajahabilidades {...Habilidad13} />
            <Cajahabilidades {...Habilidad14} />
            <Cajahabilidades {...Habilidad15} />
            <Cajahabilidades {...Habilidad16} />
          </Row>
        </Container>
      </div>
    </>
  )
}
