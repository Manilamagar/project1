import React from 'react';

const Home = () => {

    const [expandedMenus, setExpandedMenus] = useState({});

    const toggleMenu = (menuKey) => {
        setExpandedMenus(prev => ({
            ...prev,
            [menuKey]: !prev[menuKey]
        }));
    };

    const menuItems = [
        {
            key: 'academic',
            title: 'Academic',
            icon: '🎓',
            hasSubmenu: true
        },
        {
            key: 'notifications',
            title: 'Notifications',
            icon: '🔔',
            hasSubmenu: true
        },
        {
            key: 'student',
            title: 'Student Management',
            icon: '👨‍🎓',
            hasSubmenu: true
        },
        {
            key: 'staff',
            title: 'Staff Management',
            icon: '👥',
            hasSubmenu: true
        },
        {
            key: 'attendance',
            title: 'Attendance Management',
            icon: '📅',
            hasSubmenu: false
        },
        {
            key: 'exam',
            title: 'Exam Management',
            icon: '📝',
            hasSubmenu: true
        },
        {
            key: 'library',
            title: 'Library Management',
            icon: '📚',
            hasSubmenu: true
        },
        {
            key: 'admission',
            title: 'Admission Portal',
            icon: '⭐',
            hasSubmenu: true
        },
        {
            key: 'elearning',
            title: 'E-Learning',
            icon: '💻',
            hasSubmenu: true
        },
        {
            key: 'content',
            title: 'Content Management',
            icon: '🌐',
            hasSubmenu: true
        },
        {
            key: 'settings',
            title: 'Settings',
            icon: '⚙️',
            hasSubmenu: true
        },
        {
            key: 'tools',
            title: 'Tools/Extras',
            icon: '🔧',
            hasSubmenu: true
        },
        {
            key: 'account',
            title: 'Account',
            icon: '👤',
            hasSubmenu: true
        }
    ];

    return (
        <>
           <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="flex flex-col w-72 bg-white shadow-lg">
                {/* College Header */}
                <div className="flex flex-col items-center p-6 bg-gradient-to-b from-green-600 to-green-700 text-white">
                    <div className="w-16 h-16 mb-3 bg-white rounded-full flex items-center justify-center">
                        <span className="text-2xl">🎓</span>
                    </div>
                    <h2 className="text-lg font-bold text-center">ITAHARI NAMUNA COLLEGE</h2>
                    <div className="mt-2 text-sm opacity-90">
                        <div>Client ID: N-0195</div>
                        <div>Academic Year: 2082</div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="p-4 border-b">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search menus" 
                            className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        <div className="absolute right-3 top-2.5 text-gray-400">🔍</div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 overflow-y-auto py-4">
                    {menuItems.map((item) => (
                        <div key={item.key} className="mb-1">
                            <button
                                onClick={() => item.hasSubmenu && toggleMenu(item.key)}
                                className="w-full flex items-center justify-between px-6 py-3 text-left text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors duration-200"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-lg">{item.icon}</span>
                                    <span className="font-medium">{item.title}</span>
                                </div>
                                {item.hasSubmenu && (
                                    <span className={`transition-transform duration-200 ${expandedMenus[item.key] ? 'rotate-90' : ''}`}>
                                        ▶
                                    </span>
                                )}
                            </button>
                            {item.hasSubmenu && expandedMenus[item.key] && (
                                <div className="bg-gray-50 border-l-2 border-green-200 ml-6">
                                    <div className="py-2 px-6 text-sm text-gray-600 hover:text-green-600 hover:bg-white cursor-pointer transition-colors">
                                        {item.title} Overview
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Top Header */}
                <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-6">
                    <div className="flex items-center">
                        <div className="relative">
                            <input 
                                className="border border-gray-300 h-10 w-96 px-5 pr-12 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                                type="search" 
                                placeholder="Search" 
                            />
                            <button className="absolute right-3 top-3 text-gray-400">
                                🔍
                            </button>
                        </div>
                    </div>

                    {/* Header Actions */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-green-600 transition-colors text-xl">
                            🔔
                        </button>
                        <button className="text-gray-600 hover:text-green-600 transition-colors text-xl">
                            ⚙️
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                            <span className="text-xl">🚪</span>
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 overflow-auto p-6">
                    <div className="max-w-4xl">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to College Management System!</h1>
                        <p className="text-gray-600 mb-8">Manage all aspects of Itahari Namuna College efficiently with our comprehensive dashboard.</p>
                        
                        {/* Dashboard Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <div className="flex items-center">
                                    <div className="p-3 bg-blue-100 rounded-lg text-2xl">
                                        👨‍🎓
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm text-gray-600">Total Students</p>
                                        <p className="text-2xl font-semibold text-gray-800">1,234</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <div className="flex items-center">
                                    <div className="p-3 bg-green-100 rounded-lg text-2xl">
                                        👥
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm text-gray-600">Staff Members</p>
                                        <p className="text-2xl font-semibold text-gray-800">89</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <div className="flex items-center">
                                    <div className="p-3 bg-yellow-100 rounded-lg text-2xl">
                                        📚
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm text-gray-600">Library Books</p>
                                        <p className="text-2xl font-semibold text-gray-800">5,678</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <div className="flex items-center">
                                    <div className="p-3 bg-purple-100 rounded-lg text-2xl">
                                        🏢
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm text-gray-600">Active Courses</p>
                                        <p className="text-2xl font-semibold text-gray-800">24</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity Section */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        📝
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">New exam schedule published</p>
                                        <p className="text-xs text-gray-600">2 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        👨‍🎓
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">25 new student admissions</p>
                                        <p className="text-xs text-gray-600">1 day ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                                        📚
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">Library system updated</p>
                                        <p className="text-xs text-gray-600">2 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
        </>
    );
};

export default Home;