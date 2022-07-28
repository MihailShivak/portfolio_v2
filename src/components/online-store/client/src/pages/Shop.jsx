import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BrandBar from "../components/TypeBar";
import TypeBar from "../components/BrandBar";
import '../styles/shop.css'
import ItemList from "../components/ItemList";
import { useContext } from "react";
import { Context } from "..";
import { useEffect } from "react";
import { fetchBrands, fetchTypes, fetchItems } from "../http/itemAPI";
import { observer } from "mobx-react-lite";
import Pages from "../components/Pages";

const Shop = observer(() => {
   const {item} = useContext(Context)
   useEffect(() => {
      fetchTypes().then(data => item.setTypes(data))
      fetchBrands().then(data => item.setBrands(data))
      fetchItems(null, null, 1, 3).then(data => {
         item.setItems(data.rows)
         item.setTotalCount(data.count)
      })
   }, [])
   useEffect(() => {
      fetchItems(item.selectedType.id, item.selectedBrand.id, item.page, 3).then(data => {
         item.setItems(data.rows)
         item.setTotalCount(data.count)
      })
   }, [item.page,item.selectedType, item.selectedBrand])

   return(
      <Container className="container_shop">
         <TypeBar/>
         <div className="content">
            <BrandBar/>
            <ItemList/>
            <Pages/>
         </div>
      </Container>
   )
})

export default Shop;