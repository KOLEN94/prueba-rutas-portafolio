import { Container, Row, Col } from "react-bootstrap";
import Marquee from "react-marquee-slider";
import './Estilos-Testimonio.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Testimonios() {

  const Item = [
    {
      id: 1,
      name: "Karla M",
      jobTitle: "Direct Marketing Executive",
      text: "Teofilo hizo un gran trabajo, lo entregó a tiempo y la comunicacion con el fue muy buena.Entendio perfectamente los requisitos del trabajo y lo llevo a cabo a la perfección, hizo las correciones necesarias dentro del presupuesto. Definitivamente volveria a contar con él para más trabajos. Lo recomiendo ampliamente.",
    },
    {
      id: 2,
      name: "Tecnotecnicae",
      jobTitle: "Customer Directives Strategist",
      text: "Trabajar con Teofilo ha sido muy sencillo, ha entendido a la perfección el trabajo y lo ha ejecutado de forma correcta y a tiempo. la comunicación ha sido fluida y el resultado final tal y como se requirió. Lo recomiendo.",
    },
    {
      id: 3,
      name: "Joe Vargas",
      jobTitle: "Forward Intranet Liaison",
      text: "Contrate a teofilo para la migracion y mejora de 02 paginas web que tengo, fue muy serio con su trabajo, siempre estuvo pendiente de mis consultas y dudas, seguire trabajando con el, ademas lo recomiendo",
    },
    {
      id: 4,
      name: "Acronia Studio",
      jobTitle: "Direct Group Designer",
      text: "Trabajador muy comprometido, trabajó constantemente en el proyecto hasta que lo hizo",
    },

    {
      id: 5,
      name: "Nick Fiverr - Emprendedor2016",
      jobTitle: "Forward Solutions Agent",
      text: "Es un profesional a echo un trabajo fantástico rápido creativo para mejor la web y obtener mejores resultado, lo recomiendo 100%.",
    },
  ];

  return (
    <>
      <Container fluid id="Testimonio" className="seccion-testimonios">
        <Row>
          <Col>
            <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
              <h2 className="tituloh2 text-center" style={{ color: "#fff", padding: "30px" }} >
                Testimonios
              </h2>
            </AnimationOnScroll>
            <div style={{ height: "275px" }}>
              <Marquee velocity={20}>
                {Item.map((Item) => (
                  <AnimationOnScroll animateIn="animate__fadeIn" delay={300} animateOnce={true} key={Item.id}>
                    <div  className="tarjeta-slider-testimonio align-items-center justify-contents-center">
                      <div className="cuerpo-tarjeta-testimonio">
                        <h3 className="titulo-h3">{Item.name}</h3>
                        <p className="texto-cuerpo ">{Item.text}</p>
                      </div>
                    </div>
                  </AnimationOnScroll>
                ))}
              </Marquee>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
