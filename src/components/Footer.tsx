import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send } from 'lucide-react';

interface FooterProps {
  currentLang: 'fr' | 'en';
  translations: any;
}

const Footer: React.FC<FooterProps> = ({ currentLang, translations }) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    alert(translations.footer.newsletter.success);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/Logo copy copy.png" 
                alt="KROObydvrenov" 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            
            <p className="text-gray-300 leading-relaxed">
              {translations.footer.description}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#30628D]" />
                <span>06 20 60 96 43</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#30628D]" />
                <span>contact@kroobydvrenov.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-[#30628D]" />
                <div>
                  <div>Sud-Ouest : Gironde, Dordogne, Lot-et-Garonne, Lot</div>
                  <div className="text-sm">Interventions sur tout le territoire français</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">{translations.footer.quickLinks.title}</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">{translations.nav.home}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">{translations.nav.about}</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">{translations.nav.blog}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">{translations.nav.contact}</Link></li>
              <li><Link to="/devis" className="text-gray-300 hover:text-white transition-colors">{translations.footer.quickLinks.quote}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">{translations.footer.services.title}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fenêtres en bois</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{translations.footer.services.renovation}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Entretien</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">{translations.footer.newsletter.title}</h3>
            <p className="text-gray-300 mb-4">
              {translations.footer.newsletter.description}
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={translations.footer.newsletter.placeholder}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#30628D]"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-[#30628D] text-white p-2 rounded-md hover:bg-[#30628D]/90 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">{translations.footer.followUs}</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-[#30628D] transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-[#30628D] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="mailto:contact@kroobydvrenov.com" className="bg-gray-800 p-3 rounded-lg hover:bg-[#30628D] transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} KROObydvrenov. {translations.footer.copyright}
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                {translations.footer.legal.privacy}
              </Link>
              <Link to="/legal" className="text-gray-400 hover:text-white transition-colors">
                {translations.footer.legal.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;