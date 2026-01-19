import React from 'react';
import { Filter, Download, MoreVertical } from 'lucide-react';
import { studentList } from './mockData';

export default function StudentTable({ isDarkMode }) {
  const cardClass = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100';
  const textClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const subTextClass = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const rowHoverClass = isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50';

  return (
    <div className={`p-6 rounded-xl shadow-sm border ${cardClass}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h3 className={`text-lg font-bold ${textClass}`}>Student Progress</h3>
        <div className="flex gap-2">
          <button className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg border transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600 text-white' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-600'}`}>
            <Filter size={16} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
              <th className={`py-3 px-4 text-sm font-semibold ${subTextClass}`}>Student</th>
              <th className={`py-3 px-4 text-sm font-semibold ${subTextClass}`}>Course</th>
              <th className={`py-3 px-4 text-sm font-semibold ${subTextClass}`}>Progress</th>
              <th className={`py-3 px-4 text-sm font-semibold ${subTextClass}`}>Action</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-100'}`}>
            {studentList.map((student) => (
              <tr key={student.id} className={`transition-colors ${rowHoverClass}`}>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img src={student.img} alt={student.name} className="w-8 h-8 rounded-full object-cover" />
                    <span className={`font-medium ${textClass}`}>{student.name}</span>
                  </div>
                </td>
                <td className={`py-3 px-4 text-sm ${subTextClass}`}>{student.course}</td>
                <td className="py-3 px-4">
                   <div className="flex items-center gap-3">
                     <div className={`w-24 rounded-full h-1.5 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                       <div className={`h-1.5 rounded-full ${student.progress === 100 ? 'bg-green-500' : 'bg-indigo-500'}`} style={{ width: `${student.progress}%` }}></div>
                     </div>
                     <span className={`text-xs ${subTextClass}`}>{student.progress}%</span>
                   </div>
                </td>
                <td className="py-3 px-4">
                  <button className="text-gray-400 hover:text-indigo-500 transition-colors"><MoreVertical size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}