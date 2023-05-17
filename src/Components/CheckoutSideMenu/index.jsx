import { useContext } from 'react'
import { ShopiCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'


const CheckoutSideMenu = () => {
    const context = useContext(ShopiCartContext)

    return (

        <aside className={`${ context.isheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={()=>context.closeCheckoutSideMenu()} />
            </div>
        </aside>
    )
}
export default CheckoutSideMenu