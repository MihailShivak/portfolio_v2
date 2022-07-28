import React from "react";
import { Card, Form, Row } from "react-bootstrap";
import '../styles/auth.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";

const Auth = observer(() => {
   const {user} = useContext(Context)
   const location = useLocation()
   const history = useNavigate()
   const isLogin = location.pathname === LOGIN_ROUTE;
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')   
   const click = async() => {
      try{
         let data;
         if(isLogin){
            data = await login(email, password);
         } else {
            data = await registration(email, password);
         }
         user.setUser(user)
         user.setIsAuth(true)
         history(SHOP_ROUTE)
      } catch (e) {
      }
   }

   return(
      <div className="auth_container">
         <Card className="card">
            <h2 className="authorization">{isLogin ? "AUTHORIZATION" : "REGISTRATION"}</h2>
            <Form className="form">
               <Form.Control className="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
               <Form.Control className="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} type="password"/>
               <Row className="buttons">
               <button className="sign_in" onClick={click}>{isLogin ? "LOG IN" : "REGISTRATION"}</button>
                  {isLogin ?
                     <div className="no_account">
                        no account ? <NavLink className='link' to='/registration'>Register</NavLink>
                     </div>
                     :
                     <div className="no_account">
                        have an account ? <NavLink className='link' to='/login'>Log in</NavLink>
                     </div>
                  }
               </Row>
            </Form>
         </Card>
      </div>
   )
})

export default Auth;