import React from 'react';
import { statsData } from './mockData';

export default function StatsCards({ isDarkMode }) {
  const cardClass = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100';
  const textClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const subTextClass = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {statsData.map((stat, index) => (
        <div key={index} className={`p-6 rounded-xl shadow-sm border ${cardClass}`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm font-medium ${subTextClass}`}>{stat.title}</p>
              <h3 className={`text-2xl font-bold mt-2 ${textClass}`}>{stat.value}</h3>
            </div>
            <div className={`p-2 rounded-lg ${stat.isPositive ? 'bg-green-100/10 text-green-600' : 'bg-red-100/10 text-red-600'}`}>
              <stat.icon size={20} />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <span className={`text-sm font-medium ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>{stat.change}</span>
            <span className={`text-sm ml-2 ${subTextClass}`}>vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}