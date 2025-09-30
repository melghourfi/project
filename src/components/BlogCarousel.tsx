import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useLocalStorageArticles } from '../hooks/useLocalStorageArticles';

interface BlogCarouselProps {
  translations: any;
  isMobile?: boolean; // For potential future use
}

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  archived?: boolean;
}

const BlogCarousel: React.FC<BlogCarouselProps> = ({ translations }) => {
  const [showMore, setShowMore] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const allArticles = useLocalStorageArticles();

  const hasBeenManagedByDashboard = localStorage.getItem('dashboardArticles') !== null;

  const featuredArticles = allArticles.filter(article => article.featured && !article.archived && !article.deletedAt);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (isMobile) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-20');
            }
          } else if (isMobile) {
              entry.target.classList.remove('opacity-100');
              entry.target.classList.add('opacity-20');
          }
        });
      },
      {
        root: carousel,
        threshold: 0.6, // A card is "active" if 60% of it is visible
      }
    );

    const cards = Array.from(carousel.children);
    cards.forEach(card => {
      if (!isMobile) {
        card.classList.add('opacity-100');
        card.classList.remove('opacity-20');
      }
      observer.observe(card)
    });

    return () => cards.forEach(card => observer.unobserve(card));
  }, [featuredArticles, isMobile]);

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{translations.blog.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.blog.subtitle}
          </p>
        </div>

        {/* Carousel on mobile, grid on desktop */}
        <div className="relative md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory md:contents scrollbar-hide -mx-4 px-2 md:px-0 md:mx-0">
          {featuredArticles.slice(0, 3).map((article) => (
            <ScrollReveal key={article.id} delay={article.id * 100}>
              <article className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-opacity duration-300 h-full flex flex-col w-11/12 flex-shrink-0 snap-center md:w-auto mx-2 md:opacity-100">
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <Link to={`/blog/${article.id}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#30628D] transition-colors cursor-pointer line-clamp-2">
                    {article.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link to={`/blog/${article.id}`} className="flex items-center space-x-2 text-[#30628D] font-semibold hover:text-[#30628D]/80 transition-colors">
                    <span>{translations.blog.readMore}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              </article>
            </ScrollReveal>
          ))}
          </div>
          {/* Scroll indicator for mobile */}
          <div className="md:hidden absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 backdrop-blur-sm rounded-full p-1 pointer-events-none animate-slide-and-fade">
            <ArrowRight size={20} className="text-[#30628D]" />
          </div>
        </div>

        {/* Additional articles with fade animation */}
        {showMore && (
          <div className="animate-fadeIn">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {featuredArticles.slice(3).map((article) => (
                <ScrollReveal key={article.id} delay={(article.id - 3) * 100}>
                  <article className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${article.id}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#30628D] transition-colors cursor-pointer line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <Link to={`/blog/${article.id}`} className="flex items-center space-x-2 text-[#30628D] font-semibold hover:text-[#30628D]/80 transition-colors">
                        <span>{translations.blog.readMore}</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* Show More / Blog Button */}
        <div className="text-center mt-8">
          {!showMore ? (
            <button
              onClick={() => setShowMore(true)}
              className="inline-block bg-[#30628D] text-white px-8 py-3 rounded-lg font-semibold mr-4 transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              {translations.blog.showMore}
            </button>
          ) : (
            <div className="space-x-4">
              <button
                onClick={() => setShowMore(false)}
                className="inline-block border-2 border-[#30628D] text-[#30628D] px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#30628D] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                {translations.blog.showLess}
              </button>
              <Link
                to="/blog"
                className="inline-block bg-[#30628D] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                {translations.blog.viewBlog}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;