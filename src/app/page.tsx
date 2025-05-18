'use client'
import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Star, Home, PieChart, Settings, CreditCard } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { Footerdemo } from '@/components/ui/footer-section';
import { Accordion, AccordionContent } from '@radix-ui/react-accordion';

export default function UiftryLandingPage() {
  const { darkMode } = useTheme();
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle download button click
  const handleDownload = () => {
    setShowModal(true);
  };


  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Hero Section */}
      <section className="relative px-6 py-12 md:py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            className="transform transition-all duration-500"
            style={{
              opacity: scrollPosition < 100 ? 1 : 0.8,
              transform: `translateY(${scrollPosition * 0.05}px)`
            }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight text-left">
              Unleash Your Potential <span role="img" aria-label="rocket">🚀</span><br />
              with <span className="text-orange-500">AI-Powered Fitness</span>
            </h1>
            <p className={`mb-8 max-w-lg mx-auto text-left ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Meet <span className="font-bold text-orange-500">Trainer.ai</span> – your smart, adaptive fitness companion. <br />
              Get <span className="font-semibold">personalized workouts</span>, <span className="font-semibold">real-time feedback</span>, and a stunning, modern experience on any device. <span role="img" aria-label="muscle">💪</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="bg-[#FE5126] text-white px-6 py-3 rounded-md font-medium flex items-center hover:bg-orange-500 transition-colors duration-200 transform hover:scale-105 active:scale-95"
              >
                Start Your Journey <ChevronRight className="ml-2 animate-pulse" size={18} />
              </button>
              <button
                className={`flex items-center font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} hover:text-orange-500 transition-colors duration-200`}
                onClick={() => setVideoPlaying(!videoPlaying)}
              >
                <div className={`p-2 rounded-full mr-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} transform transition-transform duration-300 ${videoPlaying ? 'scale-110 bg-orange-500 text-white' : 'hover:scale-110'}`}>
                  <Play size={16} />
                </div>
                {videoPlaying ? 'Pause Video' : 'Watch Demo'}
              </button>
            </div>
          </div>

          <div
            className="relative transform transition-all duration-700"
            style={{
              transform: `translateY(${-scrollPosition * 0.03}px) rotate(${scrollPosition * 0.01}deg)`,
            }}
          >
            <div className="relative z-10 flex justify-center">
              {/* Phone mockups */}
              <div className="relative -mr-16 transform rotate-6 transition-transform duration-500 hover:rotate-12 hover:-translate-y-2">
                <PhoneMockupImage darkMode={darkMode} screen='p1' width={180} height={200} />
              </div>
              <div className="relative z-20 transition-transform duration-500 hover:-translate-y-4">
                <PhoneMockupImage primary darkMode={darkMode} screen='p2' width={180} height={200} />
              </div>
              <div className="relative -ml-16 transform -rotate-6 transition-transform duration-500 hover:-rotate-12 hover:-translate-y-2">
                <PhoneMockupImage darkMode={darkMode} screen='p3' width={180} height={200} />
              </div>
            </div>

            {/* Background elements */}
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full filter blur-3xl opacity-50 ${darkMode ? 'bg-red-900' : 'bg-red-100'}`} />
            <div className="absolute top-0 right-0 text-gray-200 animate-pulse">
              <Star size={24} />
            </div>
            <div className="absolute bottom-0 left-1/4 text-gray-200 animate-pulse" style={{ animationDelay: '1s' }}>
              <Star size={24} />
            </div>
          </div>
        </div>

        {/* Achievement badge
        <div className="mt-12 md:mt-0 md:absolute -bottom-12 left-8">
          <div 
            className={`${darkMode ? 'bg-gray-800' : 'bg-black'} text-white p-4 rounded-lg flex items-center space-x-4 max-w-xs transform rotate-3 hover:rotate-6 transition-transform duration-300 cursor-pointer`}
          >
            <div className="bg-orange-500 rounded-full p-2">
              <Star size={20} className="animate-spin" style={{ animationDuration: '10s' }} />
            </div>
            <div>
              <p className="text-xs text-gray-400">Achievement</p>
              <p className="font-medium">Best App On Play Store</p>
            </div>
          </div>
        </div> */}
      </section>

      {/* Feature Badge */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div
          className={`bg-gradient-to-r ${darkMode ? 'from-gray-800 to-gray-700' : 'from-gray-200 to-gray-200'} text-white p-6 rounded-xl flex flex-wrap md:flex-nowrap items-center justify-between gap-4 transform transition-transform duration-500 hover:scale-105 ${darkMode ? "border border-gray-700" : "border border-gray-200"}`}
        >
          <div className="flex items-center space-x-4">
            <div className="bg-orange-500 rounded-full p-2">
              <CreditCard size={20} className="transform transition-transform hover:rotate-12" />
            </div>
            <div>
              <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-900"}`}>AI-Powered Fitness</p>
              <p className={`font-medium ${darkMode ? "text-gray-400" : "text-gray-900"}`}>Your Personal Trainer, Upgraded</p>
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-3 rounded-lg cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50"
            onClick={() => setShowModal(true)}
          >
            <span className="flex items-center">
              <Star className="mr-2" size={14} />
              <span>Download Trainer.ai </span>
            </span>
            <span className="text-xs text-white/80">It's Free</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-12 md:py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            className="relative flex justify-center"
            style={{
              transform: `translateY(${scrollPosition > 300 ? (scrollPosition - 300) * 0.05 : 0}px)`,
              opacity: scrollPosition > 300 ? 1 : 0.7,
              transition: 'transform 0.5s, opacity 0.5s'
            }}
          >
            <PhoneMockupImageWithNav primary darkMode={darkMode} />
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full filter blur-3xl opacity-50 ${darkMode ? 'bg-orange-900' : 'bg-orange-100'}`} />
          </div>

          <div>
          <p className="text-orange-500 font-medium mb-2">FEATURES <span role="img" aria-label="sparkles">✨</span></p>
          <h2 className="text-4xl font-black mb-8">Why <span className="text-orange-500">Trainer.ai</span>? <span role="img" aria-label="thinking">🤔</span></h2>

            <div className="space-y-8">
              <FeatureItem
                icon={<Star className="text-orange-500" />}
                title="Personalized Workouts"
                description="Get routines tailored to your goals, fitness level, and progress. Trainer.ai adapts as you grow, so you always get the most effective plan."
                darkMode={darkMode}
                isHovered={hoveredFeature === 'workouts'}
                onHover={() => setHoveredFeature('workouts')}
                onLeave={() => setHoveredFeature(null)}
              />
              <FeatureItem
                icon={<Star className="text-orange-500" />}
                title="Real-Time Feedback"
                description="Instantly improve your form and results with AI-powered feedback and tips. Stay motivated and safe every step of the way."
                darkMode={darkMode}
                isHovered={hoveredFeature === 'feedback'}
                onHover={() => setHoveredFeature('feedback')}
                onLeave={() => setHoveredFeature(null)}
              />
              <FeatureItem
                icon={<Star className="text-orange-500" />}
                title="Seamless Experience"
                description="Enjoy a beautiful, fast, and intuitive app on any device. Trainer.ai is designed for a delightful experience, day or night."
                darkMode={darkMode}
                isHovered={hoveredFeature === 'seamless'}
                onHover={() => setHoveredFeature('seamless')}
                onLeave={() => setHoveredFeature(null)}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Advantages Section */}
      <section className="px-6 py-12 md:py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
          <p className="text-orange-500 font-medium mb-2">ADVANTAGES <span role="img" aria-label="trophy">🏆</span></p>
<h2 className="text-4xl font-black mb-8">
  🚀 What Sets <span className="text-orange-500">Trainer.ai</span> Apart?
</h2>
            <div className="space-y-8">
              <FeatureItem
                icon={<Star className="text-orange-500" />}
                title="Always Adapting to You"
                description="Trainer.ai uses advanced AI to keep your workouts fresh, challenging, and perfectly matched to your progress."
                darkMode={darkMode}
                isHovered={hoveredFeature === 'adapting'}
                onHover={() => setHoveredFeature('adapting')}
                onLeave={() => setHoveredFeature(null)}
              />
              <FeatureItem
                icon={<Star className="text-orange-500" />}
                title="Built for Every Device"
                description="Enjoy a seamless experience on mobile, tablet, or desktop. Trainer.ai is fully responsive and looks stunning everywhere."
                darkMode={darkMode}
                isHovered={hoveredFeature === 'devices'}
                onHover={() => setHoveredFeature('devices')}
                onLeave={() => setHoveredFeature(null)}
              />
              <FeatureItem
                icon={<Star className="text-orange-500" />}
                title="Trusted by Fitness Enthusiasts"
                description="Join a growing community of users who trust Trainer.ai to help them reach their fitness goals."
                darkMode={darkMode}
                isHovered={hoveredFeature === 'trusted'}
                onHover={() => setHoveredFeature('trusted')}
                onLeave={() => setHoveredFeature(null)}
              />
            </div>
          </div>


          <div
            className="relative flex justify-center"
            style={{
              transform: `translateY(${scrollPosition > 300 ? (scrollPosition - 300) * 0.05 : 0}px)`,
              opacity: scrollPosition > 300 ? 1 : 0.7,
              transition: 'transform 0.5s, opacity 0.5s'
            }}
          >
            <PhoneMockupImageWithNav primary darkMode={darkMode} />
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full filter blur-3xl opacity-50 ${darkMode ? 'bg-orange-900' : 'bg-orange-100'}`} />
          </div>

        </div>
      </section>


      {/* Testimonial seciton */}
      <section className="px-6 py-12 md:py-24 max-w-6xl mx-auto">
        {/* <div className="grid md:grid-cols-2 gap-8 items-center"> */}
        <div className={`text-center mb-8 bg-black/10 p-4 rounded-lg ${darkMode? "bg-gray-800" : "bg-gray-600/20 "} `}>
        <p className="text-orange-500 font-medium mb-2 text-center flex items-center justify-center gap-2">
          
  TESTIMONIALS <span role="img" aria-label="sparkles">✨</span>
