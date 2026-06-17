import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

const categories = [
  { id: 1, name: 'Fresh Produce', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&q=80' },
  { id: 2, name: 'Staples', image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=500&q=80' },
  { id: 3, name: 'Oils & Spices', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&q=80' },
  { id: 4, name: 'Dairy, Bread & Eggs', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=500&q=80' },
  { id: 5, name: 'Dry Fruits & Cereals', image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500&q=80' },
  { id: 6, name: 'Snacks & Biscuits', image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500&q=80' },
  { id: 7, name: 'Beverages', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80' },
  { id: 8, name: 'Instant & Frozen Foods', image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500&q=80' },
];

const CategoryList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-[#fcf8f2] rounded-3xl p-8 shadow-sm">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <Link to={`/category/${encodeURIComponent(cat.name)}`} key={index} className="flex flex-col items-center group cursor-pointer">
              <Tilt 
                tiltMaxAngleX={15} 
                tiltMaxAngleY={15} 
                scale={1.05} 
                transitionSpeed={2500} 
                className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
              >
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              </Tilt>
              <span className="mt-3 text-xs font-medium text-gray-700 text-center max-w-[80px]">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
