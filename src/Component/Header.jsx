import { ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";

export default function Header() {
  // fetching total no. products from cart
  const  totalProducts  = useSelector((state)=>state.cart.totalProducts)

  
  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          Logo
        </div>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-blue-200 transition">Home</a>
          <a href="#about" className="hover:text-blue-200 transition">About</a>
          <a href="#product" className="hover:text-blue-200 transition">Product</a>
          <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
        </nav>
        
        {/* cart Icon */}
        <div className="flex gap-1 items-center relative group cursor-pointer">
          <ShoppingBag size={25} className="group-hover:text-[#bdccff] transition-colors" />
          <span className="group-hover:text-[#bdccff]">Cart</span>
          {/* no. of products in cart */}
          <span className="h-4 w-4 absolute text-xs left-4 -top-1 flex justify-center rounded-full bg-red-500">{totalProducts}</span>
        </div>
      </div>
    </header>
  );
}
