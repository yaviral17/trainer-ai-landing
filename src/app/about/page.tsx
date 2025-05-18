'use client'
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

export default function AboutPage() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <section className="px-6 py-12 md:py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-4">About TrainerAI</h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Revolutionizing personal fitness with AI-powered training solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
              At TrainerAI, we&apos;re on a mission to make personalized fitness training accessible to everyone. 
              We believe that everyone deserves access to professional-level training guidance, regardless of 
              their location or budget.
            </p>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our AI-powered platform combines cutting-edge technology with expert fitness knowledge to 
              deliver customized workout plans and real-time feedback to help you achieve your fitness goals.
            </p>
          </div>
          <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow-lg`}>
            {/* <Image
              src="/images/t1.png"
              alt="Our Mission"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            /> */}
            <Image
              src="/images/t1.png"
              alt="Our Mission"
              width={600}
              height={400}
              className={`w-full h-auto rounded-lg ${darkMode ? 'filter grayscale' : ''}`}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We continuously push the boundaries of what&apos;s possible in fitness technology, 
              creating solutions that adapt to your unique needs.
            </p>
          </div>
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h3 className="text-xl font-bold mb-4">Expertise</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our team combines decades of fitness industry experience with cutting-edge 
              AI technology to deliver exceptional results.
            </p>
          </div>
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h3 className="text-xl font-bold mb-4">Community</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We&apos;re building a global community of fitness enthusiasts who support and 
              motivate each other on their fitness journeys.
            </p>
          </div>
        </div>

        <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 shadow-lg`}>
          <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="/images/t1.png" 
                  alt="Team Member" 
                
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="/images/t2.png" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Head of AI</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="/images/t3.png" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Mike Johnson</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Fitness Director</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 