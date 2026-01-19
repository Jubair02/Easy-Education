import React from 'react';
import { Users } from 'lucide-react';
import { coursesData } from './mockData';

export default function CourseList({ isDarkMode }) {
  const cardClass = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100';
  const textClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const subTextClass = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-bold ${textClass}`}>My Courses</h3>
        <a href="#" className="text-sm font-medium text-indigo-500 hover:text-indigo-600">View All →</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map((course, index) => (
          <div key={index} className={`rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-all group ${cardClass}`}>
            <div className="relative h-48 overflow-hidden">
              <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 right-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${course.status === 'Published' ? 'bg-green-500/20 text-white' : 'bg-gray-500/50 text-white'}`}>
                  {course.status}
                </span>
              </div>
            </div>
            
            <div className="p-5">
              <h4 className={`font-bold text-lg mb-2 line-clamp-1 ${textClass}`}>{course.title}</h4>
              <div className={`flex items-center justify-between text-sm mb-4 ${subTextClass}`}>
                <div className="flex items-center gap-1"><Users size={16} /><span>{course.students} Students</span></div>
                <div className="flex items-center gap-1"><span className="text-yellow-400">★</span><span>{course.rating}</span></div>
              </div>
              
              <div className="mb-4">
                 <div className="flex justify-between text-xs mb-1">
                   <span className={subTextClass}>Completion</span>
                   <span className={`font-medium ${textClass}`}>{course.progress}%</span>
                 </div>
                 <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                   <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <button className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600 text-white' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'}`}>Edit</button>
                <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-900/30">Analytics</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}