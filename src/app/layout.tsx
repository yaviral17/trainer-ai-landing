'use client'
import React from 'react';
import Header from '@/components/Header';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

import { Analytics } from '@vercel/analytics/next';
import { Link } from 'lucide-react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

          <link rel="shortcut icon" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"/>
          <title>TrainerAI</title>
      </head>
      <body className="min-h-screen font-sans">
        <ThemeProvider>
          <Header activeTab="" onTabChange={() => { }} />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
