import React from 'react';

const MovieCard = ({ image, name, year, duration, ratings }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">name{name}</h2>
        <p className="text-gray-500 text-sm">year{year}</p>
        <p className="text-gray-500 text-sm">2hrs{duration}</p>
        <div className="flex items-center">
          <span className="text-yellow-400 text-lg">★</span>
          <span className="text-gray-700 ml-1">1.1{ratings}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
