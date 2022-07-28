import React from "react";
import { useContext } from "react";
import { Context } from "..";
import { Nav, Navbar, Container, Button} from 'react-bootstrap';
import { NavLink, useNavigate } from "react-router-dom";
import '../styles/navbar.css';
import {observer} from 'mobx-react-lite';
import {ADMIN_ROUTE, LOGIN_ROUTE} from '../utils/consts'

const NavBar = observer(() => {
   const {user} = useContext(Context)
   const history = useNavigate()
   const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
   }

   return(
      <Navbar className="navbar">
         <Container className="container">
            <NavLink className='home' to='/'>🗿</NavLink>
            {user.isAuth ?
               <Nav className='after_auth'>
                  <button className="admin" onClick={() => history(ADMIN_ROUTE)}>ADMIN</button>
                  <button className="auth" onClick={() => logOut()}>LOG OUT</button>
               </Nav>
               :
               <Nav className='before_auth'>
                  <button className="auth" onClick={() => history(LOGIN_ROUTE)}>LOG IN</button>
               </Nav>
            }  
         </Container>
      </Navbar>
   )
})

export default NavBar;