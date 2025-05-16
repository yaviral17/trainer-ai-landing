'use client'
import React, { useState } from 'react';
import Header from '@/components/Header';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <ThemeProvider>
          <Header
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
