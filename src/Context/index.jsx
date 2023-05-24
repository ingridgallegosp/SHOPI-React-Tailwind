import { createContext, useState } from 'react'

//estado global de la aplicacion-fuente de verdad a donde vamos a hacer request desde dif componentes de la app
//1 crear un contexto
export const ShopiCartContext = createContext();

//el context se provee mediante un provideer
export const ShopiCartProvider = ({ children }) => {
    //Shopping Cart - Increment Qty
    const [count, setCount] = useState(0);

    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    //const toggleProductDetail = () => setisProductDetailOpen(!isProductDetailOpen)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({}); //la info del producto viene en forma de objeto

    //Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);
    //console.log('PRODUCTS IN CART: ', cartProducts)
    
    //Shopping Cart - Order
    const [order, setOrder] = useState([]);
    
    //Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    
    return (
    //llamamos al proveedor del contexto y hacemos un wrapper - con el q provee la info del contexto
    //2 crear un proveedor que va a encapsular todos los componentes que tenemos en App para proveerlos de informacion
        //va a tener un hijo(App) que necesita que lea count y tb que cualquier componente puede modificar ese valor
        <ShopiCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            //toggleProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,

        }}>
            {children}
        </ShopiCartContext.Provider>
    )
}



