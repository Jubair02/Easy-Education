// src/components/EducatorDashboard/mockData.js
import { Users, BookOpen, TrendingUp, BarChart2 } from 'lucide-react';

export const statsData = [
  { title: "Total Students", value: "1,240", change: "+12%", isPositive: true, icon: Users },
  { title: "Active Courses", value: "8", change: "0%", isPositive: true, icon: BookOpen },
  { title: "Avg Rating", value: "4.6", change: "+0.2", isPositive: true, icon: TrendingUp },
  { title: "Total Earnings", value: "$3,420", change: "+18%", isPositive: true, icon: BarChart2 },
];

export const analyticsData = [
  { name: 'Mon', revenue: 400 }, { name: 'Tue', revenue: 300 },
  { name: 'Wed', revenue: 550 }, { name: 'Thu', revenue: 450 },
  { name: 'Fri', revenue: 700 }, { name: 'Sat', revenue: 600 },
  { name: 'Sun', revenue: 800 },
];

export const coursesData = [
  { title: "React for Beginners", students: 120, status: "Published", rating: 4.8, progress: 100, img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80" },
  { title: "Advanced Node.js API", students: 85, status: "Draft", rating: 0, progress: 40, img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=600&q=80" },
  { title: "UI/UX Design Principles", students: 200, status: "Published", rating: 4.9, progress: 100, img: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&w=600&q=80" },
];

export const studentList = [
  { id: 1, name: "Alice Johnson", course: "React for Beginners", progress: 75, lastActive: "2h ago", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
  { id: 2, name: "Bob Smith", course: "UI/UX Design", progress: 30, lastActive: "1d ago", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80" },
  { id: 3, name: "Charlie Brown", course: "Node.js API", progress: 100, lastActive: "Just now", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" },
  { id: 4, name: "Dana White", course: "React for Beginners", progress: 55, lastActive: "3d ago", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80" },
];

export const recentActivity = [
  { user: "Sarah L.", action: "enrolled in", target: "React Basics", time: "2m ago" },
  { user: "Mike T.", action: "submitted assignment", target: "Node.js API", time: "15m ago" },
  { user: "System", action: "Course approved", target: "UI/UX Design", time: "1h ago" },
];