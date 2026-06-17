import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { Plus } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.02}
      transitionSpeed={2000}
      className="bg-[#121212] rounded-[24px] p-4 shadow-sm border border-red-900/30 hover:border-red-500/80 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-300 flex flex-col h-full group"
    >
      <div className="relative pt-[100%] bg-[#1a1a1a] rounded-2xl overflow-hidden mb-4 border border-white/5">
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-contain p-6 mix-blend-screen opacity-90 group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-sm font-bold text-gray-100 line-clamp-2 mb-1 flex-1 tracking-wide">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-black text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
            ${(product.price / 80).toFixed(2)} {/* Converting mock INR to mock USD for the premium look */}
          </span>
          <button 
            onClick={handleAddToCart}
            className="border border-red-500/50 text-red-400 px-4 py-1.5 rounded-full hover:bg-red-500 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all duration-300 active:scale-95 text-xs font-bold uppercase tracking-wider"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Tilt>
  );
};

export default ProductCard;
