import React, { useContext } from "react";
import { observer } from 'mobx-react-lite';
import { Context } from "../index";
import '../styles/brandbar.css';
import { Card, Container, ListGroup, Row } from "react-bootstrap";

const BrandBar = observer(() =>{
   const {item} = useContext(Context)
   return(
      <Container className="container_brand">
         <Row className="row_brand">
            {item.brands.map(brand => 
               <Card
                  border={brand.id === item.selectedBrand.id ? 'danger' : 'light'}
                  onClick={() => item.setSelectedBrand(brand)}
                  key={brand.id}
                  className='card_brand'
               >
                  {brand.name}
               </Card>
            )}
         </Row>
      </Container>
   )
})


export default BrandBar;