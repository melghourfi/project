import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface BeforeAfterProps {
  translations: any;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({ translations }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const project = {
    id: 1,
    title: translations.beforeAfter.projects.project1.title,
    description: translations.beforeAfter.projects.project1.description,
    before: "https://images.pexels.com/photos/5691728/pexels-photo-5691728.jpeg?auto=compress&cs=tinysrgb&w=800",
    after: "https://images.pexels.com/photos/5691730/pexels-photo-5691730.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Dordogne (24)",
    year: "2024"
  };

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleSliderChange(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleSliderChange(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{translations.beforeAfter.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.beforeAfter.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Before/After Slider */}
            <div className="relative">
              <div
                className="relative w-full h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                onClick={handleSliderChange}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ userSelect: 'none' }}
              >
                {/* Before Image */}
                <img
                  src={project.before}
                  alt={`${project.title} - Before`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* After Image */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src={project.after}
                    alt={`${project.title} - After`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab ${isDragging ? 'cursor-grabbing scale-110' : ''} transition-transform`}>
                    <div className="w-2 h-2 bg-[#30628D] rounded-full"></div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  {translations.beforeAfter.before}
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  {translations.beforeAfter.after}
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-xl border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">{translations.beforeAfter.location}</div>
                  <div className="font-semibold text-gray-900">{project.location}</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">{translations.beforeAfter.year}</div>
                  <div className="font-semibold text-gray-900">{project.year}</div>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/call-request" className="inline-block bg-[#30628D] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  Être appelé
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;