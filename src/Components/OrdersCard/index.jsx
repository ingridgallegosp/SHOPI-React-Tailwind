import { ChevronRightIcon, CalendarIcon, ShoppingCartIcon} from '@heroicons/react/24/solid'

const OrdersCard = (props) => {
    const { totalPrice, totalProducts } = props
    const date = new Date().toDateString()
   
    return (
        <div className='flex justify-between items-center mb-3 border border-gray shadow-md rounded-lg p-4 w-80'>
            <div className=' flex justify-between w-full'>
                <div className='flex flex-col'>
                    <p className='flex flex-row items-center'> 
                        <CalendarIcon className='h-4 w-4  cursor-pointer' />
                        <span className='font-light pl-2'>{date}</span>
                    </p>
                    <p className='flex items-center'> 
                        <ShoppingCartIcon className='h-4 w-4  cursor-pointer '/>
                        <span className='font-light pl-2'>articles: {totalProducts} </span>
                    </p>
                </div>
            </div>
            <div className=''>
                <p className='flex flex-row justify-start items-center'>
                    <span className='font-medium text-2xl w-20'>${totalPrice}</span>
                    <ChevronRightIcon className='h-7 w-7 text-black cursor-pointer'/>
                </p>
            </div>
        </div>
    )
}

export default OrdersCard