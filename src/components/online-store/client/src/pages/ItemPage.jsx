import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Image } from "react-bootstrap";
import '../styles/itempage.css';
import { useParams } from "react-router-dom";
import { fetchOneItem } from "../http/itemAPI";

const ItemPage = () => {
   const [item, setItem] = useState({info: []})
   const {id} = useParams()
   useEffect(() => {
      fetchOneItem(id).then(data => setItem(data))
   }, [])

   return(
      <div className="container_item_page">
         <div className="first_row">
            <div className="col_item_rating">
               <Image width={300} height={300} src={process.env.REACT_APP_API_URL + item.img}/>
               <div className="item_rating">
                  {item.rating}
                  <h1>⭒⭒⭒⭒⭒</h1>
               </div>
            </div>
            <div className="col_about_item">
               <div className="row_about_item">
                  <h2>{item.name}</h2>
                  {item.info.map(info => 
                     <div key={info.id} className="short_description">
                        {info.title}: {info.shortDescription}
                     </div>
                  )}
               </div>
            </div>
            <div className="col_price">
               <div className="card_price">
                  <h3>От: {item.price}$</h3>
                  <button className="button_price">Добавить в корзину</button>
               </div>
            </div>
         </div>
         <div className="description_row">
            <div className="description">
               <h1>Описание</h1>
               {item.description}
            </div>
         </div>
      </div>
   )
}

export default ItemPage;