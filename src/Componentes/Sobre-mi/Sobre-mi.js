import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagen from '../../imagenes/Teofilo.png'
import './Sobre-mi-estilos.css'

function Sobremi() {
  const Item = [{
    id: 1,
    contenido01: "¡Hola, soy Teofilo! Soy un desarrollador web experto en Elementor con experiencia profesional con clientes en el extranjero. Me dedico a mi oficio y soy un perfeccionista.Me gusta trabajar como autónomo porque me da la libertad de elegir cuándo y con qué frecuencia trabajo. Ayudo a negocios y pequeñas empresas a captar clientes en Internet mediante la creacion de una web profesional que transmita una imagen corporativa adecuada de su empresa. ",
    contenido02: "Soy experto en la creación de cualquier sitio web de WordPress utilizando el constructor de páginas ELEMENTOR, puedo convertir sus diseños PSD, XD a una pagina web con Elementor Pro. Solo contácteme y cuénteme todas las caracteristicas de su proyecto. Los archivos más compatibles incluyen: Adobe XD, Figma, Sketch, PSD y muchos más. Puedo convertir tus diseños en hermosas paginas web.",
  }];
  return (
    <>
      <Container id='sobre-mi' className='bloque-sobre-mi'>
        <Row className='modo-escritorio'>
          <Col className='d-flex justify-content-center align-items-center'>
            <img src={imagen} alt='teofilo' className='center-block imagen-teo fadeInLeftfoto'></img>
          </Col>
          <Col className='align-items-center'>
            <h2 className='titulo-h2 text-center fadeInDownteo-sobremi' >Sobre Mi</h2>
            {Item.map((item) => (
              <div key={item.id}>
                <p className="texto-cuerpo fadeInDownteo-sobremi">{item.contenido01}</p>
                <p className="texto-cuerpo fadeInDownteo-sobremi">{item.contenido02}</p>
              </div>
            ))}
          </Col>
        </Row>
        <Row className='modo-mobil'>
          <Col className='align-items-center'>
            <h2 className='titulo-h2 text-center fadeInDownteo-sobremi' >Sobre Mi</h2>
            {Item.map((item) => (
              <div key={item.id}>
                <p className="texto-cuerpo fadeInDownteo-sobremi">{item.contenido01}</p>
                <p className="texto-cuerpo fadeInDownteo-sobremi">{item.contenido02}</p>
              </div>
            ))}
          </Col>
          <Col className='d-flex justify-content-center align-items-center'>
            <img src={imagen} alt='teofilo' className='center-block fadeInUpimagen'></img>
          </Col>
        </Row>
      </Container>

    </>
  )
};

export default Sobremi