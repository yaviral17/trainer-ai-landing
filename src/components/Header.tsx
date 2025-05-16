'use client'
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import DownloadModal from './DownloadModal';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Header({ 
  activeTab, 
  onTabChange,
}: HeaderProps) {
  const { darkMode, toggleDarkMode, setShowModal } = useTheme();

  return (
    <>
      <header className={`flex justify-between items-center px-6 py-4 sticky top-0 z-50 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex items-center space-x-2">
          {/* cusrom bg color FE5126 */}
          <div className="bg-[#FE5126] text-white p-2 rounded-full">
            {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" fill="currentColor" />
              <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="currentColor" strokeWidth="2" />
            </svg> */}
            <img src="images/logo_icon.png" alt="logo" className="w-6 h-6" />
          </div>
          <span className={`font-bold text-xl ${darkMode? "text-white":"text-black"}`}>trainer.ai</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#" 
            className={`font-medium ${activeTab === 'home' ? 'text-[#FE5126]' : darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-200 hover:text-[#FE5126]`}
            onClick={(e) => {
              e.preventDefault();
              onTabChange('home');
            }}
          >
            Home
          </a>
          <a 
            href="#" 
            className={`font-medium ${activeTab === 'about' ? 'text-[#FE5126]' : darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-200 hover:text-[#FE5126]`}
            onClick={(e) => {
              e.preventDefault();
              onTabChange('about');
            }}
          >
            About Us
          </a>
          <a 
            href="#" 
            className={`font-medium ${activeTab === 'pricing' ? 'text-[#FE5126]' : darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-200 hover:text-[#FE5126]`}
            onClick={(e) => {
              e.preventDefault();
              onTabChange('pricing');
            }}
          >
            Pricing
          </a>
          <a 
            href="#" 
            className={`font-medium ${activeTab === 'features' ? 'text-[#FE5126]' : darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-200 hover:text-[#FE5126]`}
            onClick={(e) => {
              e.preventDefault();
              onTabChange('features');
            }}
          >
            Features
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors duration-200 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className={`bg-[#FE5126] text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105 active:scale-95 border-[2px] border-[#FE5126] ${darkMode ? 'border-white-700' : 'border-gray-200'}`}
            onClick={() => setShowModal(true)}
          >
            Download
          </button>
        </div>
      </header>
      <DownloadModal />
    </>
  );
} 

