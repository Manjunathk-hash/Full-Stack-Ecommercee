import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Grid, ShoppingBag, User, HeadphonesIcon, RefreshCw } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Categories', path: '/shop', icon: <Grid className="w-5 h-5" /> },
    { name: 'Subscribe', path: '/subscribe', icon: <RefreshCw className="w-5 h-5" /> },
    { name: 'My Orders', path: '/checkout', icon: <ShoppingBag className="w-5 h-5" /> },
    { name: 'Profile', path: '/login', icon: <User className="w-5 h-5" /> },
    { name: 'Support', path: '#', icon: <HeadphonesIcon className="w-5 h-5" /> },
  ];

  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-[#121212]/90 backdrop-blur-xl border-r border-red-900/30 flex flex-col pt-8 pb-12 z-50">
      
      {/* Logo */}
      <Link to="/" className="flex justify-center items-center mb-16">
        <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.4)]">
          <span className="text-3xl font-extrabold text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">G</span>
        </div>
      </Link>

      {/* Nav Items */}
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          // The last item (Support) usually pushed to bottom, but we'll do that via flex below
          if (index === navItems.length - 1) return null;

          return (
            <Link 
              key={index} 
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 group
                ${isActive 
                  ? 'bg-red-500/10 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.15)] border border-red-500/20' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-red-400'
                }
              `}
            >
              <div className={`mr-4 ${isActive ? 'text-red-500' : 'text-gray-500 group-hover:text-red-400'}`}>
                {item.icon}
              </div>
              <span className="font-medium text-sm">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Support (Bottom) */}
      <div className="px-4 mt-auto">
        <Link 
          to={navItems[navItems.length - 1].path}
          className="flex items-center px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-red-400 transition-all duration-300 group"
        >
          <div className="mr-4 text-gray-500 group-hover:text-red-400">
            {navItems[navItems.length - 1].icon}
          </div>
          <span className="font-medium text-sm">{navItems[navItems.length - 1].name}</span>
        </Link>
      </div>

    </div>
  );
};

export default Sidebar;
