"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconBrandAndroid, IconChevronLeft, IconChevronRight, IconShield, IconClock, IconActivity } from "@tabler/icons-react";
import { clsx } from "clsx";
import { Footerdemo } from "@/components/ui/footer-section";

const screenshots = [
  {
    id: 1,
    src: "/images/screenshots/s1.jpeg",
    alt: "Diet plan generation screen",
  },
  {
    id: 2,
    src: "/images/screenshots/s2.jpeg",
    alt: "Daily meal plan screen",
  },
  {
    id: 3,
    src: "/images/screenshots/s3.jpeg",
    alt: "Workout tracking screen",
  },
  {
    id: 4,
    src: "/images/screenshots/s4.jpeg",
    alt: "Progress tracking charts",
  },
  {
    id: 5,
    src: "/images/screenshots/s5.jpeg",
    alt: "Workout library screen",
  },
  {
    id: 6,
    src: "/images/screenshots/s6.jpeg",
    alt: "Personal profile screen",
  },
  {
    id: 7,
    src: "/images/screenshots/s7.jpeg",
    alt: "Personal profile screen",
  },
];

const features = [
  {
    id: "personalized",
    title: "Personalized Workouts",
    description: "Get routines tailored to your goals, fitness level, and progress. Trainer.ai adapts as you grow, so you always get the most effective plan.",
    icon: <IconActivity className="w-8 h-8 text-orange-500" />,
  },
  {
    id: "feedback",
    title: "Real-Time Feedback",
    description: "Instantly improve your form and results with AI-powered feedback and tips. Stay motivated and safe every step of the way.",
    icon: <IconClock className="w-8 h-8 text-orange-500" />,
  },
  {
    id: "experience",
    title: "Seamless Experience",
    description: "Enjoy a beautiful, fast, and intuitive app on any device. Trainer.ai is designed for a delightful experience, day or night.",
    icon: <IconShield className="w-8 h-8 text-orange-500" />,
  },
];

function downloadAPK() {
  // Function to handle APK download
  const apkUrl = "/downloads/trainer-app.apk";
  const link = document.createElement("a");
  link.href = apkUrl;
  link.download = "trainer-ai.apk";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function DownloadPage() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const screenshotContainerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setVisibleItems(window.innerWidth < 768 ? 1 : 2);
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextScreenshot = () => {
    if (currentScreenshot < screenshots.length - visibleItems) {
      setCurrentScreenshot(prev => prev + 1);
    }
  };

  const prevScreenshot = () => {
    if (currentScreenshot > 0) {
      setCurrentScreenshot(prev => prev - 1);
    }
  };

  // Scroll to position when currentScreenshot changes
  useEffect(() => {
    if (screenshotContainerRef.current) {
      screenshotContainerRef.current.scrollTo({
        left: currentScreenshot * (screenshotContainerRef.current.offsetWidth / visibleItems),
        behavior: 'smooth',
      });
    }
  }, [currentScreenshot, visibleItems]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
      >
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src="/images/logo_icon.png"
              alt="Trainer.ai Logo"
              width={80}
              height={80}
              className="mx-auto rounded-xl shadow-md"
            />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 text-4xl font-bold tracking-tight text-orange-500 sm:text-5xl"
          >
            Download Trainer.ai
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-3 text-xl text-gray-700 dark:text-gray-300"
          >
            Your AI-powered personal trainer, now available for Android
          </motion.p>
        </div>
      </motion.section>

      {/* App Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="p-6 md:p-8 md:w-1/2">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/logo_icon.png"
                    alt="Trainer.ai"
                    width={64}
                    height={64}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Trainer.ai</h2>
                  <p className="text-gray-600 dark:text-gray-400">Your AI-Powered Fitness Companion</p>
                </div>
              </div>
              
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Experience the future of fitness with Trainer.ai – 
                the smart, adaptive app that helps you crush your
                goals with personalized workouts, real-time
                feedback, and a beautiful, modern interface.
                Whether you're a beginner or a pro, Trainer.ai is
                your partner for a healthier, stronger you.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadAPK}
                className="w-full flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <IconBrandAndroid className="mr-2" />
                Download APK & Start Your Journey
              </motion.button>
              
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Trainer.ai is safe, verified, and trusted by fitness
                enthusiasts. Not on the Play Store yet? No worries—just
                allow installation from unknown sources and get started!
              </p>
            </div>
            
            <div className="md:w-1/2 bg-gray-100 dark:bg-gray-700 p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">App Screenshots</h3>
              
              <div className="relative">
                <div 
                  className="overflow-hidden" 
                >
                  <div 
                    ref={screenshotContainerRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide snap-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {screenshots.map((screenshot) => (
                      <div 
                        key={screenshot.id} 
                        className={clsx(
                          "flex-shrink-0 snap-center",
                          isMobile ? "w-full" : "w-1/2"
                        )}
                      >
                        <Image
                          src={screenshot.src || "/placeholder-screenshot.jpg"}
                          alt={screenshot.alt}
                          width={280}
                          height={560}
                          className="rounded-lg shadow-md border border-gray-200 dark:border-gray-600 h-auto object-cover w-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Navigation buttons */}
                <button 
                  onClick={prevScreenshot}
                  disabled={currentScreenshot === 0}
                  className={clsx(
                    "absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg z-10 text-gray-800 dark:text-white",
                    currentScreenshot === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                  )}
                  aria-label="Previous screenshot"
                >
                  <IconChevronLeft size={20} />
                </button>
                
                <button 
                  onClick={nextScreenshot}
                  disabled={currentScreenshot >= screenshots.length - visibleItems}
                  className={clsx(
                    "absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg z-10 text-gray-800 dark:text-white",
                    currentScreenshot >= screenshots.length - visibleItems ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                  )}
                  aria-label="Next screenshot"
                >
                  <IconChevronRight size={20} />
                </button>
                
                {/* Dots for navigation */}
                <div className="flex justify-center mt-4 space-x-2">
                  {Array.from({ length: screenshots.length - visibleItems + 1 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentScreenshot(index)}
                      className={clsx(
                        "w-2 h-2 rounded-full transition-colors",
                        currentScreenshot === index ? "bg-orange-500" : "bg-gray-300 dark:bg-gray-600"
                      )}
                      aria-label={`Go to screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Security & Trust */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6">Security & Trust</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Trainer.ai is built with the latest technology and your privacy in mind. Our APK is scanned, verified, and ready for you
            to install with confidence.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-green-500">
              <IconShield className="w-6 h-6" />
              <span className="ml-2 font-medium">VirusTotal Scan Result</span>
            </div>
            <Link href="/downloads/scan-results.pdf" target="_blank" className="text-orange-500 hover:underline">
              View Security Report
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-16"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 transition-transform hover:translate-y-[-4px] duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      {/* <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="Trainer.ai Logo" 
                  width={40} 
                  height={40}
                  className="rounded-lg"
                />
                <span className="ml-2 text-xl font-bold">trainer.ai</span>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Your AI-powered fitness companion.
                <br />
                <span className="font-semibold text-orange-500">Smarter workouts. Real results. 🚀</span>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <div>
                  <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500">
                    Home
                  </Link>
                </div>
                <div>
                  <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500">
                    Downloads
                  </Link>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>Etah, Uttar Pradesh</p>
                <p>New Sanjay Nagar</p>
                <p>Topmate: yaviraj17</p>
                <p>Email: yavirajatwork@gmail.com</p>
              </div>
              
              <div className="mt-4 flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                
                <Link href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                
                <Link href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 Trainer. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <Link href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </footer> */}

      <Footerdemo/>
    </div>
  );
}