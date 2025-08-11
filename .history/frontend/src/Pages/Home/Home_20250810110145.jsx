import React from 'react';

const Home = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* sidebar */}
            <div className="hidden md:flex flex-col w-64 bg-gray-800 rounded-2xl">
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex flex-col flex-1 overflow-y-auto bg-gradient-to-b from-gray-700 to-blue-500 px-2 py-4 gap-10 rounded-2xl">
                        <div className="px-4">
             <img src
                            <h1 className="text-xl font-bold text-white">INC Pustakalay</h1>
                            
                            <div className="mt-4 text-gray-100">Client ID: N-0195</div>
                            <div className="text-gray-100">Academic Year: 2082</div>
                        </div>
                        
                        <div className="px-2">
                            <div className="text-gray-300 font-medium mb-2">Search menus</div>
                            <div className="flex flex-col gap-1">
                                <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-lg">
                                    <span className="mr-2">📌</span> Academic
                                </a>
                                <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-lg">
                                    <span className="mr-2">📌</span> Notifications
                                </a>
                                <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-lg">
                                    <span className="mr-2">📌</span> Student Management
                                </a>
                                <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-lg">
                                    <span className="mr-2">📌</span> Staff Management
                                </a>
                                <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-lg">
                                    <span className="mr-2">📌</span> Attendance Management
                                </a>
                                <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-lg">
                                    <span className="mr-2">📌</span> Exam Management
                                </a>
                                <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-lg">
                                    <span className="mr-2">📌</span> Library Management
                                </a>
                                <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-lg">
                                    <span className="mr-2">📌</span> Admission Portal
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Main content */}
            <div className="flex flex-col flex-1 overflow-y-auto">
                {/* Top navigation */}
                <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                    <div className="flex items-center px-4">
                        <div className="relative mx-auto text-gray-600">
                            <input 
                                className="border border-gray-300 h-10 w-96 px-5 pr-16 rounded-lg text-sm placeholder-current focus:outline-none" 
                                type="search" 
                                name="search" 
                                placeholder="Search" 
                            />
                            <button type="submit" className="absolute right-1 top-0 mt-3 mr-4">
                                <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966" width="512px" height="512px">
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 
                                    s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 
                                    c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 
                                    s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mr-4">
                        {/* Notification icon */}
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M6.429 2.413a.75.75 0 0 0-1.13-.986l-1.292 1.48a4.75 4.75 0 0 0-1.17 3.024L2.78 8.65a.75.75 0 1 0 1.5.031l.056-2.718a3.25 3.25 0 0 1 .801-2.069z" />
                                <path fill="currentColor" fillRule="evenodd" d="M6.237 7.7a4.214 4.214 0 0 1 4.206-3.95H11V3a1 1 0 1 1 2 0v.75h.557a4.214 4.214 0 0 1 4.206 3.95l.221 3.534a7.376 7.376 0 0 0 1.308 3.754a1.617 1.617 0 0 1-1.135 2.529l-3.407.408V19a2.75 2.75 0 1 1-5.5 0v-1.075l-3.407-.409a1.617 1.617 0 0 1-1.135-2.528a7.377 7.377 0 0 0 1.308-3.754zm4.206-2.45a2.714 2.714 0 0 0-2.709 2.544l-.22 3.534a8.877 8.877 0 0 1-1.574 4.516a.117.117 0 0 0 .082.183l3.737.449c1.489.178 2.993.178 4.482 0l3.737-.449a.117.117 0 0 0 .082-.183a8.876 8.876 0 0 1-1.573-4.516l-.221-3.534a2.714 2.714 0 0 0-2.709-2.544zm1.557 15c-.69 0-1.25-.56-1.25-1.25v-.75h2.5V19c0 .69-.56 1.25-1.25 1.25" clipRule="evenodd" />
                                <path fill="currentColor" d="M17.643 1.355a.75.75 0 0 0-.072 1.058l1.292 1.48a3.25 3.25 0 0 1 .8 2.07l.057 2.717a.75.75 0 0 0 1.5-.031l-.057-2.718a4.75 4.75 0 0 0-1.17-3.024l-1.292-1.48a.75.75 0 0 0-1.058-.072" />
                            </svg>
                        </a>
                        
                        {/* Settings icon */}
                        <a href="#" className="text-gray-600 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2" />
                            </svg>
                        </a>
                        
                        {/* Logout */}
                        <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M5 11h8v2H5v3l-5-4l5-4zm-1 7h2.708a8 8 0 1 0 0-12H4a9.985 9.985 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4" />
                            </svg>
                            <span className="ml-1 font-medium">Logout</span>
                        </a>
                    </div>
                </div>

                {/* Content area */}
                <div className="p-4">
                    <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="text-xl font-bold mb-4">E-Learning</h2>
                        <div className="space-y-3">
                            <div className="p-3 hover:bg-gray-100 rounded cursor-pointer">Content Management</div>
                            <div className="p-3 hover:bg-gray-100 rounded cursor-pointer">Settings</div>
                            <div className="p-3 hover:bg-gray-100 rounded cursor-pointer">Tools/Extras</div>
                            <div className="p-3 hover:bg-gray-100 rounded cursor-pointer">Account</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;