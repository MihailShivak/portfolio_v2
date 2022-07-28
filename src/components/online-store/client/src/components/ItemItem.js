import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import "../styles/itemitem.css"
import star from '../assets/119067940-star-symbol-icon-black-simple-outline-5-pointed-rounded-isolated-vector-illustration.jpg';
import { useNavigate } from 'react-router-dom';
import { ITEM_ROUTE } from "../utils/consts";

const ItemItem = ({item}) => {
   const history = useNavigate()
   return(
      <Col md={3} className="item_col" onClick={() => history(ITEM_ROUTE + '/' + item.id)}>
         <Card className="item_card">
            <Image className="item_card_img" src={process.env.REACT_APP_API_URL + item.img}/>
            <div className="item_name_rating">
               <div>{item.name}</div>
               <div className="rating">
                  <div>{item.rating}</div>
                  <Image className="star" src={star} width={18} height={18}/>
               </div>
            </div>
         </Card>
      </Col>
   )
}


export default ItemItem;