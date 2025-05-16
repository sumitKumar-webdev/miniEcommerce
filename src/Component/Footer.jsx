import { motion } from "framer-motion";
export default function Footer() {
  const container = {
  hidden: { opacity: 0, y:50 },
  show: {
    opacity: 1,
    y:0,
    transition: {
      staggerChildren: 0.1
    }
  }
}

 const child = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <motion.div variants={container} initial='hidden' animate='show' className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* About */}
        <motion.div variants={child}>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae quo illum accusantium id dicta asperiores harum, saepe odio deleniti debitis delectus. Quibusdam sequi quo possimus at temporibus aut necessitatibus.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div variants={child}>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#services" className="hover:underline">Product</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={child}>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p>Phone: <a href="tel:+918178830011" className="hover:underline">+91 81788 30011</a></p>
          <p>Email: <a href="mailto:info@example.com" className="hover:underline">info@example.com</a></p>
          <p>Location:  City,  State</p>
        </motion.div>
      </motion.div>

      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Name. All rights reserved.
      </div>
    </footer>
  );
}
