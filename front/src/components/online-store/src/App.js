import React from "react";
import { observer } from "mobx-react-lite";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/Navbar";
import './styles/app.css';
import { useContext } from "react";
import { Context } from ".";
import { useState } from "react";
import { useEffect } from "react";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if(loading){
    return <Spinner animation="border"/>
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  )
});

export default App;
