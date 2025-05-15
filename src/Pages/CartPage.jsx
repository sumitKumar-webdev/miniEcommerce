import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decQnty, incQnty, removeFromCart } from "../Redux Store/cartSlice";
import { ShoppingBagIcon } from "lucide-react";


export default function CartPage() {
  const cartProducts = useSelector((state)=>state.cart.products)
  const {totalPrice, totalProducts} = useSelector((state)=>state.cart)
  const dispatch = useDispatch()

  if (totalProducts<1) {
    return(
      <div className="text-white w-full h-screen flex flex-col justify-center items-center lg:text-3xl md:text-2xl text-xl font-bold gap-5">
        <ShoppingBagIcon size={50}/>
        Your Cart is Empty
      </div>
    )
  }
 
  return (
    <div className="max-w-4xl mx-auto p-4 text-white">
      <h2 className="lg:text-2xl md:text-xl font-bold mb-6">Your Cart ({totalProducts} Products)</h2>

      {cartProducts.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row items-center border-b py-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 object-contain mb-2 md:mb-0 md:mr-4"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">₹{item.price}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={()=>dispatch(decQnty(item))}
                className="px-2 py-1 border rounded-l"
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b">
                {item.quantity}
              </span>
              <button
                onClick={() => dispatch(incQnty(item))}
                className="px-2 py-1 border rounded-r"
              >
                +
              </button>
            </div>
           </div>
          <div className="flex flex-col items-end">
            <button
              onClick={() => dispatch(removeFromCart(item))}
              className="text-red-500 mt-2"
            >
              Remove
            </button>
            <p className="text-lg font-semibold mt-2">
              ₹{item.price * item.quantity}
            </p>
          </div>
        </div>
      ))}

      <div className="text-right mt-6">
        <p className="lg:text-xl md:text-lg font-bold">Total: ₹{(totalPrice).toFixed(2)}</p>
        <button className="mt-3 lg:px-6 lg:py-2 px-4 py-1 bg-green-600 text-white rounded shadow hover:bg-green-700 transition">
          Checkout
        </button>
      </div>

    </div>
  );
};

