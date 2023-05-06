import { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

const Home = () => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const url = 'https://api.escuelajs.co/api/v1/products'
        fetch(url)
            .then(response => response.json())
            .then(data => setItems(data))
            .catch((e) => console.log(e))
        
    }, []);

    return (
        <Layout>
            {
                items?.map(() => {
                    return < Card/>
                })
            }
        </Layout> 
  )
}

export default Home
