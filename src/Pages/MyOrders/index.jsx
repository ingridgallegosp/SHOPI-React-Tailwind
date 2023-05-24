import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopiCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'



const MyOrders = () => {
    const context = useContext(ShopiCartContext)
    
    return (
        <Layout>
            <div className='flex w-80 items-center justify-center relative'>
                <h1>My Orders</h1>
            </div>
            {
                context.order.map((order, index) => {
                    return(
                        <Link key={index} to ={`/my-orders/${index}`}>
                            <OrdersCard
                                totalPrice={order.totalPrice}
                                totalProducts={ order.totalProducts }
                            />
                        </Link>   
                    )
                })
            }
        </Layout>
    )
}

export default MyOrders
