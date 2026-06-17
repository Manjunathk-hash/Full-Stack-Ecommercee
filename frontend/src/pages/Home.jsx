import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Tilt from 'react-parallax-tilt';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pb-12">
      <div className="flex flex-col xl:flex-row gap-8 mt-2">
        
        {/* Massive 3D Hero Banner (Left Side) */}
        <div className="xl:w-1/3 flex-shrink-0">
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.02}
            transitionSpeed={2500}
            className="relative h-[600px] xl:h-[800px] w-full rounded-3xl overflow-hidden border border-red-900/30 shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:shadow-[0_0_50px_rgba(239,68,68,0.4)] transition-all duration-500 group"
          >
            <img 
              src="/groc_hero_banner.png" 
              alt="GROC 3D Hero" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 pointer-events-none"></div>
          </Tilt>
        </div>

        {/* Product Grid (Right Side) */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-gray-100 tracking-wider">TRENDING <span className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">NOW</span></h2>
            <button className="text-red-500 font-bold text-sm tracking-widest hover:text-red-400 transition-colors uppercase border border-red-500/30 px-4 py-1.5 rounded-full hover:bg-red-500/10 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]">View All</button>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Home;
