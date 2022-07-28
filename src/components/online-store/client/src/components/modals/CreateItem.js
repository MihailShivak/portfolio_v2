import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../../index";
import { createItem, fetchBrands, fetchTypes } from "../../http/itemAPI";

const CreateItem = observer(({show, onHide}) => {
   const {item} = useContext(Context)
   const [name, setName] = useState('')
   const [price, setPrice] = useState(0)
   const [file, setFile] = useState(null)
   const [info, setInfo] = useState([])
   const [description, setDescription] = useState('')
   useEffect(() => {
      fetchTypes().then(data => item.setTypes(data))
      fetchBrands().then(data => item.setBrands(data))
   }, [])
   const addInfo = () => {
      setInfo([...info, {title:'', shortDescription: '', number: Date.now()}])
   }
   const removeInfo = (number) => {
      setInfo(info.filter(i => i.number !== number))
   }
   const selectFile = e => {
      setFile(e.target.files[0]);
   }
   const changeInfo = (key, value, number) => {
      setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
   }
   const addItem = () => {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('price', `${price}`)
      formData.append('img', file)
      formData.append('brandId', item.selectedBrand.id)
      formData.append('typeId', item.selectedType.id)
      formData.append('info', JSON.stringify(info))
      formData.append('description', description)
      createItem(formData).then(data => onHide())
   }
   return(
      <Modal
         show={show}
         onHide={onHide}
         size="lg"
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Добавить устройство
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{item.selectedType.name || "Select Type"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                     {item.types.map(type => 
                        <Dropdown.Item onClick={() => item.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                     )}
                  </Dropdown.Menu>
               </Dropdown>
               <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{item.selectedBrand.name || "Select Brand"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                     {item.brands.map(brand => 
                        <Dropdown.Item onClick={() => item.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                     )}
                  </Dropdown.Menu>
               </Dropdown>
               <Form.Control className="mt-3" placeholder="Введите название утсройства" value={name} onChange={e => setName(e.target.value)}/>
               <Form.Control className="mt-3" placeholder="Задайте стоимость утсройства" type="number" value={price} onChange={e => setPrice(Number(e.target.value))}/>
               <Form.Control className="mt-3" type="file" onChange={selectFile}/>
               <Form.Control className="mt-3" placeholder="Введите описание утсройства" value={description} onChange={e => setDescription(e.target.value)}/>
               <hr/>
               <Button variant={'outline-dark'} onClick={addInfo}>Добавить свойство</Button>
               {info.map(i =>
                  <Row className="mt-3" key={i.number}>
                     <Col md={4}>
                        <Form.Control
                           value={i.title}
                           onChange={(e) => changeInfo("title", e.target.value, i.number)}
                           placeholder="Введите название характеристики"
                        />
                     </Col>
                     <Col md={4}>
                        <Form.Control
                           value={i.shortDescription}
                           onChange={(e) => changeInfo("shortDescription", e.target.value, i.number)}
                           placeholder="Введите описание характеристики"
                        />
                     </Col>
                     <Col md={4}>
                        <Button variant={'outline-danger'} onClick={() => removeInfo(i.number)}>Удалить</Button>
                     </Col>
                  </Row>
               )}
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={addItem}>Добавить</Button>
         </Modal.Footer>
      </Modal>
   )
})

export default CreateItem;