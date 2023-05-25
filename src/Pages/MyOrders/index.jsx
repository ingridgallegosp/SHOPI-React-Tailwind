import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopiCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'



const MyOrders = () => {
    const context = useContext(ShopiCartContext)
    
    return (
        <Layout>
            <div className='flex items-center justify-center w-80 relative mb-4'>
                <h1 className='font-medium text-xl'>My Orders</h1>
            </div>
            {
                context.order.map((order, index) => {
                    return(
                        <Link key={index} to ={`/my-orders/${index}`}>
                            <OrdersCard
                                totalProducts={order.totalProducts}
                                totalPrice={ order.totalPrice }
                                
                            />
                        </Link>   
                    )
                })
            }
        </Layout>
    )
}

export default MyOrders
