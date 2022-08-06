import React from "react";
import { Route, Routes} from 'react-router-dom'
import { appRoutes } from "../router";

const AppRouter = () => {
   return(
      <Routes>
         {appRoutes.map(route => 
            <Route
               element={route.element}
               path={route.path}
               exact={route.exact}
               key={route.path}
            />
         )}
      </Routes>
   )
}

export default AppRouter;