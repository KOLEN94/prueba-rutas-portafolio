import React from 'react';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap'



const Categorias = ({ categories, filterItem}) => {
  return (
    <Container>
      <Row>
        <Col className='align-items-center justify-content-center bloque-botones-filtro' >
      {
        categories.map((category, index) => {
          return(
           /* <button type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItem(category)}>
              {category}
            </button>*/
            <Button variant="outline-dark" className='align-items-center justify-content-center boton-filtro' 
            key={index} onClick={() => filterItem(category)}>{category}</Button>
          )
        })
      }
      </Col>
      </Row>
    </Container>
  )
}
export default Categorias;