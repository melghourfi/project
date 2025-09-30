import React from 'react';
import { Wrench, Heart, Zap, Users, ArrowRight } from 'lucide-react';

interface CertificationsProps {
  translations: any;
}

const Certifications: React.FC<CertificationsProps> = ({ translations }) => {
  const certifications = [
    {
      id: 1,
      name: translations.certifications.items.rge.name,
      description: translations.certifications.items.rge.description,
      icon: Wrench,
      color: "text-blue-600 bg-blue-100"
    },
    {
      id: 2,
      name: translations.certifications.items.qualibat.name,
      description: translations.certifications.items.qualibat.description,
      icon: Heart,
      color: "text-red-600 bg-red-100"
    },
    {
      id: 3,
      name: translations.certifications.items.insurance.name,
      description: translations.certifications.items.insurance.description,
      icon: Zap,
      color: "text-yellow-600 bg-yellow-100"
    },
    {
      id: 4,
      name: translations.certifications.items.guarantee.name,
      description: translations.certifications.items.guarantee.description,
      icon: Users,
      color: "text-green-600 bg-green-100"
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{translations.certifications.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.certifications.subtitle}
          </p>
        </div>

        <div className="relative md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          <div className="flex overflow-x-auto snap-x snap-mandatory md:contents scrollbar-hide -mx-4 px-2 md:px-0 md:mx-0">
            {certifications.map((cert) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={cert.id}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300 w-11/12 flex-shrink-0 snap-center md:w-auto mx-2"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${cert.color} flex items-center justify-center group-hover:shadow-lg transition-shadow`}>
                    <IconComponent size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {cert.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              );
            })}
          </div>
          {/* Scroll indicator for mobile */}
          <div className="md:hidden absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 backdrop-blur-sm rounded-full p-1 pointer-events-none animate-slide-and-fade">
            <ArrowRight size={20} className="text-[#30628D]" />
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-8 bg-gradient-to-r from-[#30628D] to-[#624832] rounded-3xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">{translations.certifications.trust.title}</h3>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto leading-relaxed">
            {translations.certifications.trust.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;