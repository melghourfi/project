import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';
import heroImage from '../assets/hero-image.png';

interface HeroProps {
  translations: any;
}

const Hero: React.FC<HeroProps> = ({ translations }) => {
  return (
    <section id="home" className="pt-32 pb-8 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                {translations.hero.title}
                <span className="text-[#30628D]"> {translations.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {translations.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/devis" className="cta-fade flex items-center justify-center space-x-2 bg-[#30628D] text-white px-8 py-4 rounded-lg hover:bg-[#30628D]/90 transition-all transform hover:scale-105">
                <span className="font-semibold">{translations.hero.ctaPrimary}</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/call-request" className="cta-fade flex items-center justify-center space-x-2 border-2 border-[#624832] text-[#624832] px-8 py-4 rounded-lg hover:bg-[#624832] hover:text-white transition-all">
                <span className="font-semibold">{translations.hero.ctaSecondary}</span>
              </Link>
            </div>

            <div className="flex items-center pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#30628D]/10 dark:bg-[#30628D]/20 rounded-full flex items-center justify-center">
                  <Award className="text-[#30628D]" size={20} />
                </div>
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">Une technique perfectionnée depuis plus de 20 ans</span>
              </div>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src={heroImage}
                alt="Artisan rénovant une fenêtre en bois"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;