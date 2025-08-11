import React, { useState } from 'react';
import { Calendar, Bell, Users, BookOpen, GraduationCap, Settings, User, Menu, X, ChevronRight, Apple, Smartphone } from 'lucide-react';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('Aug');
  const [selectedYear, setSelectedYear] = useState('2025');

  const menuItems = [
    { id: 'academic', label: 'Academic', icon: BookOpen },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'student-management', label: 'Student Management', icon: Users },
    { id: 'staff-management', label: 'Staff Management', icon: User },
    { id: 'attendance', label: 'Attendance Management', icon: Calendar },
    { id: 'exam-management', label: 'Exam Management', icon: GraduationCap },
    { id: 'library-management', label: 'Library Management', icon: BookOpen },
    { id: 'admission-portal', label: 'Admission Portal', icon: Users },
    { id: 'e-learning', label: 'E-Learning', icon: BookOpen },
    { id: 'content-management', label: 'Content Management', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'tools', label: 'Tools/Extras', icon: Settings },
    { id: 'account', label: 'Account', icon: User }
  ];

  const generateCalendarDays = () => {
    const days = [];
    const today = 10;
    const daysInMonth = 31;
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          className={`h-8 w-8 flex items-center justify-center text-sm cursor-pointer rounded ${
            i === today 
              ? 'bg-blue-500 text-white' 
              : i === 5 || i === 25 
                ? 'bg-blue-100 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  const DashboardContent = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-2 rounded-md bg-gray-100"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex items-center space-x-4">
          <Bell className="h-5 w-5 text-gray-500" />
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-gray-500" />
            <span className="text-sm font-medium">increjana</span>
            <ChevronRight className="h-4 w-4 text-gray-400 rotate-90" />
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="text-center text-gray-500 py-8">
            <div className="mb-4">
              <svg className="mx-auto h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p>Please Pin Some Items</p>
          </div>
          
          {/* Overview Section */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">Overview of</span>
              <select className="text-sm border rounded px-2 py-1">
                <option>Attendance</option>
                <option>Students</option>
                <option>Staff</option>
              </select>
            </div>
            <div className="text-center py-8 text-gray-500">
              <h4 className="text-lg font-medium">No data</h4>
            </div>
            
            {/* Status Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                <div className="text-2xl font-bold text-gray-400">0</div>
                <div className="text-xs text-gray-500">Present</div>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-2"></div>
                <div className="text-2xl font-bold text-gray-400">0</div>
                <div className="text-xs text-gray-500">Absent</div>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                <div className="text-2xl font-bold text-gray-400">0</div>
                <div className="text-xs text-gray-500">Late</div>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar & Events */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Calendar & Events</h3>
            <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded">
              Create event
            </button>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <select 
              value={selectedMonth} 
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="text-sm border rounded px-2 py-1"
            >
              <option value="Aug">Aug</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
            </select>
            <select 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(e.target.value)}
              className="text-sm border rounded px-2 py-1"
            >
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
              <div key={day} className="text-xs font-medium text-gray-500 text-center py-2">
                {day}
              </div>
            ))}
            {generateCalendarDays()}
          </div>

          {/* Today's Events */}
          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">Today's Events</h4>
            <div className="bg-blue-50 text-blue-600 text-sm p-2 rounded">
              No Events Today
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mt-4">
            <h4 className="font-medium mb-2">Upcoming Events</h4>
            <div className="text-sm text-purple-600 bg-purple-50 p-2 rounded">
              📅 Aug 25 | TU Board Exam Start BCA II & VIII
            </div>
          </div>
        </div>

        {/* Insights & Birthdays */}
        <div className="space-y-6">
          {/* Insights */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Insights</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Active Students A/c</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-2xl font-bold">152</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">iOS Device</span>
                </div>
                <div className="flex items-center">
                  <Apple className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-2xl font-bold">139</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Android Device</span>
                </div>
                <div className="flex items-center">
                  <Smartphone className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-2xl font-bold">937</span>
                </div>
              </div>
            </div>
          </div>

          {/* Birthdays */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Birthdays</h3>
              <button className="text-sm text-blue-500">View All</button>
            </div>
            
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-3">
                <h4 className="font-medium text-sm">Student</h4>
                <p className="text-xs text-gray-600 mt-1">
                  <span className="font-medium">MIN KUMAR BISWAKARMA</span> from class <span className="font-medium">BSW-3rd-Year 'A'</span>
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-3">
                <p className="text-xs text-gray-600">
                  <span className="font-medium">SAMIKSHA BHANDARI</span> from class <span className="font-medium">BCA-3rd-Semester 'A'</span>
                </p>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-sm mb-2">Staff</h4>
                <div className="text-sm text-gray-500 text-center py-4">
                  No Birthdays Today
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b px-6 py-4">
          <div className="flex items-center space-x-6">
            <button className="text-blue-500 border-b-2 border-blue-500 pb-2">Attendance</button>
            <button className="text-gray-500 pb-2">Assignments</button>
            <button className="text-gray-500 pb-2">Homework</button>
            <button className="text-gray-500 pb-2">Library</button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <select className="border rounded px-3 py-2">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
            <input 
              type="date" 
              className="border rounded px-3 py-2" 
              defaultValue="2025-08-10"
            />
            <button className="text-blue-500">View All</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 text-sm font-medium text-gray-600">S.N.</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">TEACHER</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">CLASS</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">PRESENT</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">ABSENT</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">LATE</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">TIME</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">PERCENTAGE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="8" className="text-center py-8 text-gray-500">
                    Data Is Empty
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* College Header */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl">
            🎓
          </div>
          <h1 className="font-bold text-lg mb-1">ITAHARI NAMUNA COLLEGE</h1>
          <div className="text-sm opacity-90">
            <div>Client ID: N-0195</div>
            <div>Academic Year: 2082</div>
          </div>
        </div>

        {/* Search */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Search menus"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Menu Items */}
        <nav className="px-4 pb-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 mb-1 rounded-lg text-left transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <Icon className="h-4 w-4 mr-3" />
                  <span className="text-sm">{item.label}</span>
                </div>
                <ChevronRight className="h-4 w-4" />
              </button>
            );
          })}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <DashboardContent />
        </div>
      </div>

      {/* Notifications Panel */}
      <div className="hidden xl:block w-80 bg-white shadow-lg">
        <div className="p-6 border-b">
          <h3 className="font-semibold">Notification</h3>
          <select className="mt-2 border rounded px-3 py-1 text-sm">
            <option>This Month</option>
            <option>This Week</option>
            <option>Today</option>
          </select>
        </div>
        
        <div className="p-6">
          {/* Notification Chart */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="w-full h-full rounded-full border-8 border-green-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">100%</div>
              </div>
            </div>
          </div>
          
          {/* Notification Legend */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                <span className="text-sm">General Notification</span>
              </div>
              <span className="text-sm font-medium">1</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded mr-2"></div>
                <span className="text-sm">Custom Notification</span>
              </div>
              <span className="text-sm font-medium">0</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                <span className="text-sm">Staff Notification</span>
              </div>
              <span className="text-sm font-medium">0</span>
            </div>
          </div>
        </div>

        {/* Absent Notes */}
        <div className="p-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium">Absent notes of</h4>
            <button className="text-sm text-blue-500">View All</button>
          </div>
          <select className="w-full border rounded px-3 py-2 mb-4">
            <option>Student</option>
            <option>Staff</option>
          </select>
          
          <div className="text-center py-8 text-gray-500">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">S.N.</th>
                  <th className="text-left py-2">NAME</th>
                  <th className="text-left py-2">CLASS</th>
                  <th className="text-left py-2">FROM</th>
                  <th className="text-left py-2">TO</th>
                  <th className="text-left py-2">STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" className="text-center py-4">Data Is Empty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;