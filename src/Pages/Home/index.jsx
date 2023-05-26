import { useContext } from 'react'
import { ShopiCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

const Home = () => {
    const context = useContext(ShopiCartContext)

    const renderView = () => {
        if (context.filteredItems?.length>0) {
            return (
                context.filteredItems?.map(item => {
                    return < Card
                        key={item.id}
                        data={item}
                    />
                })
            ) 
        /* }
        if (context.filteredItems== null) {
            return (
                context.items?.map(item => {
                    return < Card
                        key={item.id}
                        data={item}
                    />
                })
            ) */
        } else {
            return (
                <div className='flex justify-center items-center w-80'>Product not found :c</div>
            )
        }
    }

    return (
        <Layout>
            <div className='flex justify-center items-center w-80 mb-4'>
                <h1 className='font-medium text-xl'>What are you looking for?</h1>
            </div>

            <input
                type='text'
                placeholder='Here you can search a product'
                className='rounded-lg border border-gray shadow-md w-96 p-2 mb-5 focus: outline-none'
                onChange={(event) => context.setSearchByTitle(event.target.value)}
            />
        
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    renderView()
                } 
            </div>
            <ProductDetail/>
        </Layout> 
    )
}

export default Home
