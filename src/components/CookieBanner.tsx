import React, { useState, useEffect } from 'react';
import { Cookie, Settings } from 'lucide-react';

interface CookieBannerProps {
  translations: any;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ translations }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowBanner(false);
  };

  const acceptNecessaryOnly = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        {!showDetails ? (
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-start space-x-3 flex-1">
              <Cookie className="text-[#30628D] mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{translations.cookies.title}</h3>
                <p className="text-gray-600 text-sm">
                  {translations.cookies.description}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button
                onClick={() => setShowDetails(true)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <Settings size={16} />
                <span>{translations.cookies.customize}</span>
              </button>
              <button
                onClick={acceptNecessaryOnly}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {translations.cookies.necessary}
              </button>
              <button
                onClick={acceptAllCookies}
                className="px-4 py-2 bg-[#30628D] text-white rounded-lg hover:bg-[#30628D]/90 transition-colors"
              >
                {translations.cookies.acceptAll}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">{translations.cookies.preferences}</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{translations.cookies.necessary}</h4>
                  <span className="text-xs text-gray-500">{translations.cookies.required}</span>
                </div>
                <p className="text-sm text-gray-600">{translations.cookies.necessaryDesc}</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{translations.cookies.analytics}</h4>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>
                <p className="text-sm text-gray-600">{translations.cookies.analyticsDesc}</p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDetails(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                {translations.cookies.back}
              </button>
              <button
                onClick={acceptNecessaryOnly}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {translations.cookies.savePreferences}
              </button>
              <button
                onClick={acceptAllCookies}
                className="px-4 py-2 bg-[#30628D] text-white rounded-lg hover:bg-[#30628D]/90 transition-colors"
              >
                {translations.cookies.acceptAll}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;