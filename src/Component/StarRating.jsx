import React from 'react';

export default function StarRating({
  rating,
  ratingCount,
  color = 'gold',
  size = 14,
}) {
  return (
    <div className="flex items-center mb-2" style={{ color }}>
      {[...Array(5)].map((_, index) => (
        <span key={index} style={{ fontSize: size }}>
          {index < Math.floor(rating ?? 4) ? '★' : '☆'}
        </span>
      ))}
      <span className="ml-2 text-white" style={{ fontSize: size }}>
        ({ratingCount ?? 10} reviews)
      </span>
    </div>
  );
}
