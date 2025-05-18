'use client'
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import DownloadModal from './DownloadModal';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Header({ 
  // activeTab, 
  // onTabChange,
}: HeaderProps) {
  // const { darkMode, toggleDarkMode, setShowModal } = useTheme();
  const { darkMode, toggleDarkMode } = useTheme();
  const pathname = usePathname();

  return (
    <>
      <header className={`flex justify-between items-center px-6 py-4 sticky top-0 z-50 transition-colors duration-300  ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
     <Link href="/" className="flex items-center">
      <div className="flex items-center gap-3">
              <Image src="/images/logo_icon.png" alt="Trainer.ai Logo" width={32} height={32} className="w-10 h-10 rounded-lg" />
              <span className={`text-2xl font-bold tracking-tight ${darkMode? "text-white/90":"text-gray-700"} `}>trainer.ai</span>
            </div>
            </Link>
        
      
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors duration-200 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {pathname !== '/download' && (
            <Link 
              href="/download"
              className={`bg-[#FE5126] text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 transform hover:scale-105 active:scale-95 border-[2px] border-[#FE5126] ${darkMode ? 'border-white-700' : 'border-gray-200'}`}
            >
              Download
            </Link>
          )}
        </div>
      </header>
      <DownloadModal />
    </>
  );
} 

