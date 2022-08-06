import React from "react";
import { useState } from "react";
import CreateBrand from "../components/modals/CreateBrand";
import CreateItem from "../components/modals/CreateItem";
import CreateType from "../components/modals/CreateType";
import '../styles/admin.css';

const Admin = () => {
   const [brandVisible, setBrandVisible] = useState(false)
   const [typeVisible, setTypeVisible] = useState(false)
   const [itemVisible, setItemVisible] = useState(false)
   return(
      <div className="admin_container">
         <button onClick={() => setTypeVisible(true)}>Добавить Тип</button>
         <button onClick={() => setBrandVisible(true)}>Добавить Бренд</button>
         <button onClick={() => setItemVisible(true)}>Добавить Устройство</button>
         <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
         <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
         <CreateItem show={itemVisible} onHide={() => setItemVisible(false)}/>
      </div>
   )
}

export default Admin;