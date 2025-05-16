'use client'
import React from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function DownloadModal() {
  const { darkMode, showModal, setShowModal } = useTheme();

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div 
        className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 animate-in`}
        style={{ animation: 'fadeIn 0.3s, scaleIn 0.3s' }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Download Uiftry</h3>
          <button 
            onClick={() => setShowModal(false)}
            className="px-[20px] py-[10px] rounded-full text-white hover:bg-gray-600 dark:hover:bg-gray-700"
          >
            ✕
          </button>
        </div>
        
        <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Choose your platform to download the Uiftry app:
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button 
            className={`flex items-center text-white justify-center py-3 px-4 rounded-lg border ${darkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'} font-medium transition-colors duration-200`}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
            </svg>
            Android
          </button>
          <button 
            className={`flex items-center text-white justify-center py-3 px-4 rounded-lg border ${darkMode ? 'border-red-600' : 'border-red-200 '} ${darkMode? 'bg-red-900/50' : 'bg-red-50'} font-medium transition-colors duration-200`}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
            </svg>
            iOS <span className="text-xs text-red-400 ml-2">Coming Soon</span>
          </button>
        </div>
        
        <div className="text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
            Or get it directly via email
          </p>
          
          <div className={`flex rounded-lg overflow-hidden border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className={`flex-1 px-4 py-2 focus:outline-none ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
            />
            <button className="bg-[#FE5126] text-white px-4 py-2 font-medium hover:bg-[#FE5126]/90 transition-colors duration-200">
              Send Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 