import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

// Import our individual page components
import { 
  DashboardHome, 
  AssignmentsPage, 
  MessagesPage, 
  SettingsPage 
} from './PageComponents';

// Import existing components that serve as full pages
import CourseList from './CourseList';
import StudentTable from './StudentTable';
import RevenueChart from './RevenueChart';

export default function Educator() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // 1. ADD STATE FOR NAVIGATION
  const [activeTab, setActiveTab] = useState("Dashboard");

  const mainBg = isDarkMode ? 'bg-gray-900' : 'bg-gray-50';
  const mainText = isDarkMode ? 'text-white' : 'text-gray-900';

  // 2. LOGIC TO RENDER THE CORRECT PAGE
  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <DashboardHome isDarkMode={isDarkMode} />;
      case "My Courses":
        return <CourseList isDarkMode={isDarkMode} />;
      case "Students":
        return <StudentTable isDarkMode={isDarkMode} />;
      case "Assignments":
        return <AssignmentsPage isDarkMode={isDarkMode} />;
      case "Analytics":
        // Reusing the chart, but you might want a dedicated AnalyticsPage later
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Analytics Overview</h2>
            <RevenueChart isDarkMode={isDarkMode} />
          </div>
        );
      case "Messages":
        return <MessagesPage isDarkMode={isDarkMode} />;
      case "Settings":
        return <SettingsPage isDarkMode={isDarkMode} />;
      default:
        return <DashboardHome isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className={`flex h-screen font-sans overflow-hidden transition-colors duration-300 ${mainBg} ${mainText}`}>
      
      {/* Mobile Overlay */}
      {isSidebarOpen && <div className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsSidebarOpen(false)} />}

      {/* 3. PASS PROPS TO SIDEBAR */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        isDarkMode={isDarkMode} 
        activeTab={activeTab}       // Pass current tab
        setActiveTab={setActiveTab} // Pass function to change tab
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setIsSidebarOpen(true)} isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {/* 4. RENDER THE CONTENT DYNAMICALLY */}
          {renderContent()}
        </main>
      </div>
    </div>
  );
}