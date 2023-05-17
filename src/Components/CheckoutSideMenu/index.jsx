import { useContext } from 'react'
import { ShopiCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../OrderCard'
import './styles.css'


const CheckoutSideMenu = () => {
    const context = useContext(ShopiCartContext)

    return (

        <aside className={`${ context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={()=>context.closeCheckoutSideMenu()} />
            </div>
            {
                context.cartProducts.map(product => {
                    return (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            imgUrl={product.images}
                            price={product.price}
                        />
                    )
                })
            }
        </aside>
    )
}
export default CheckoutSideMenu