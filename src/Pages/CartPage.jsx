import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decQnty, incQnty, removeFromCart } from "../Redux Store/cartSlice";

const sampleCart = [
  {
    id: 1,
    title: "T-shirt",
    price: 299,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    quantity: 2,
    message: "",
  },
  {
    id: 2,
    title: "Silver Bracelet",
    price: 695,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    quantity: 1,
    message: "",
  },
];


export default function CartPage() {
  const [cart, setCart] = useState(sampleCart);
  const cartProducts = useSelector((state)=>state.cart.products)
  const {totalPrice, totalProducts} = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  console.log(cartProducts);
  

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateMessage = (id, msg) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, message: msg } : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-4 text-white">
      <h2 className="text-2xl font-bold mb-6">Your Cart ({totalProducts} Products)</h2>

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
        <p className="text-xl font-bold">Total: ₹{(totalPrice).toFixed(2)}</p>
        <button className="mt-3 px-6 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition">
          Checkout
        </button>
      </div>
    </div>
  );
};

