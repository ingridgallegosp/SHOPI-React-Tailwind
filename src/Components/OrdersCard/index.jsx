import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCard = (props) => {
    const { id, totalPrice, totalProducts } = props

    const date = new Date().toDateString()
    console.log(date)
   

    return (
        <div className='flex justify-between items-center mb-3 border border-black'>
            <p>
                <span>{ date }</span>
                <span>{ totalPrice }</span>
                <span>{ totalProducts }</span>
            </p>
           
        </div>
    )
}

export default OrdersCard