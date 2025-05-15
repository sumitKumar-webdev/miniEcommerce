import React, { useEffect, useState } from 'react';
import StarRating from '../Component/StarRating';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux Store/cartSlice';
import { useParams } from 'react-router-dom';
import { newProduct } from '../Redux Store/productSlice';

export default function ProductDetailsPage() {
  const { id } = useParams()
  const [productDetails, setProductDetails] = useState();
  const dispatch = useDispatch();
  const product = useSelector((state)=>state.product.product)


  useEffect( async ()=>{
    try {
       if (productDetails?.id === id) return;
      const response = await fetch(`https://fakestoreapi.com/products${id}`)
              if (!response) {
                 console.log('Error in Fetching data from Api');
                 return                
              }
      const Data = await response.json()
      dispatch(newProduct(Data))
      setProductDetails(Data)
    } catch (error) {
      console.error(error)
    }
   
  },[id])
  

  const testObj = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday essentials in the main compartment.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  // setProductDetails(...testObj)

  return (
    <div className="text-white lg:px-24 md:px-16 sm:px-10 px-5 py-10 flex flex-col md:flex-row gap-10">
      {/* Image Section */}
      <div className="flex-1 bg-white rounded-xl p-5">
        <img
          src={testObj.image}
          alt={testObj.title}
          className="w-full h-[400px] object-contain"
        />
      </div>

      {/* Details Section */}
      <div className="flex-1 bg-slate-800 rounded-xl p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{testObj.title}</h2>
          <p className="text-lg font-semibold text-yellow-300 mb-2">
            ₹ {testObj.price}
          </p>

          {/* Rating */}
          <StarRating rating={testObj.rating.rate} ratingCount={testObj.rating.count} size={18}/>
          
          {/* Description */}
          <p className="text-sm text-gray-200">{testObj.description}</p>
        </div>

        {/* Add to Cart Button */}
        <button
        onClick={()=>dispatch(addToCart(testObj))}
         className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition duration-300 ease-in-out w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
