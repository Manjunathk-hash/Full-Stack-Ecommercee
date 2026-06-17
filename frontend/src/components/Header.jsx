import React, { useState } from 'react';
import { Search, Bell, User } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/shop?q=${keyword}`);
    }
  };

  return (
    <header className="h-20 w-full flex items-center justify-between px-8 bg-transparent sticky top-0 z-40">
      
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl">
        <form onSubmit={submitHandler} className="relative flex items-center w-full h-12 rounded-2xl bg-[#1a1a1a] border border-red-900/20 shadow-inner overflow-hidden group focus-within:border-red-500/50 focus-within:shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all duration-300">
          <button type="submit" className="grid place-items-center h-full w-12 text-gray-500 group-focus-within:text-red-500 hover:text-red-400">
            <Search className="w-5 h-5" />
          </button>
          <input
            className="peer h-full w-full outline-none text-sm text-gray-300 pr-2 bg-transparent placeholder-gray-600"
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            id="search"
            placeholder="Search groceries..." /> 
        </form>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-6 ml-8">
        <button className="relative text-gray-400 hover:text-red-500 transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0a0a0a]"></span>
        </button>
        
        <div className="flex items-center space-x-3 bg-[#1a1a1a] border border-red-900/20 py-2 px-4 rounded-full cursor-pointer hover:border-red-500/50 hover:shadow-[0_0_10px_rgba(239,68,68,0.2)] transition-all">
          <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
            <User className="w-4 h-4 text-red-500" />
          </div>
          <span className="text-sm font-medium text-gray-300 hidden sm:block">
            {userInfo ? userInfo.name : 'User Profile'}
          </span>
        </div>
      </div>

    </header>
  );
};

export default Header;
