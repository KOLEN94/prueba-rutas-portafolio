import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './Hero_estilos.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineFilePdf } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

export default function Hero() {
  return (
        <Container fluid className="Inicio" id="hero">
            <Row className="d-flex align-items-center contenido-hero">
                <Col>
                    <div className="text-lg-start text-md-start text-center flex-column h-100 justify-content-center bloque-titulos">
                        <h2 className=" color-primary text-center titulo-h2">
                            Hola y Bienvenid@
                        </h2>
                        <h1 className="color-primary text-center titulo-h1 titulohero">
                            Soy Teofilo Rosales
                        </h1>
                        <h3 className="color-primary text-center titulo-h3">
                            Diseñador Web especializado en CMS Wordpress Freelance
                        </h3>
                    </div>
                    <div className="d-flex align-items-center justify-content-center bloque-social">
                        <Button variant="outline-light"
                                className="icono-social" 
                                rel="noreferrer" 
                                href="https://web.facebook.com/teofilo.rosales.1" 
                                target="_blank">
                                <FaFacebook/>
                            </Button>

                        <Button variant="outline-light" 
                            className="icono-social" 
                            rel="noreferrer" 
                            href="https://www.linkedin.com/in/teofilo-rosales-gama" 
                            target="_blank">
                            <AiFillLinkedin/>
                        </Button>
                        
                    </div>
                    <div className="d-flex align-items-center justify-content-center bloque-CV">
                        <Button variant="outline-light"
                            className="titulo-nav-menu boton-cv"  
                            rel="noreferrer" 
                            href="https://drive.google.com/file/d/19dibH17TRZklsZvZk9Q4fnvHHbtOr_AH/view?usp=sharing" 
                            target="_blank">
                            <AiOutlineFilePdf/> Descargar cv
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
  );
}
