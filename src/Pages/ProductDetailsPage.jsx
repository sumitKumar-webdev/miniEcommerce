import React, { useEffect, useState } from 'react';
import StarRating from '../Component/StarRating';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux Store/cartSlice';
import { useParams } from 'react-router-dom';
import Loader from '../Component/Loader';
import { motion } from "framer-motion";


export default function ProductDetailsPage() {
  const { id } = useParams()
  const [productDetails, setProductDetails] = useState();
  const [loading, setLoading ] = useState(false)
  const dispatch = useDispatch();


 useEffect(() => {
  const fetchProduct = async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      if (!response.ok) {
        console.log('Error in Fetching data from API');
        return;
      }

      const data = await response.json();
      setProductDetails(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
    setLoading(false)
  };

  fetchProduct();
}, [id]);


if (loading) {
  return (
  <div className='h-screen w-full flex justify-center items-center'>
    <Loader />
    </div>
    
  )
}


  return (
    <div className="text-white lg:px-24 md:px-16 sm:px-10 px-5 py-10 flex flex-col md:flex-row gap-10">
      {/* Image Section */}
      <motion.div
      initial={{x:-50, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.2}}
       className="flex-1 bg-white rounded-xl p-5">
        <img
          src={productDetails?.image}
          alt={productDetails?.title}
          className="w-full h-[400px] object-contain"
        />
      </motion.div>

      {/* Details Section */}
      <motion.div initial={{opacity:0, scale:0.7}} animate={{opacity:1, scale:1}} transition={{duration:0.2}} className="flex-1 bg-slate-800 rounded-xl p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{productDetails?.title}</h2>
          <p className="text-lg font-semibold text-yellow-300 mb-2">
            ₹ {productDetails?.price}
          </p>

          {/* Rating */}
          <StarRating rating={productDetails?.rating?.rate} ratingCount={productDetails?.rating?.count} size={18}/>
          
          {/* Description */}
          <p className="text-sm text-gray-200">{productDetails?.description}</p>
        </div>

        {/* Add to Cart Button */}
        <button
        onClick={()=>dispatch(addToCart(productDetails))}
         className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition duration-300 ease-in-out w-full">
          Add to Cart
        </button>
      </motion.div>
    </div>
  );
}
