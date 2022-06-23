import React,{useState} from 'react';
import './Estilos-Portafolio.css';
import Menu from './Menu';
import Categorias from './Categorias';
import items from './Data';
import { Row, Container } from 'react-bootstrap'

const allCategorias = ['Todo', ...new Set(items.map((item)=>item.category))]
function Portafolio() {

  const [menuItems,setMenusItems] = useState(items)
  const [categories] = useState(allCategorias)

   const filterItem =(category)=>{
      if(category === 'Todo'){
        setMenusItems(items)
        return;
      }

      const newItem = items.filter((item)=>item.category === category);
      setMenusItems(newItem)
   }
  return (
    <>
    <div id="Portafolio">
          <Container>
            <Row>
              <div className="menu section">
                    <div className="title">
                        <h2>Portafolio</h2>
                        <div className="underline"></div>
                    </div>
                    <Categorias categories ={categories} filterItem={filterItem}  />
                      <Menu items={menuItems} />
              </div>
              
            </Row>
            
          </Container>
          </div>
        </>
    
  );
}

export default Portafolio;
