import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-primary-light w-full py-16 px-4 sm:px-6 lg:px-8 mt-4 rounded-3xl overflow-hidden relative max-w-7xl mx-auto flex items-center justify-between">
      <div className="z-10 max-w-xl pl-8">
        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block tracking-wider">
          100% ORGANIC & FRESH
        </span>
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Bring <span className="text-primary">Nature's</span><br />
          Best<br />
          To Your Doorstep
        </h1>
        <p className="text-gray-600 text-sm mb-8">
          Shop the freshest produce, dairy, and everyday essentials.<br />
          Delivered lightning fast with unmatched reliability.
        </p>
        <div className="flex space-x-4">
          <Link to="/shop" className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition shadow-lg shadow-green-200">
            Shop Now &rarr;
          </Link>
          <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-8 rounded-full transition shadow-sm border border-gray-100">
            View Offers
          </button>
        </div>
      </div>
      <div className="hidden md:block z-10 pr-8">
        {/* Placeholder for the grocery basket image */}
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" 
          alt="Grocery Basket" 
          className="w-96 drop-shadow-2xl transform hover:scale-105 transition duration-500"
        />
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 right-40 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    </div>
  );
};

export default Hero;
