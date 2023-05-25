import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ShopiCartProvider } from './Context'
import Home from './Pages/Home'
import MyOrder from './Pages/MyOrder'
import MyOrders from './Pages/MyOrders'
import MyAccount from './Pages/MyAccount'
import NotFound from './Pages/NotFound'
import SignIn from './Pages/SignIn'
import NavBar from './Components/NavBar'
import CheckoutSideMenu from './Components/CheckoutSideMenu'
import routes from './utils/routes'
import './App.css'


const AppRoutes = () => {
    let route = useRoutes([
        { path: routes.HOME, element: <Home /> },
        { path: routes.CLOTHES, element: <Home /> },
        { path: routes.ELECTRONICS, element: <Home /> },
        { path: routes.FURNITURE, element: <Home /> },
        { path: routes.TOYS, element: <Home /> },
        { path: routes.OTHERS, element: <Home /> },
        { path: routes.MYORDER, element: <MyOrder /> },
        { path: routes.MYORDERS, element: <MyOrders /> },
        { path: '/my-orders/last', element: <MyOrder /> },
        { path: '/my-orders/:id', element: <MyOrder /> },
        { path: routes.MYACCOUNT, element:<MyAccount/> },
        { path: routes.SIGNIN, element: <SignIn /> },
        { path: routes.ERROR404, element: <NotFound /> }
    ])
    return route
}

const App = () => {
    return (
        <ShopiCartProvider> 
            <BrowserRouter>
                <AppRoutes></AppRoutes>
                <NavBar></NavBar>
                <CheckoutSideMenu/>
            </BrowserRouter>
        </ShopiCartProvider>
    )
}

export default App
