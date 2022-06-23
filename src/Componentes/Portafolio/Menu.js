import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const Menu = ({items}) =>{
     return(
          <div className='section-center'>
                {
                    items.map((menuItem)=>{
                        const {id,titulo,img,desc, link} = menuItem;

                         return(
                            
                               /*  <div className="menu-item" key={id} >
                                  <img src={img} alt={titulo} className="photo"/>
                                  <div className="item-info">
                                   <header>
                                     <h4 href={link} target="_blank" rel="noreferrer">{titulo}</h4>
                                    </header>
                                      <p className="item-text">{desc}</p>
                                  </div>
                             </div> */
                              <Card key={id} className="menu-item">
                                   <Card.Img variant="top" src={img} />
                                        <Card.Body>
                                        <Card.Title>{titulo}</Card.Title>
                                        <Card.Text className='texto-testimonio'>
                                             {desc}
                                        </Card.Text>
                                        <Button className='link-pagina' variant="outline-dark" href={link} target="_blank">Ver pagina</Button>
                                   </Card.Body>
                              </Card>
                         )
                    })
                }
          </div>
     )
}

export default Menu;