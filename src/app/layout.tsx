'use client'
import React from 'react';
import Header from '@/components/Header';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <ThemeProvider>
          <Header activeTab="" onTabChange={() => {}} />
          {children}
        </ThemeProvider>
         <Analytics />
      </body>
    </html>
  );
}
