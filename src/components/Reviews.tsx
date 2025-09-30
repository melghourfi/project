import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ReviewsProps {
  translations: any;
}

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  project: string;
  city: string;
}

const Reviews: React.FC<ReviewsProps> = ({ translations }) => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Marie Dubois",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5,
      comment: translations.reviews.review1.comment,
      date: "2025-01-10",
      project: translations.reviews.review1.project,
      city: "Bordeaux (33)"
    },
    {
      id: 2,
      name: "Jean Martin",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5,
      comment: translations.reviews.review2.comment,
      date: "2025-01-05",
      project: translations.reviews.review2.project,
      city: "Périgueux (24)"
    },
    {
      id: 3,
      name: "Sophie Laurent",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5,
      comment: translations.reviews.review3.comment,
      date: "2024-12-28",
      project: translations.reviews.review3.project,
      city: "Agen (47)"
    },
    {
      id: 4,
      name: "Pierre Moreau",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 4,
      comment: translations.reviews.review4.comment,
      date: "2024-12-20",
      project: translations.reviews.review4.project,
      city: "Cahors (46)"
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={18}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{translations.reviews.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.reviews.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Reviews Grid */}
          <div className="relative lg:grid lg:grid-cols-4 lg:gap-6 mb-8">
            <div className="flex overflow-x-auto snap-x snap-mandatory lg:contents scrollbar-hide -mx-4 px-2 lg:px-0 lg:mx-0">
              {reviews.slice(0, 4).map((review) => (
                <ScrollReveal
                  key={review.id}
                  delay={review.id * 150}
                  className="w-11/12 flex-shrink-0 snap-center lg:w-auto mx-2 lg:mx-0"
                >
                  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-500 hover:scale-105 h-full flex flex-col">
                    <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-sm truncate">{review.name}</h4>
                      <div className="flex items-center space-x-1 mt-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <blockquote className="text-gray-700 text-sm leading-relaxed italic flex-1 mb-4">
                      <p>"{review.comment}"</p>
                    </blockquote>
                  
                    <div className="mt-auto pt-3 border-t border-gray-100">
                      <p className="text-xs text-[#30628D] font-medium">{review.project}</p>
                      <p className="text-xs text-gray-500 mt-1">{review.city}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            {/* Scroll indicator for mobile */}
            <div className="lg:hidden absolute top-1/2 right-2 -translate-y-1/2 bg-gray-100/70 backdrop-blur-sm rounded-full p-1 pointer-events-none animate-slide-and-fade">
              <ArrowRight size={20} className="text-[#30628D]" />
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <ScrollReveal delay={600}>
          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-[#30628D] mb-2">150+</div>
                <div className="text-gray-600">{translations.reviews.stats.projects}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#30628D] mb-2">15+</div>
                <div className="text-gray-600">{translations.reviews.stats.experience}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#30628D] mb-2">4.9/5</div>
                <div className="text-gray-600">{translations.reviews.stats.rating}</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Reviews;