import { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

const Home = () => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const url = 'https://api.escuelajs.co/api/v1/products'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setItems(data)
                console.log(data)
            })
            .catch((e) => console.log(e))
        
    }, []);

    return (
        <Layout>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    items?.map(item => {
                        return < Card
                            key={item.id}
                            data={item}
                        />
                    })
                } 
            </div> 
            <ProductDetail></ProductDetail>
        </Layout> 
  )
}

export default Home
