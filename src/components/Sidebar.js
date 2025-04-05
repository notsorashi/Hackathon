'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isHovered, setIsHovered] = useState(null);

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠', description: 'Overview of your interview performance' },
    { id: 'interview', label: 'Mock Interview', icon: '🎯', description: 'AI-powered interview practice' },
    { id: 'alerts', label: 'Job Alerts', icon: '🔔', description: 'Real-time job alerts via WhatsApp/Email' },
    { id: 'skills', label: 'Skill Analysis', icon: '📊', description: 'Tracks your strengths & weaknesses' },
    { id: 'resume', label: 'Resume Analysis', icon: '📄', description: 'AI-powered resume review & suggestions' },
    { id: 'faang', label: 'FAANG Prep', icon: '🚀', description: 'Prepare for top tech companies' },
    { id: 'profile', label: 'Profile', icon: '👤', description: 'User details & settings' },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 h-screen fixed left-0 top-0 shadow-xl border-r border-gray-100 dark:border-gray-700 z-10">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="relative group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-400 dark:from-yellow-400 dark:to-yellow-500 rounded-xl shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-800 dark:text-gray-900 font-extrabold text-2xl">S</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              SkillSync
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">AI Assistant</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6 px-3">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={`/dashboard/${item.id}`}
            onClick={() => setActiveSection(item.id)}
            onMouseEnter={() => setIsHovered(item.id)}
            onMouseLeave={() => setIsHovered(null)}
            className={`w-full flex items-center px-4 py-3 my-1 text-left rounded-xl transition-all duration-200 ${
              activeSection === item.id
                ? 'bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/40 dark:to-indigo-900/40 text-purple-600 dark:text-purple-300 shadow-sm'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/50'
            }`}
          >
            <div className={`flex items-center justify-center w-10 h-10 rounded-lg mr-3 transition-all duration-300 ${
              activeSection === item.id || isHovered === item.id
                ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white transform scale-110'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
            }`}>
              <span className="text-lg">{item.icon}</span>
            </div>
            <div>
              <div className={`font-medium transition-all duration-200 ${
                activeSection === item.id 
                  ? 'text-purple-700 dark:text-purple-300'
                  : 'text-gray-700 dark:text-gray-300'
              }`}>
                {item.label}
              </div>
              <div className="text-xs opacity-75 text-gray-500 dark:text-gray-400">
                {item.description}
              </div>
            </div>
            {activeSection === item.id && (
              <div className="w-1.5 h-8 bg-purple-500 rounded-full ml-auto" />
            )}
          </Link>
        ))}
      </nav>
      
      {/* Footer Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-3 rounded-xl shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 dark:bg-purple-800/30 p-2 rounded-lg">
              <span className="text-purple-600 dark:text-purple-300 text-lg">💬</span>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300">
              <p className="font-medium">Need help?</p>
              <p className="opacity-75">Contact support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;