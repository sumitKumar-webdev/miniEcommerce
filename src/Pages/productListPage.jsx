import React, { useEffect, useState } from 'react'
import ProductCard from '../Component/productCard'

export default function ProductListPage() {
    const [products, setProducts] =useState([])


    useEffect(()=>{
      // dont run if therse is already products in state
      if( products.length >0) return;

        const fetchProducts = async () => {
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
        }
          fetchProducts()
        
          
           
    },[])
  
    
  return (
    <div className='px-24 py-5 mb-20'>
      <h2 className='text-white text-center text-3xl font-bold tracking-widest'>All Our Products</h2>

      {/* All products in grid */}
      <div className='grid lg:grid-cols-4 md:grid-col-3 sm:grid-cols-2 mt-10 lg:gap-5 md:gap-7 sm:gap-10'>
        {products.map((data, index)=>(
          <div key={index} className=''>
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
