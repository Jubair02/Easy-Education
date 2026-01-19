import React from 'react';
import { Menu, Search, Bell, Moon, Sun } from 'lucide-react';

export default function Header({ onMenuClick, isDarkMode, toggleTheme }) {
  const bgClass = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const iconClass = isDarkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100';

  return (
    <header className={`flex-none h-16 border-b px-6 flex items-center justify-between z-10 ${bgClass}`}>
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className={`lg:hidden p-1 rounded-md ${iconClass}`}>
          <Menu size={24} />
        </button>
        <h2 className={`text-xl font-semibold hidden sm:block ${textClass}`}>Dashboard</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className={`pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 w-64 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-200 text-gray-900'}`}
          />
        </div>
        
        <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${iconClass}`}>
          {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
        </button>

        <button className={`relative p-2 rounded-full transition-colors ${iconClass}`}>
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
      </div>
    </header>
  );
}