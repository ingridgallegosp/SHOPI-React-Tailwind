import { createContext, useState, useEffect } from 'react'

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


    // Save Products from API
    const [items, setItems] = useState(null);

    //Search products by Title
    const [searchByTitle, setSearchByTitle] = useState(null);
    //console.log('search input',searchByTitle);
    
    //Search products by Category
    const [searchByCategory, setSearchByCategory] = useState(null);
    console.log('searchByCategory:', searchByCategory)

    //FilterED  Items
    const [filteredItems, setFilteredItems] = useState(null);
    //console.log('filteredItems:', filteredItems)

    //Filter by Items
    const filterItemsByTitle = (items, searchByTitle) => {
          return items?.filter(item=> item.title.toLowerCase().includes(searchByTitle.toLowerCase()))  
    }

    //Filter by Category
    const filterItemsByCategory = (items, searchByCategory) => {
          return items?.filter(item=> item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))  
    }

    //Filter by Title and Category
    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filterItemsByTitle(items, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY') {
            return filterItemsByCategory(items, searchByCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filterItemsByTitle(items, searchByTitle).filter(item=> item.title.toLowerCase().includes(searchByTitle.toLowerCase())) 
        }
        if (!searchType) {
            return items
        }
    }
    //Get products from API
    useEffect(() => {
        const url = 'https://api.escuelajs.co/api/v1/products'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setItems(data)
                //console.log(data)
            })
            .catch((e) => console.log(e))
    }, []);

    //Filter by Items
    /* useEffect(() => {
        if (searchByTitle) setFilteredItems(filterItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle, searchByCategory]); */

    //Filter by Title and Category
    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory]);

    console.log('filteredItems: ', filteredItems)
    


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
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory,
            
        }}>
            {children}
        </ShopiCartContext.Provider>
    )
}



