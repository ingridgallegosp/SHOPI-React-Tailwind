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
                <hi>My Orders</hi>
            </div>
            {
                context.order.map((order) => {
                    <Link to ={`/my-orders/${order.id}`}>
                        <OrdersCard
                            key={order.id}
                            totalPrice={order.totalPrice}
                            totalProducts={ order.totalProducts }
                        />
                    </Link>   
                })
            }
        </Layout>
    )
}

export default MyOrders
