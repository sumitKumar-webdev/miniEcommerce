import React from 'react';
import StarRating from './StarRating';

export default function ProductCard({
  title,
  img,
  price,
  rCount,
  rating,
  className
}) {
  return (
    // Container
    <div className={`w-72 lg:min-h-[380px] mt-5 p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${className}`}>
      {/* Image Section */}
      <div className="h-52 overflow-hidden group">
        <img
          src={img ?? 'testImg.jpg'}
          alt={title}
          loading='lazy'
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-base font-semibold text-gray-800 line-clamp-2">{title??'ABCD'}</h2>

        {/* Price */}
        <div className="lg:text-lg md:text-base sm:text-base font-bold text-green-600">₹{price??100}</div>

        {/* Rating */}
       <StarRating rating={rating} ratingCount={rCount} size={15}/>

      </div>
    </div>
  );
}
