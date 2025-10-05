import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageTransition from './components/PageTransition';
import { useScrollToTop } from './hooks/useScrollToTop';
import MainLayout from './MainLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Devis from './pages/Devis';
import CallRequest from './pages/CallRequest';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import About from './pages/About';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import WindowTypes from './pages/WindowTypes';
import { translations } from './data/translations';

const AppContent: React.FC<{ currentLang: 'fr' | 'en'; onLanguageChange: (lang: 'fr' | 'en') => void; t: any }> = ({ currentLang, onLanguageChange, t }) => {
  useScrollToTop();

  return (
    <Routes>
      {/* Main site routes with the main layout */}
      <Route path="/*" element={
        <MainLayout
          currentLang={currentLang}
          onLanguageChange={onLanguageChange}
          translations={t}
        >
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <Home translations={t} />
              </PageTransition>
            } />
            <Route path="/contact" element={
              <PageTransition>
                <Contact translations={t} />
              </PageTransition>
            } />
            <Route path="/devis" element={
              <PageTransition>
                <Devis translations={t} />
              </PageTransition>
            } />
            <Route path="/call-request" element={
              <PageTransition>
                <CallRequest translations={t} />
              </PageTransition>
            } />
            <Route path="/blog" element={
              <PageTransition>
                <Blog translations={t} />
              </PageTransition>
            } />
            <Route path="/blog/:id" element={
              <PageTransition>
                <BlogArticle translations={t} />
              </PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition>
                <About translations={t} />
              </PageTransition>
            } />
            <Route path="/legal" element={
              <PageTransition>
                <Legal />
              </PageTransition>
            } />
            <Route path="/privacy" element={
              <PageTransition>
                <Privacy />
              </PageTransition>
            } />
            <Route path="/window-types/:type" element={
              <PageTransition>
                <WindowTypes translations={t} />
              </PageTransition>
            } />
          </Routes>
        </MainLayout>
      } />
    </Routes>
  );
};

function App() {
  const [currentLang, setCurrentLang] = useState<'fr' | 'en'>('fr');

  const handleLanguageChange = (lang: 'fr' | 'en') => {
    setCurrentLang(lang);
  };

  const t = translations[currentLang];

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <AppContent 
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange}
          t={t}
        />
      </div>
    </Router>
  );
}

export default App;