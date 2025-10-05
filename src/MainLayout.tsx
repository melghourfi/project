import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';
import SimpleFooter from './components/SimpleFooter';

interface MainLayoutProps {
  children: React.ReactNode;
  currentLang: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
  translations: any;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, currentLang, onLanguageChange, translations }) => {
  const location = useLocation();
  const formPages = ['/devis', '/contact', '/call-request'];
  const isFormPage = formPages.includes(location.pathname);

  return (
    <>
      <Header 
        currentLang={currentLang} 
        onLanguageChange={onLanguageChange}
        translations={translations}
      />
      <main>{children}</main>
      {isFormPage ? (
        <SimpleFooter translations={translations} />
      ) : (
        <Footer translations={translations} />
      )}
      <CookieBanner translations={translations} />
      <ScrollToTop />
    </>
  );
};

export default MainLayout;