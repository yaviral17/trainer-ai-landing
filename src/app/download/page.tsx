'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Footerdemo } from "@/components/ui/footer-section";

export default function DownloadPage() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#FE5126] to-orange-500 bg-clip-text text-transparent"
            >
              Download Trainer.ai
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Your AI-powered personal trainer, now available for Android
            </motion.p>
          </div>

          {/* App Preview Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="h-[520px] flex items-center"
            >
              <Card className={`w-full h-full flex flex-col justify-center p-8 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-lg rounded-2xl`}>
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-[#FE5126] rounded-lg flex items-center justify-center"
                  >
                    <span className="text-2xl">🎯</span>
                  </motion.div>
                  <div>
                    <h2 className={`text-2xl font-semibold ${darkMode? "text-white":"text-black"}`}>Trainer.ai</h2>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your AI-Powered Fitness Companion</p>
                  </div>
                </div>
                <p className={`mb-6 text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Experience the future of fitness with Trainer.ai – the smart, adaptive app that helps you crush your goals with personalized workouts, real-time feedback, and a beautiful, modern interface. Whether you're a beginner or a pro, Trainer.ai is your partner for a healthier, stronger you.</p>
                <div className="space-y-4 mt-auto">
                  <Button asChild className={`w-full bg-[#FE5126] hover:bg-[#FE5126]/90  transform hover:scale-105 transition-all duration-300 text-base font-semibold py-3 rounded-lg text-white`}>
                    <a href="/downloads/trainer-app.apk" download>
                      Download APK & Start Your Journey
                    </a>
                  </Button>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-center`}>Trainer.ai is safe, verified, and trusted by fitness enthusiasts. Not on the Play Store yet? No worries—just allow installation from unknown sources and get started!</p>
                </div>
              </Card>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="h-[520px] flex flex-col justify-center"
            >
              <h3 className="text-xl font-semibold mb-4 px-2">App Screenshots</h3>
              <div className="relative flex-1 flex items-center ">
                <div className="w-full h-[460px] flex items-center">
                  <div className="overflow-x-auto scrollbar-hide  w-full h-full flex items-center">
                    <div className="flex space-x-4 min-w-max py-2">
                      {[1, 2, 3, 4, 5, 6, 7].map((num, idx, arr) => (
                        <motion.div
                          key={num}
                          whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.2 } }}
                          className={`relative group flex  items-center${idx === 0 ? ' ml-6' : ''}${idx === arr.length - 1 ? ' mr-6' : ''}`}
                        >
                          <Image 
                            className="rounded-xl h-[420px] w-auto object-cover flex-shrink-0 transition-all duration-300   bg-white" 
                            src={`/images/screenshots/s${num}.jpeg`}
                            alt={`Screenshot ${num}`}
                            width={236}
                            height={420}
                          />
                          <div className="absolute inset-0 opacity-0 duration-300 rounded-xl" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Subtle edge fades for scroll indication */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 0%)'}}></div>
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6" style={{background: 'linear-gradient(to left, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 0%)'}}></div>
              </div>
            </motion.div>
          </div>

          {/* Security Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card className={`p-6 mb-12 ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-all duration-300`}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : ''}`}>Security & Trust</h3>
              <div className="space-y-4">
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Trainer.ai is built with the latest technology and your privacy in mind. Our APK is scanned, verified, and ready for you to install with confidence.</p>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center space-x-2 ${darkMode ? 'text-white' : ''}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>VirusTotal Scan Result</span>
                  <Link
                    href="/downloads/scan-results.pdf"
                    target="_blank"
                    className="text-[#FE5126] hover:underline"
                  >
                    View Security Report
                  </Link>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Personalized Workouts",
                description: "Get routines tailored to your goals, fitness level, and progress. Trainer.ai adapts as you grow, so you always get the most effective plan."
              },
              {
                title: "Real-Time Feedback",
                description: "Instantly improve your form and results with AI-powered feedback and tips. Stay motivated and safe every step of the way."
              },
              {
                title: "Seamless Experience",
                description: "Enjoy a beautiful, fast, and intuitive app on any device. Trainer.ai is designed for a delightful experience, day or night."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-all duration-300`}>
                  <h4 className={`font-semibold mb-2 ${darkMode? "text-white":"text-black"}`}>{feature.title}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
      </div>
      <Footerdemo/>
    </div>
  );
} 