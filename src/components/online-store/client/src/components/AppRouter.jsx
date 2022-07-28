import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Route, Routes, Navigate} from 'react-router-dom'
import { Context } from "..";
import { authRoutes, publicRoutes } from "../router";

const AppRouter = observer(() => {
   const {user} = useContext(Context)
   return(
      <Routes>
         {user.isAuth && authRoutes.map(route => 
            <Route 
               element={route.element}
               path={route.path}
               exact={route.exact} 
               key={route.path} 
            />
         )}
         {publicRoutes.map(route => 
            <Route 
               element={route.element}
               path={route.path}
               exact={route.exact} 
               key={route.path} 
            />
         )}
         <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
   )
})

export default AppRouter;