import React, { useState } from 'react';
import { MessageCircle, Settings, User, ChevronDown, LogOut } from 'lucide-react';

interface DashboardProps {
  userName: string;
  onStartChat: () => void;
  onNavigateToProfile: () => void;
  onNavigateToSettings: () => void;
  onLogout: () => void;
  darkMode: boolean;
}

export function Dashboard({ userName, onStartChat, onNavigateToProfile, onNavigateToSettings, onLogout, darkMode }: DashboardProps) {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm border-b`}>
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sahayak</h1>
            <div className="relative">
              <button 
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className={`flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <User className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{userName}</span>
                <ChevronDown className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
              
              {/* Profile Dropdown */}
              {showProfileDropdown && (
                <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg border z-50 ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setShowProfileDropdown(false);
                        onNavigateToProfile();
                      }}
                      className={`flex items-center space-x-3 w-full px-4 py-2 text-left transition-colors ${
                        darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-50 text-gray-900'
                      }`}
                    >
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </button>
                    <button
                      onClick={() => {
                        setShowProfileDropdown(false);
                        onNavigateToSettings();
                      }}
                      className={`flex items-center space-x-3 w-full px-4 py-2 text-left transition-colors ${
                        darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-50 text-gray-900'
                      }`}
                    >
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </button>
                    <hr className={`my-1 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />
                    <button
                      onClick={() => {
                        setShowProfileDropdown(false);
                        onLogout();
                      }}
                      className="flex items-center space-x-3 w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Welcome, {userName}!
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
            Your AI-powered government services assistant
          </p>
          
          {/* Primary Chat Button */}
          <div 
            onClick={onStartChat}
            className={`inline-flex items-center space-x-4 px-8 py-6 rounded-2xl cursor-pointer transition-all duration-200 transform hover:scale-105 ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl'
            }`}
          >
            <MessageCircle className="w-8 h-8" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">Start Conversation</h3>
              <p className="text-sm opacity-90">Get instant help with government services</p>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quick Services</h3>
            <div className="space-y-3">
              <button className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-900'
              }`}>
                <span className="font-medium">Check application status</span>
              </button>
              <button className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-900'
              }`}>
                <span className="font-medium">Apply for scheme</span>
              </button>
              <button className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-900'
              }`}>
                <span className="font-medium">Find nearest office</span>
              </button>
            </div>
          </div>
          
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Popular Topics</h3>
            <div className="space-y-3">
              <button className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-900'
              }`}>
                <span className="font-medium">Aadhaar services</span>
              </button>
              <button className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-900'
              }`}>
                <span className="font-medium">PAN card issues</span>
              </button>
              <button className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-900'
              }`}>
                <span className="font-medium">Passport services</span>
              </button>
            </div>
          </div>
          
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Recent Activity</h3>
            <div className="space-y-3">
              <div className={`px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>No recent activity</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Help Section */}
        <div className={`mt-8 text-center p-6 rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-200'} border`}>
          <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-blue-900'}`}>
            Need Help Getting Started?
          </h3>
          <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-blue-700'}`}>
            Click the "Start Conversation" button above to begin chatting with our AI assistant.
          </p>
          <button 
            onClick={onStartChat}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Start Now
          </button>
        </div>
      </div>
      
      {/* Click outside to close dropdown */}
      {showProfileDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowProfileDropdown(false)}
        />
      )}
    </div>
  );
}