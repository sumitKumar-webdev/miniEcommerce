import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {

  return (
    <div className="flex flex-col items-center select-none justify-center h-64 space-y-4">
      <div className="flex space-x-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 rounded-full bg-yellow-400"
            transition={{
                duration: 0.6,
               yoyo: true,
                repeat: Infinity,
                ease: 'easeOut',
                delay: `${i*0.1}`
            }}
            animate={{
              y: ['0%', '-50%', '0%'],
            }}
          />
        ))}
      </div>
      <p className="text-yellow-300 font-semibold tracking-wide">Loading Products...</p>
    </div>
  );
}
