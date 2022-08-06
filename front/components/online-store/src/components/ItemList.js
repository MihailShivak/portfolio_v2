import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import { Row } from "react-bootstrap";
import ItemItem from "./ItemItem";
import "../styles/itemlist.css"

const ItemList = observer(() => {
   const {item} = useContext(Context)
   return(
      <Row className="item_list_row">
         {item.items.map(item => 
            <ItemItem key={item.id} item={item}/>
         )}
      </Row>
   )
})


export default ItemList;