</p>

  
<h2 className="text-4xl font-black mb-4 text-center">
  What Our Users Say <span role="img" aria-label="speech bubble">💬</span>
</h2>
<h4 className="text-lg font-normal mb-4 text-gray-600 text-center">
  Real stories, real results! <span role="img" aria-label="muscle">💪</span> <span role="img" aria-label="fire">🔥</span> <br />
  See how Trainer.ai is transforming fitness journeys around the world.
</h4>

</div>

        <AnimatedTestimonials


          testimonials={[
            {
              src: '/images/t1.png',
              name: 'Alex Martinez',
              designation: 'Fitness Enthusiast',
              quote: 'Trainer.ai keeps me motivated and on track. The AI workouts are spot on!'
            },
            {
              src: '/images/t2.png',
              name: 'Priya Singh',
              designation: 'Personal Trainer',
              quote: 'I love the real-time feedback and how easy it is to use. My clients are seeing real results.'
            },
            {
              src: '/images/t3.png',
              name: 'Jordan Lee',
              designation: 'App User',
              quote: 'Best fitness app I\'ve tried – beautiful, smart, and effective!'
            }
          ]} />



      </section>



      {/* Download Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div
            className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 animate-in`}
            style={{ animation: 'fadeIn 0.3s, scaleIn 0.3s' }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Download Uiftry</h3>
              <button
                onClick={closeModal}
                className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                ✕
              </button>
            </div>

            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Choose your platform to download the Uiftry app:
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                className={`flex items-center justify-center py-3 px-4 rounded-lg border ${darkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'} font-medium transition-colors duration-200`}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
                </svg>
                Android
              </button>
              <button
                className={`flex items-center justify-center py-3 px-4 rounded-lg border ${darkMode ? 'border-red-600' : 'border-red-200 '} ${darkMode ? 'bg-red-900/50' : 'bg-red-50'} font-medium transition-colors duration-200`}
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
                <button className="bg-orange-500 text-white px-4 py-2 font-medium hover:bg-orange-600 transition-colors duration-200">
                  Send Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}



      <Footerdemo />
    </div>
  );
}

// Phone Mockup Component
function PhoneMockup({ primary = false, darkMode = false }) {
  return (
    <div className={`w-48 h-96 rounded-3xl overflow-hidden border-4 border-gray-800 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} ${primary ? 'z-20' : 'z-10 opacity-90 scale-90'} transition-all duration-300`}>
      {/* Notch */}
      <div className="w-1/2 h-6 bg-gray-800 rounded-b-xl mx-auto" />

      {/* App Screen */}
      <div className="p-4 h-full">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Hello <span className="font-bold">Sami</span></p>
          </div>
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        </div>

        {/* Card */}
        <div className="bg-black text-white p-4 rounded-xl mb-4 transition-transform duration-300 hover:scale-105">
          <div className="flex justify-between items-center mb-2">
            <div className="text-xs">uiftry</div>
            <div className="text-xs">VISA</div>
          </div>
          <div className="text-xs text-gray-400 mb-4">
            0000 8888 2222 3333
          </div>
          <div className="text-xs text-gray-400">
            <span>12/24</span>
          </div>
        </div>

        {/* Balance */}
        <div className="flex justify-between mb-4">
          <div className="text-center">
            <div className={`flex items-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none">
                <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span>Income</span>
            </div>
            <p className="font-bold">$4,264</p>
          </div>

          <div className="text-center">
            <div className={`flex items-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span>Expenses</span>
            </div>
            <p className="font-bold">$3,897</p>
          </div>
        </div>

        {/* Transaction */}
        <div className={`${darkMode ? 'bg-red-900/30' : 'bg-red-50'} p-3 rounded-xl mb-8 transition-all duration-300 hover:shadow-md cursor-pointer`}>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded-lg mr-2"></div>
            <div className="flex-1">
              <p className="text-sm font-bold">$560.00</p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>From Adam</p>
            </div>
            <div>
              <span className="text-xs text-red-500">On Hold</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className={`absolute bottom-4 left-0 right-0 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-2 rounded-xl mx-4 transition-all duration-300`}>
          <div className="flex justify-around">
            <button className="p-2 text-orange-500 transition-transform duration-200 hover:scale-125">
              <Home size={20} />
            </button>
            <button className={`p-2 ${darkMode ? 'text-gray-300' : 'text-gray-400'} transition-colors duration-200 hover:text-orange-500`}>
              <PieChart size={20} />
            </button>
            <button className="p-2 bg-gray-900 text-white rounded-lg transition-transform duration-200 hover:scale-110">
              <CreditCard size={20} />
            </button>
            <button className={`p-2 ${darkMode ? 'text-gray-300' : 'text-gray-400'} transition-colors duration-200 hover:text-orange-500`}>
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// Phone Mockup Component
function PhoneMockupImageWithNav({ primary = false, darkMode = false, screen = 'p1' }) {
  return (
    <div className={`w-48 h-96 rounded-3xl overflow-hidden border-0 border-gray-800  ${primary ? 'z-20' : 'z-10 opacity-90 scale-90'} transition-all duration-300`}>

      <PhoneMockupImage primary darkMode={darkMode} screen={screen} width={180} height={200} />

      {/* Navigation */}
      <div className={`absolute bottom-4 left-0 right-0 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-2 rounded-xl mx-4 transition-all duration-300`}>
        <div className="flex justify-around">
          <button className="p-2 text-orange-500 transition-transform duration-200 hover:scale-125">
            <Home size={20} />
          </button>
          <button className={`p-2 ${darkMode ? 'text-gray-300' : 'text-gray-400'} transition-colors duration-200 hover:text-orange-500`}>
            <PieChart size={20} />
          </button>
          <button className="p-2 bg-gray-900 text-white rounded-lg transition-transform duration-200 hover:scale-110">
            <CreditCard size={20} />
          </button>
          <button className={`p-2 ${darkMode ? 'text-gray-300' : 'text-gray-400'} transition-colors duration-200 hover:text-orange-500`}>
            <Settings size={20} />
          </button>
        </div>
      </div>


    </div>
  );
}
// Phone Mockup Component image
function PhoneMockupImage({ primary = false, darkMode = false, screen = 'p1', width = 160, height = 200 }) {
  return (
    <img src={`/images/${screen}.png`} alt="Phone" width={width} height={height} />
  );
}

// Feature Item Component with animation
function FeatureItem({
  icon,
  title,
  description,
  darkMode,
  isHovered,
  onHover,
  onLeave
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
  darkMode: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${isHovered ? (darkMode ? 'bg-gray-800' : 'bg-gray-100') : ''}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`mt-1 transition-transform duration-300 ${isHovered ? 'scale-125' : ''}`}>
        {icon || <Star className="text-orange-500" />}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-all duration-300 ${isHovered ? 'pl-2 border-l-2 border-orange-500' : ''}`}>
          {description}
        </p>
      </div>
    </div>
  );
}