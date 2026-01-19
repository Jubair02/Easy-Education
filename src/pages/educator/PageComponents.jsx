import React from 'react';
import { FileText, MessageSquare, Save, Bell, Plus, Upload } from 'lucide-react';

// We import the charts/stats here for the Dashboard view
import StatsCards from './StatsCards';
import RevenueChart from './RevenueChart';
import { recentActivity } from './mockData';

// --- 1. DASHBOARD HOME (Clean Version) ---
// This is the "Overview" page. We removed the CourseList and StudentTable from here.
export function DashboardHome({ isDarkMode }) {
  return (
    <div className="space-y-8">
      {/* Top Stats Row */}
      <StatsCards isDarkMode={isDarkMode} />

      {/* Main Content: Chart + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Revenue Chart */}
        <RevenueChart isDarkMode={isDarkMode} />

        {/* Right: Quick Actions & Activity */}
        <div className="space-y-6">
          
          {/* Quick Actions Panel */}
          <div className="bg-indigo-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10 blur-xl"></div>
            <h3 className="font-bold text-lg mb-1 relative z-10">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4 relative z-10 mt-6">
              <button className="flex flex-col items-center bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all border border-white/10">
                <Plus size={24} className="mb-2"/>
                <span className="text-sm">New Course</span>
              </button>
              <button className="flex flex-col items-center bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all border border-white/10">
                <Upload size={24} className="mb-2"/>
                <span className="text-sm">Upload</span>
              </button>
            </div>
          </div>

          {/* Recent Activity List */}
          <div className={`p-6 rounded-xl shadow-sm border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <h3 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Recent Activity</h3>
            <div className="space-y-6">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-4 relative">
                  {/* Vertical Line */}
                  {index !== recentActivity.length - 1 && (
                    <div className={`absolute left-[11px] top-8 bottom-[-24px] w-0.5 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}></div>
                  )}
                  {/* Dot */}
                  <div className="mt-1 w-6 h-6 rounded-full bg-indigo-500/20 border-2 border-indigo-500 z-10"></div>
                  {/* Text */}
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-semibold">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- 2. ASSIGNMENTS PAGE ---
export function AssignmentsPage({ isDarkMode }) {
  const tasks = [
    { id: 1, title: "React Component Lifecycle Essay", course: "React for Beginners", due: "Tomorrow", status: "Pending Review" },
    { id: 2, title: "API Integration Project", course: "Advanced Node.js", due: "3 days ago", status: "Graded" },
    { id: 3, title: "UI Mockups Submission", course: "UI/UX Design", due: "In 2 days", status: "New" },
  ];

  return (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Assignments</h2>
      <div className={`rounded-xl border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        {tasks.map((task) => (
          <div key={task.id} className={`p-4 border-b last:border-0 flex justify-between items-center ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg"><FileText size={20}/></div>
              <div>
                <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{task.title}</h4>
                <p className="text-sm text-gray-500">{task.course} • Due: {task.due}</p>
              </div>
            </div>
            <span className={`px-3 py-1 text-xs rounded-full ${task.status === 'New' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- 3. MESSAGES PAGE ---
export function MessagesPage({ isDarkMode }) {
  return (
    <div className={`h-[500px] flex items-center justify-center rounded-xl border border-dashed ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-gray-50'}`}>
      <div className="text-center">
        <MessageSquare size={48} className="mx-auto text-gray-400 mb-4" />
        <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>No New Messages</h3>
        <p className="text-gray-500">Your inbox is completely caught up!</p>
      </div>
    </div>
  );
}

// --- 4. SETTINGS PAGE ---
export function SettingsPage({ isDarkMode }) {
  const inputClass = `w-full p-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`;
  
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Account Settings</h2>
      
      <div className={`p-6 rounded-xl border space-y-4 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Profile Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1 text-gray-500">First Name</label>
            <input type="text" className={inputClass} defaultValue="Alex" />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-500">Last Name</label>
            <input type="text" className={inputClass} defaultValue="Morgan" />
          </div>
          <div className="col-span-2">
            <label className="block text-sm mb-1 text-gray-500">Email Address</label>
            <input type="email" className={inputClass} defaultValue="alex.morgan@edudash.com" />
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Save size={18} /> Save Changes
        </button>
      </div>

      <div className={`p-6 rounded-xl border flex items-center justify-between ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="flex items-center gap-3">
          <Bell size={20} className="text-gray-400" />
          <div>
            <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Notifications</h4>
            <p className="text-xs text-gray-500">Receive email updates about student progress</p>
          </div>
        </div>
        <div className="w-10 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
          <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}