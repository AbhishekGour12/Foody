// FeaturedRestaurants.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

export default function FeaturedRestaurants({ title, description }) {
  const data = useSelector(state => state.data.value);
  const navigate = useNavigate();

  function restaurant(id) {
    localStorage.setItem("id", id);
    navigate('/restaurant');
  }

  return (
    <div className="mb-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="flex overflow-x-auto pb-6 -mx-4 px-4">
        {data ? data.map((item, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-72 mr-6 bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
            onClick={() => restaurant(item.id)}
          >
            <div className="h-40 bg-gray-200">
              <img 
                src={`data:${item.type};base64,${item.image}`} 
                className="w-full h-full object-cover"
                alt={item.name}
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-1">{item.name}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-3">4.2 ★</span>
                <span className="mr-3">•</span>
                <span>30-35 min</span>
              </div>
              <p className="text-gray-500 text-sm line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        )) : Array(4).fill().map((_, i) => (
          <div key={i} className="flex-shrink-0 w-72 mr-6 bg-white rounded-xl shadow-md overflow-hidden">
            <Skeleton height={160} />
            <div className="p-4">
              <Skeleton height={20} width="80%" className="mb-2" />
              <Skeleton height={16} width="60%" className="mb-3" />
              <Skeleton height={12} count={2} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}