import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { Card, Container, ListGroup, Row } from "react-bootstrap";
import "../styles/typebar.css"

const TypeBar = observer(() => {
   const {item} = useContext(Context)

   return(
      <Container className='container_type'>
         <ListGroup className='listgroup_type'>
            {item.types.map(type =>
               <ListGroup.Item
                  key={type.id}
                  active={type.id === item.selectedType.id}
                  onClick={() => item.setSelectedType(type)}
                  className='list_group_item_type'
               >
                  {type.name}
               </ListGroup.Item>
            )}
         </ListGroup>
      </Container>
   )
})

export default TypeBar;