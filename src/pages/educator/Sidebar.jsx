import React from 'react';
import { LayoutDashboard, BookOpen, Users, FileText, BarChart2, MessageSquare, Settings, X } from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: BookOpen, label: "My Courses" },
  { icon: Users, label: "Students" },
  { icon: FileText, label: "Assignments" },
  { icon: BarChart2, label: "Analytics" },
  { icon: MessageSquare, label: "Messages" },
  { icon: Settings, label: "Settings" },
];

// Added `activeTab` and `setActiveTab` props
export default function Sidebar({ isOpen, onClose, isDarkMode, activeTab, setActiveTab }) {
  const bgClass = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50';
  const activeClass = 'bg-indigo-600/10 text-indigo-500';

  return (
    <aside className={`fixed inset-y-0 left-0 z-30 w-64 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0 border-r ${bgClass} ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className={`flex items-center justify-between h-16 px-6 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Easy-Edu</span>
        </div>
        <button onClick={onClose} className="lg:hidden text-gray-500">
          <X size={24} />
        </button>
      </div>

      <nav className="p-4 space-y-1">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(item.label);
              if (window.innerWidth < 1024) onClose(); // Close sidebar on mobile after click
            }}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors group ${activeTab === item.label ? activeClass : textClass}`}
          >
            <item.icon size={20} className={`mr-3 ${activeTab === item.label ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'}`} />
            {item.label}
          </button>
        ))}
      </nav>
      
      {/* Profile Section */}
      <div className={`absolute bottom-0 w-full p-4 border-t ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-100 bg-white'}`}>
        <div className="flex items-center gap-3">
           <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="w-10 h-10 rounded-full border border-gray-200" />
           <div>
             <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Alex Morgan</p>
             <p className="text-xs text-gray-500">Lead Instructor</p>
           </div>
        </div>
      </div>
    </aside>
  );
}