import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from './Pages/Home'
import MyOrder from './Pages/MyOrder'
import MyOrders from './Pages/MyOrders'
import MyAccount from './Pages/MyAccount'
import NotFound from './Pages/NotFound'
import SignIn from './Pages/SignIn'
import NavBar from './Components/NavBar/NavBar'
import './App.css'


const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/my-order', element: <MyOrder /> },
        { path: '/my-orders', element: <MyOrders /> },
        { path: '/my-account', element:<MyAccount/> },
        { path: '/*', element: <NotFound /> },
        { path: '/sign-in', element: <SignIn /> } 
    ])
    return routes
}

const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes></AppRoutes>
            <NavBar></NavBar>
        </BrowserRouter>
    )
}

export default App
