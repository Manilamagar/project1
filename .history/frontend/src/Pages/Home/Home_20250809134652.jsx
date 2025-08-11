import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  BookOpen, 
  Settings, 
  User, 
  Bell, 
  Search,
  ChevronLeft,
  ChevronRight,
  Plus,
  MoreVertical,
  Menu
} from 'lucide-react';

const INCPustakalaya = () => {
  const [selectedDate, setSelectedDate] = useState(9);
//   const [currentMonth, setCurrentMonth] = useState('Aug');
//   const [currentYear, setCurrentYear] = useState(2025);
  const [activeTab, setActiveTab] = useState('Attendance');

  // Sample data
  const insights = {
    activeStudents: 762,
    iosDevice: 259,
    androidDevice: 1873
  };

  const notifications = {
    general: 1,
    custom: 430,
    staff: 0
  };

  const todayBirthday = {
    name: "ROHAN BISHWOKARMA",
    class: "12-Management 'Business-A'"
  };

  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const sidebarItems = [
    { name: 'Academic', icon: BookOpen, active: false },
    { name: 'Student Management', icon: Users, active: false },
    { name: 'Library Management', icon: BookOpen, active: true },
    { name: 'E-Learning', icon: BookOpen, active: false },
    { name: 'Settings', icon: Settings, active: false },
    { name: 'Tools/Extras', icon: MoreVertical, active: false },
    { name: 'Account', icon: User, active: false },
  ];

  const attendanceTabs = ['Attendance', 'Assignments', 'Homework', 'Library'];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r">
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="font-semibold text-lg">INC Pustakalaya</h1>
              <p className="text-sm text-gray-500">Secondary School</p>
              <p className="text-xs text-gray-400">Client ID: N-0191</p>
              <p className="text-xs text-gray-400">Academic Year: 2082</p>
            </div>
          </div>
          
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Search menus" 
              className="w-full px-3 py-2 border rounded-md text-sm"
            />
          </div>
          
          <nav className="space-y-1">
            {sidebarItems.map((item, index) => (
              <div key={index} className={`flex items-center justify-between px-3 py-2 rounded-md text-sm cursor-pointer ${
                item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`}>
                <div className="flex items-center space-x-3">
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
                <ChevronLeft className="w-4 h-4" />
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Menu className="w-6 h-6 text-gray-500" />
              <h2 className="text-xl font-semibold">Dashboard</h2>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-500" />
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span className="text-sm font-medium">GPNREJINA</span>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Content */}
            <div className="col-span-8">
              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-medium mb-4">Quick Links</h3>
                <div className="text-center py-8 text-gray-500">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                      <Plus className="w-6 h-6" />
                    </div>
                  </div>
                  <p>Please Pin Some Items</p>
                </div>
              </div>

              {/* Overview Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Overview of</span>
                    <select className="border rounded px-3 py-1 text-sm">
                      <option>Attendance</option>
                      <option>Assignments</option>
                      <option>Library</option>
                    </select>
                  </div>
                </div>
                
                <div className="text-center py-8 text-gray-500">
                  <h3 className="text-xl font-medium text-gray-400">No data</h3>
                </div>
                
                <div className="flex justify-center space-x-8 mt-6">
                  <div className="text-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-2xl font-bold text-gray-400">0</div>
                  </div>
                  <div className="text-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-2xl font-bold text-gray-400">0</div>
                  </div>
                  <div className="text-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-2xl font-bold text-gray-400">0</div>
                  </div>
                </div>
              </div>

              {/* Attendance Table */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-6">
                    {attendanceTabs.map((tab) => (
                      <button
                        key={tab}
                        className={`pb-2 text-sm font-medium ${
                          activeTab === tab 
                            ? 'text-blue-600 border-b-2 border-blue-600' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <select className="border rounded px-3 py-1 text-sm">
                      <option>Daily</option>
                    </select>
                    <span className="text-sm text-gray-600">2025-08-09</span>
                    <button className="text-sm text-blue-600">View All</button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-left">
                        <th className="pb-3 text-sm font-medium text-gray-600">S.N.</th>
                        <th className="pb-3 text-sm font-medium text-gray-600">TEACHER</th>
                        <th className="pb-3 text-sm font-medium text-gray-600">CLASS</th>
                        <th className="pb-3 text-sm font-medium text-gray-600">PRESENT</th>
                        <th className="pb-3 text-sm font-medium text-gray-600">ABSENT</th>
                        <th className="pb-3 text-sm font-medium text-gray-600">LATE</th>
                        <th className="pb-3 text-sm font-medium text-gray-600">TIME</th>
                        <th className="pb-3 text-sm font-medium text-gray-600">PERCENTAGE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="8" className="py-8 text-center text-gray-500">
                          Data Is Empty
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-4">
              {/* Insights */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-medium mb-4">Insights</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Users className="w-8 h-8 text-green-500" />
                      <div>
                        <p className="text-sm text-gray-600">Active Students A/c</p>
                        <p className="text-2xl font-bold">{insights.activeStudents}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">iOS Device</p>
                        <p className="text-2xl font-bold">{insights.iosDevice}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Android Device</p>
                        <p className="text-2xl font-bold">{insights.androidDevice}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Calendar & Events</h3>
                  <button className="text-blue-600 text-sm">Create event</button>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <select className="border rounded px-2 py-1 text-sm">
                      <option>{currentMonth}</option>
                    </select>
                    <select className="border rounded px-2 py-1 text-sm">
                      <option>{currentYear}</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="text-xs text-gray-500 text-center p-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day) => (
                    <button
                      key={day}
                      className={`p-2 text-sm text-center rounded ${
                        day === selectedDate 
                          ? 'bg-blue-600 text-white' 
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setSelectedDate(day)}
                    >
                      {day}
                    </button>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Today's Events</h4>
                  <div className="bg-blue-50 p-3 rounded text-center text-sm text-blue-600">
                    No Events Today
                  </div>
                  
                  <h4 className="font-medium mt-4 mb-2">Upcoming Events</h4>
                  <div className="bg-purple-50 p-3 rounded text-center text-sm text-purple-600">
                    No Upcoming Events
                  </div>
                </div>
              </div>

              {/* Birthdays & Notifications */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Birthdays</h3>
                  <button className="text-blue-600 text-sm">View All</button>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Student</h4>
                  <p className="text-sm">
                    <span className="font-medium">{todayBirthday.name}</span>
                    <span className="text-gray-600"> from class </span>
                    <span className="font-medium">{todayBirthday.class}</span>
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Staff</h4>
                  <p className="text-sm text-gray-500">No Birthdays Today</p>
                </div>
              </div>

              {/* Notifications */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Notification</h3>
                  <div className="flex items-center space-x-2">
                    <select className="border rounded px-2 py-1 text-sm">
                      <option>This Month</option>
                    </select>
                    <button className="text-blue-600 text-sm">View All</button>
                  </div>
                </div>
                
                <div className="w-32 h-32 mx-auto mb-4">
                  <div className="relative w-full h-full">
                    <svg className="transform -rotate-90 w-full h-full">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="none"
                        stroke="#f3f4f6"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="8"
                        strokeDasharray="283"
                        strokeDashoffset="50"
                      />
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">General Notification</span>
                    </div>
                    <span className="font-medium">{notifications.general}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Custom Notification</span>
                    </div>
                    <span className="font-medium">{notifications.custom}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Staff Notification</span>
                    </div>
                    <span className="font-medium">{notifications.staff}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t px-6 py-3">
          <p className="text-sm text-gray-500 text-center">
            Copyright © 2024 INC Pustakalaya . All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default INCPustakalaya;