import { useContext } from 'react'
import { ShopiCartContext } from '../../Context'
import { XMarkIcon, ShareIcon } from '@heroicons/react/24/solid'
import './styles.css'


const ProductDetail = () => {
    const context = useContext(ShopiCartContext)
    //console.log('PRODUCT TO SHOW:', context.productToShow)

    return (

        <aside className={`${ context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black shadow-xl rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-2 mt-2 ml-2'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <XMarkIcon
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={()=>context.closeProductDetail()} />
            </div>
            <figure className='p-4'>
                <img className='w-full h-full rounded-lg' src={ context.productToShow.images } alt={ context.productToShow.title } />
            </figure>
            <p className='flex flex-row p-1 ml-2'>
                <ShareIcon
                    className='h-4 w-4 text-black cursor-pointer'
                     />
                <span className='font-light text-sm ml-2 '>Share</span>
            </p>
            <p className='flex flex-col p-2 ml-2'>
                <span className='font-medium text-2xl mb-2'> $ {context.productToShow.price}</span>
                <span className='font-medium text-md'>{ context.productToShow.title }</span>
                <span className='font-light text-sm '>{ context.productToShow.description }</span>
            </p>

        </aside>
    )
}
export default ProductDetail