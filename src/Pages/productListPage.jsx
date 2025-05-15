import React, { useEffect, useState } from 'react'
import ProductCard from '../Component/productCard'
import { useNavigate } from 'react-router-dom'
import Loader from '../Component/Loader'

export default function ProductListPage() {
    const [products, setProducts] =useState([])
      const [loading, setLoading ] = useState(false)
    const navigate = useNavigate()


    useEffect(()=>{

        const fetchProducts = async () => {
          setLoading(true)
          try {
             const response = await fetch('https://fakestoreapi.com/products')

            if (!response) {
                console.log('Error in Fetching data from Api');
                return                
            }
            const Data = await response.json()
            setProducts(Data)
           
            }
           catch (error) {
            console.log(error);
            
          }
          setLoading(false)
        }
          fetchProducts()
        
          
           
    },[])

  if (loading) {
    return (
    <div className='h-screen w-full flex justify-center items-center'>
      <Loader />
      </div>
      
    )
  }
    
  return (
    <div className='px-24 py-5 mb-20'>
      <h2 className='text-white text-center lg:text-3xl md:text-2xl text-lg font-bold tracking-widest'>All Our Products</h2>

      {/* All products in grid */}
      <div className='grid lg:grid-cols-4 md:grid-col-3 sm:grid-cols-2 mt-10 lg:gap-5 md:gap-7 sm:gap-10 place-items-center place-content-center'>
        {products.map((data, index)=>(
          <div key={index}  onClick={()=>navigate(`product/${data.id}`)}>
        <ProductCard 
        title={data.title}
        img = {data.image}
        price={data.price}
        rCount = {data.rating.count}
        rating = { data.rating.rate}
                   />
          </div>
        ))}
      </div>


    </div>
  )
}
