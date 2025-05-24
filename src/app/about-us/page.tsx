import React from 'react';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <section className="px-6 py-12 md:py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-orange-500 font-medium">How It Started</p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900">
              Our Dream is<br />Global Learning<br />Transformation
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Kawruh was founded by Robert Anderson, a passionate lifelong learner,
              and Maria Sanchez, a visionary educator. Their shared dream was to
              create a digital haven of knowledge accessible to all. United by their
              belief in the transformational power of education, they embarked on a
              journey to build &apos;Kawruh.&apos; With relentless dedication, they gathered a
              team of experts and launched this innovative platform, creating a global
              community of eager learners, all connected by the desire to explore,
              learn, and grow
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
              {/* Replace with your actual image path */}
              <Image 
                src="/images/about-us-hero.png" 
                alt="Our Dream" 
                layout="fill" 
                objectFit="cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Stat Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-gray-900">3.5</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              {/* Stat Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-gray-900">23</p>
                <p className="text-gray-600">Project Challenge</p>
              </div>
              {/* Stat Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-gray-900">830+</p>
                <p className="text-gray-600">Positive Reviews</p>
              </div>
              {/* Stat Card 4 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-gray-900">100K</p>
                <p className="text-gray-600">Trusted Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 