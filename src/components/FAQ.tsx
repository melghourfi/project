import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plus, Minus, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface FAQProps {
  translations: any;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ translations }) => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [readItems, setReadItems] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedMobileFaq, setSelectedMobileFaq] = useState<FAQItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: translations.faq.items.faq1.question,
      answer: translations.faq.items.faq1.answer
    },
    {
      id: 2,
      question: translations.faq.items.faq2.question,
      answer: translations.faq.items.faq2.answer
    },
    {
      id: 3,
      question: translations.faq.items.faq3.question,
      answer: translations.faq.items.faq3.answer
    },
    {
      id: 4,
      question: translations.faq.items.faq4.question,
      answer: translations.faq.items.faq4.answer
    },
    {
      id: 5,
      question: translations.faq.items.faq5.question,
      answer: translations.faq.items.faq5.answer
    },
    {
      id: 6,
      question: translations.faq.items.faq6.question,
      answer: translations.faq.items.faq6.answer
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && faqs.length > 0) {
      setSelectedMobileFaq(faqs[0]);
    }
  }, [isMobile, location.pathname]); // Re-check on route change


  const toggleItem = (id: number) => {
    const wasOpen = openItem === id;
    
    // If closing an item, mark it as read
    if (wasOpen) {
      setReadItems(prev => new Set(prev).add(id));
    }
    
    setOpenItem(prev => prev === id ? null : id);
  };

  const handleMobileScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const itemHeight = container.children[0]?.clientHeight || 60; // Estimate item height
    const scrollPosition = container.scrollTop;
    const selectedIndex = Math.round(scrollPosition / itemHeight);
    
    if (faqs[selectedIndex] && faqs[selectedIndex].id !== selectedMobileFaq?.id) {
      setSelectedMobileFaq(faqs[selectedIndex]);
    }
  };

  const handleMobileFaqClick = (faq: FAQItem) => {
    setSelectedMobileFaq(faq);
    const index = faqs.findIndex(f => f.id === faq.id);
    scrollContainerRef.current?.scrollTo({ top: index * 60, behavior: 'smooth' });
  };

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{translations.faq.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.faq.subtitle}
          </p>
        </div>

        {isMobile ? (
          <div className="max-w-4xl mx-auto md:hidden">
            <div className="flex flex-col items-center">
              <div className="relative h-60 w-full max-w-sm">
                <div 
                  ref={scrollContainerRef}
                  onScroll={handleMobileScroll}
                  className="h-full w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide text-center"
                >
                  {faqs.map((faq) => (
                    <div key={faq.id} onClick={() => handleMobileFaqClick(faq)} className="h-[60px] flex items-center justify-center snap-center text-lg font-semibold cursor-pointer transition-all duration-300">
                      {faq.question}
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white dark:from-gray-800 dark:to-gray-800"></div>
                <div className="absolute top-1/2 left-0 w-full h-[60px] -translate-y-1/2 border-y-2 border-[#30628D] pointer-events-none"></div>
              </div>
              {selectedMobileFaq && (
                <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl w-full max-w-sm animate-fadeIn">
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line">{selectedMobileFaq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto hidden md:block">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <ScrollReveal key={faq.id} delay={faq.id * 100}>
                  <div className={`border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 ${readItems.has(faq.id) ? 'border-blue-300 bg-blue-100 dark:bg-[#30628D] dark:border-white' : 'border-gray-200 dark:border-gray-700'}`}>
                    <button onClick={() => toggleItem(faq.id)} className="w-full px-8 py-6 text-left flex items-center justify-between transition-colors hover:shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-4">{faq.question}</h3>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        {readItems.has(faq.id) && (
                          <div className="bg-green-500 text-white p-1 rounded-full">
                            <Check size={14} />
                          </div>
                        )}
                        {openItem === faq.id ? (
                          <Minus size={24} className={`transition-colors ${readItems.has(faq.id) ? 'dark:text-white text-[#30628D]' : 'text-[#30628D]'}`} />
                        ) : (
                          <Plus size={24} className={`transition-colors ${readItems.has(faq.id) ? 'dark:text-white text-[#30628D]' : 'text-[#30628D]'}`} />
                        )}
                      </div>
                    </button>
                    {openItem === faq.id && (
                      <div className={`px-8 pb-6 transition-all duration-400 ease-out ${openItem === faq.id ? 'animate-fadeInUp' : 'animate-fadeOutDown'}`}>
                        <div className="border-t border-gray-100 dark:border-gray-600 pt-6">
                          <p className="text-gray-600 dark:text-gray-100 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">{translations.faq.stillQuestions}</p>
            <Link to="/contact" className="inline-block bg-[#30628D] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              {translations.faq.contactUs}
            </Link>
          </div>
      </div>
    </section>
  );
};

export default FAQ;