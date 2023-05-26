import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShopiCartContext } from '../../Context'
import Layout from "../../Components/Layout"
import OrderCard from '../../Components/OrderCard'



const MyOrder = () => {
    const context = useContext(ShopiCartContext)
    //console.log(context.order?.slice(-1)[0].products)
    //leer la url y basados en el index saber que elemento mostrar
    const currentPath = window.location.pathname
    //console.log(currentPath.lastIndexOf('/') + 1)
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    //si index es = a last va a tomar el ultimo elemento del array
    if (index === 'last') index = context.order?.length - 1
    
    return (
        <Layout>
             <div className='flex w-80 items-center justify-center relative mb-6 '>
                <Link  to='/my-orders'>
                    <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
                </Link>
                <h1>My Order</h1>
            </div>

            <div className='flex flex-col w-80'>
                 {
                    context.order?.[index]?.products.map(product => {
                        return (
                            <OrderCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imgUrl={product.images}
                                price={product.price}
                            />
                        )
                    })
                } 
            </div>
            
        </Layout>
    ) 
}

export default MyOrder
