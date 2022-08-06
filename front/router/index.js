import About from '../pages/About';
import Home from '../pages/Home';

export const appRoutes = [
   {path: '/', element: <Home/>, exact: true},
   {path: '/about', element: <About/>, exact: true},
]