import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, FileText, Sun, Moon, Check } from 'lucide-react';

interface HeaderProps {
  currentLang: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
  translations: any;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange, translations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWindowTypesOpen, setIsWindowTypesOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const windowTypesDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const isFormPage = ['/devis', '/call-request', '/contact'].includes(location.pathname);

    if (isFormPage) {
      if (isWindowTypesOpen) {
        setIsHeaderVisible(true);
        return;
      }

      const handleMouseMove = (event: MouseEvent) => {
        // Show header if mouse is in the top 120px of the viewport
        setIsHeaderVisible(event.clientY < 120);
      };
      window.addEventListener('mousemove', handleMouseMove);
      // Start with header hidden on form pages
      setIsHeaderVisible(false);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        // Ensure header is visible when leaving the page
        setIsHeaderVisible(true);
      };
    } else {
      // Existing scroll behavior for all other pages
      let lastScrollY = window.scrollY;
      const handleScroll = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
        lastScrollY = window.scrollY;
      };
      window.addEventListener('scroll', handleScroll);
      setIsHeaderVisible(true); // Ensure header is visible on page load

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname, isWindowTypesOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
      if (windowTypesDropdownRef.current && !windowTypesDropdownRef.current.contains(event.target as Node)) {
        setIsWindowTypesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const windowTypes = [
    { id: 'rectangulaire', name: translations.windowTypes.rectangular, description: translations.windowTypes.rectangularDesc },
    { id: 'imposte', name: translations.windowTypes.imposte, description: translations.windowTypes.imposteDesc },
    { id: 'ventaux', name: translations.windowTypes.ventaux, description: translations.windowTypes.ventauxDesc },
    { id: 'cintree', name: translations.windowTypes.cintree, description: translations.windowTypes.cintreeDesc },
    { id: 'plein-cintre', name: translations.windowTypes.pleinCintre, description: translations.windowTypes.pleinCintreDesc },
    { id: 'ronde', name: translations.windowTypes.ronde, description: translations.windowTypes.rondeDesc },
    { id: 'droite', name: translations.windowTypes.droite, description: translations.windowTypes.droiteDesc }
  ];

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const sortedLanguages = [...languages].sort((a, b) => {
    if (a.code === currentLang) return -1;
    if (b.code === currentLang) return 1;
    return 0;
  });

  const handleHomeClick = () => {
    // Manually scroll to top if we are already on the home page
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/90 dark:border-gray-700 transition-all duration-700 ease-in-out ${
        isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      {/* Language Switcher Bar */}
      <div className="bg-[#30628D] text-white py-3 dark:bg-gray-800">
        <div className="container mx-auto px-4 flex justify-end items-center">
          <div className="flex-grow text-center">
            <div className="hidden md:block">
              <span className="text-sm">🏠 <strong>Bienvenue chez KROObydvrenov !</strong> Spécialiste de la rénovation de fenêtres en bois depuis 15 ans dans le Sud-Ouest</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
              {/* Dark Mode Toggle */}
              <div className="flex items-center mr-2">
                <button
                  onClick={toggleDarkMode}
                  className={`relative w-14 h-7 rounded-full flex items-center transition-colors duration-500 focus:outline-none overflow-hidden ${
                    isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-sky-400 to-blue-500'
                  }`}
                >
                  {/* Centered dots for light mode */}
                  <span className={`absolute right-3 top-2 w-1 h-1 bg-white/50 rounded-full transition-opacity duration-500 ${!isDarkMode ? 'opacity-100' : 'opacity-0'}`}></span>
                  <span className={`absolute right-5 top-3.5 w-0.5 h-0.5 bg-white/50 rounded-full transition-opacity duration-500 delay-100 ${!isDarkMode ? 'opacity-100' : 'opacity-0'}`}></span>

                  {/* Stars for dark mode */}
                  <span className={`absolute left-1.5 top-1 text-[7px] text-white transition-opacity duration-500 delay-200 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
                    &#10022;
                  </span>
                  <span className={`absolute left-3.5 text-xs text-white transition-opacity duration-500 delay-100 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
                    &#10022;
                  </span>
                  <span className={`absolute left-6 top-2 text-[6px] text-white transition-opacity duration-500 delay-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
                    &#10022;
                  </span>
                  {/* ... and dots */}
                  <span className={`absolute left-1 top-3 text-white transition-opacity duration-500 delay-400 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>.</span>
                  <span className={`absolute left-5 top-0.5 text-white transition-opacity duration-500 delay-500 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>.</span>
                  <span className={`absolute left-7 top-4 text-white transition-opacity duration-500 delay-600 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>.</span>
                  <span className={`absolute left-2.5 top-4 text-white transition-opacity duration-500 delay-200 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>.</span>
                  
                  {/* The toggle handle */}
                  <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-500 ease-in-out ${isDarkMode ? 'translate-x-[33px] bg-transparent shadow-[inset_-3px_2px_0_0_#fff]' : 'translate-x-1'}`}></div>
                </button>
              </div>
              
              {/* Language Dropdown */}
              <div className="relative" ref={langDropdownRef}>
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="text-xl font-sans">{currentLang === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
                  <ChevronDown size={14} />
                </button>
                
                {isLangDropdownOpen && (
                  <div className="absolute top-full right-0 mt-1 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1">
                    {sortedLanguages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code as 'fr' | 'en');
                          setIsLangDropdownOpen(false);
                        }}
                        className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="flex items-center">
                          <span className="text-xl mr-2 font-sans">{lang.flag}</span>
                          <span>{lang.name}</span>
                        </span>
                        {currentLang === lang.code && <Check size={16} className="text-green-500" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleHomeClick} className="flex items-center space-x-2">
            <img 
              src="/Logo copy copy.png" 
              alt="KROObydvrenov" 
              className="h-12 w-auto dark:brightness-0 dark:invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" onClick={handleHomeClick} className={`text-gray-700 dark:text-gray-300 hover:text-[#30628D] dark:hover:text-[#30628D] transition-colors ${location.pathname === '/' ? 'text-[#30628D] font-semibold' : ''}`}>
              {translations.nav.home}
            </Link>
            
            {/* Window Types Dropdown */}
            <div className="relative" ref={windowTypesDropdownRef}>
              <button
                onClick={() => setIsWindowTypesOpen(!isWindowTypesOpen)}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-[#30628D] dark:hover:text-[#30628D] transition-colors"
              >
                <span>{translations.nav.windowTypes}</span>
                <ChevronDown size={16} />
              </button>
              {isWindowTypesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50"
                  onMouseLeave={() => setIsWindowTypesOpen(false)}
                >
                  {windowTypes.map((type) => (
                    <Link 
                      key={type.id} 
                      to={`/window-types/${type.id}`}
                      className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => setIsWindowTypesOpen(false)}
                    >
                      <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">{type.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/blog" className={`text-gray-700 dark:text-gray-300 hover:text-[#30628D] dark:hover:text-[#30628D] transition-colors ${location.pathname === '/blog' ? 'text-[#30628D] font-semibold' : ''}`}>
              {translations.nav.blog}
            </Link>
            <Link to="/about" className={`text-gray-700 dark:text-gray-300 hover:text-[#30628D] dark:hover:text-[#30628D] transition-colors ${location.pathname === '/about' ? 'text-[#30628D] font-semibold' : ''}`}>
              {translations.nav.about}
            </Link>
            <Link to="/contact" className={`text-gray-700 dark:text-gray-300 hover:text-[#30628D] dark:hover:text-[#30628D] transition-colors ${location.pathname === '/contact' ? 'text-[#30628D] font-semibold' : ''}`}>
              {translations.nav.contact}
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/call-request" className="flex items-center space-x-2 bg-[#30628D] text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <Phone size={16} />
              <span className="whitespace-nowrap">{translations.nav.getCall}</span>
            </Link>
            <Link to="/devis" className="flex items-center space-x-2 bg-[#624832] text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <FileText size={16} />
              <span className="whitespace-nowrap">{translations.nav.getQuote}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-[#30628D] dark:hover:text-[#30628D] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-[#30628D] dark:hover:text-[#30628D] transition-colors">
                {translations.nav.home}
              </Link>
              <Link to="/blog" className="text-gray-700 dark:text-gray-300 hover:text-[#30628D] dark:hover:text-[#30628D] transition-colors">
                {translations.nav.blog}
              </Link>
              <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-[#30628D] dark:hover:text-[#30628D] transition-colors">
                {translations.nav.about}
              </Link>
              <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-[#30628D] dark:hover:text-[#30628D] transition-colors">
                {translations.nav.contact}
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/call-request" className="flex items-center justify-center space-x-2 bg-[#30628D] text-white px-4 py-2 rounded-lg hover:bg-[#30628D]/90 transition-colors">
                  <Phone size={16} />
                  <span className="whitespace-nowrap">{translations.nav.getCall}</span>
                </Link>
                <Link to="/devis" className="flex items-center justify-center space-x-2 bg-[#624832] text-white px-4 py-2 rounded-lg hover:bg-[#624832]/90 transition-colors">
                  <FileText size={16} />
                  <span className="whitespace-nowrap">{translations.nav.getQuote}</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;