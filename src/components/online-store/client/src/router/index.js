import AdminPage from "../pages/AdminPage";
import Auth from "../pages/Auth";
import Basket from "../pages/Basket";
import ItemPage from "../pages/ItemPage";
import Shop from "../pages/Shop";

export const authRoutes = [
   {path: '/admin', element: <AdminPage/>, exact: true},
   {path: '/basket', element: <Basket/>, exact: true},
]

export const publicRoutes = [
   {path: '/', element: <Shop/>, exact: true},
   {path: '/login', element: <Auth/>, exact: true},
   {path: '/registration', element: <Auth/>, exact: true},
   {path: '/item' + '/:id', element: <ItemPage/>, exact: true},
]
