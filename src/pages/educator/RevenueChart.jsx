import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { analyticsData } from './mockData';

export default function RevenueChart({ isDarkMode }) {
  const cardClass = isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-100 text-gray-900';

  return (
    <div className={`lg:col-span-2 p-6 rounded-xl shadow-sm border ${cardClass}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold">Revenue Analytics</h3>
        <select className={`border text-sm rounded-lg p-2 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={analyticsData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#374151' : '#f0f0f0'} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: isDarkMode ? '#9CA3AF' : '#6B7280', fontSize: 12}} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: isDarkMode ? '#9CA3AF' : '#6B7280', fontSize: 12}} tickFormatter={(value) => `$${value}`} />
            <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#1F2937' : '#fff', borderColor: isDarkMode ? '#374151' : '#E5E7EB', borderRadius: '8px', color: isDarkMode ? '#fff' : '#000' }} itemStyle={{ color: '#6366f1' }} />
            <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}