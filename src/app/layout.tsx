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
      <head>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />


        <link rel="icon" href="/log.png" type="image/png" />
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
