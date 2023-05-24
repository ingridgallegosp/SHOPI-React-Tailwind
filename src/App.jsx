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
import './App.css'


const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/my-order', element: <MyOrder /> },
        { path: '/my-orders', element: <MyOrders /> },
        { path: '/my-orders/last', element: <MyOrder /> },
        { path: '/my-orders/:id', element: <MyOrder /> },
        { path: '/my-account', element:<MyAccount/> },
        { path: '/sign-in', element: <SignIn /> },
        { path: '/*', element: <NotFound /> }
    ])
    return routes
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
