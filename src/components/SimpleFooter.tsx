import React from 'react';
import { Link } from 'react-router-dom';

interface SimpleFooterProps {
  translations: any;
}

const SimpleFooter: React.FC<SimpleFooterProps> = ({ translations }) => {
  return (
    <footer className="bg-gray-50 py-4">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center items-center space-x-4 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} KROObydvrenov. {translations.footer.copyright}</span>
          <Link to="/privacy" className="hover:text-[#30628D]">{translations.footer.legal.privacy}</Link>
          <Link to="/legal" className="hover:text-[#30628D]">{translations.footer.legal.terms}</Link>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;