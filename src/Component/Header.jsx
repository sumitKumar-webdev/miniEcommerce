import { ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  // fetching total no. products from cart
  const  totalProducts  = useSelector((state)=>state.cart.totalProducts)
  const navigate = useNavigate()

  
  return (
    <header className="bg-blue-600 text-white shadow-md sticky w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div onClick={()=>navigate('/')} className="text-2xl cursor-pointer font-bold tracking-wide">
          Logo
        </div>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <NavLink to={'/'} className="hover:text-blue-200 transition">Home</NavLink>
          <NavLink href="#about" className="hover:text-blue-200 transition">About</NavLink>
          <NavLink href="#product" className="hover:text-blue-200 transition">Product</NavLink>
          <NavLink href="#contact" className="hover:text-blue-200 transition">Contact</NavLink>
        </nav>
        
        {/* cart Icon */}
        <div onClick={()=>navigate('/cart')} className="flex gap-1 items-center relative group cursor-pointer">
          <ShoppingBag size={25} className="group-hover:text-[#bdccff] transition-colors" />
          <span className="group-hover:text-[#bdccff]">Cart</span>

          {/* no. of products in cart */}
          {totalProducts > 0 ? 
          (<span className="h-4 w-4 absolute text-xs left-4 -top-1 flex justify-center rounded-full bg-red-500">{totalProducts}</span>)
           : null}
           
        </div>
      </div>
    </header>
  );
}
