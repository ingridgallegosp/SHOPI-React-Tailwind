import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopiCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils/totalPrice'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShopiCartContext)
    
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout=() => {
        const orderToAdd = {
            date:'01.02.2023',
            products: context.cartProducts,
            totalProducts:context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts),
        }
        //console.log('order to add',orderToAdd)
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0)
        context.closeCheckoutSideMenu()
        context.setSearchByTitle(null)
    }

    return (

        <aside className={`${ context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black shadow-xl rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={()=>context.closeCheckoutSideMenu()} />
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map(product => {
                        return (
                            <OrderCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imgUrl={product.images}
                                price={product.price}
                                handleDelete={handleDelete}
                            />
                        )
                })
                }</div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total Price:</span>
                    <span className='font-medium text-2xl'>${ totalPrice(context.cartProducts) }</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
                
            </div>
           
        </aside>
    )
}
export default CheckoutSideMenu