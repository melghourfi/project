import React, { useState, useEffect } from 'react';
import { Phone, Clock, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CallRequestProps {
  translations: any;
}

const CallRequest: React.FC<CallRequestProps> = ({ translations }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
    urgency: '',
    subject: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwXYG2TS_VSIekeCVaoN8KmSeKT-ApxXRVk-7R8FfZHMvEXK52ov8cfWeXNhmDq6CY/exec';
    const data = new FormData();
    data.append('sheetName', "Demande d'appel");
    for (const key in formData) {
      data.append(key, formData[key as keyof typeof formData]);
    }

    fetch(scriptURL, { method: 'POST', body: data, mode: 'no-cors'})
      .then(response => {
        console.log('Success!', response);
        setIsSubmitted(true);
        setSubmitting(false);
      })
      .catch(error => {
        console.error('Error!', error.message);
        setSubmitting(false);
        alert('Une erreur est survenue. Veuillez réessayer.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setIsHeaderHovered(event.clientY < 120);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isSubmitted) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto p-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Demande d'être contacté a été envoyée !</h1>
          <p className="text-gray-600 mb-6">
            Merci pour votre demande. Notre équipe vous contactera sous 24h.
          </p>
          <div className="mt-8 flex flex-col items-center space-y-4">
            <Link to="/blog" className="inline-flex items-center justify-center space-x-2 bg-[#30628D] text-white px-6 py-3 rounded-lg hover:bg-[#30628D]/90 transition-colors font-semibold">
              <span>Découvrir nos articles de blog</span>
            </Link>
            <Link to="/" className="inline-flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              <ArrowLeft size={18} />
              <span>Retour à l'accueil</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gray-50 min-h-screen flex flex-col justify-center transition-all duration-300 ease-in-out ${
      isHeaderHovered ? 'pt-40' : 'pt-12'
    }`}>
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="text-center lg:text-left">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Être rappelé gratuitement</h1>
            <p className="text-base text-gray-600 max-w-md mx-auto lg:mx-0">
              Laissez-nous vos coordonnées et Olivier Rey vous contactera rapidement pour discuter de votre projet de rénovation.
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="text-center p-3 bg-[#30628D]/5 rounded-xl">
                <Clock className="text-[#30628D] mx-auto mb-2" size={24} />
                <h3 className="font-semibold text-gray-900 mb-1">Réponse rapide</h3>
                <p className="text-xs text-gray-600">Appel sous 2h en journée</p>
              </div>
              <div className="text-center p-3 bg-[#30628D]/5 rounded-xl">
                <Phone className="text-[#30628D] mx-auto mb-2" size={24} />
                <h3 className="font-semibold text-gray-900 mb-1">Expert dédié</h3>
                <p className="text-sm text-gray-600">Olivier Rey, 15 ans d'expérience</p>
              </div>
              <div className="text-center p-3 bg-[#30628D]/5 rounded-xl">
                <CheckCircle className="text-[#30628D] mx-auto mb-2" size={24} />
                <h3 className="font-semibold text-gray-900 mb-1">Sans engagement</h3>
                <p className="text-sm text-gray-600">Conseil gratuit et personnalisé</p>
              </div>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2 text-center lg:text-left text-sm">Pourquoi choisir KROObydvrenov ?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-600">
                <li className="flex items-center space-x-2"><CheckCircle size={14} className="text-green-600 flex-shrink-0" /><span>Technique éprouvée (+20 ans)</span></li>
                <li className="flex items-center space-x-2"><CheckCircle size={14} className="text-green-600 flex-shrink-0" /><span>Rénovation à l’identique</span></li>
                <li className="flex items-center space-x-2"><CheckCircle size={14} className="text-green-600 flex-shrink-0" /><span>Atelier mobile sur site</span></li>
                <li className="flex items-center space-x-2"><CheckCircle size={14} className="text-green-600 flex-shrink-0" /><span>Aucune démarche admin.</span></li>
                <li className="flex items-center space-x-2 md:col-span-2"><CheckCircle size={14} className="text-green-600 flex-shrink-0" /><span>Suivi personnalisé et conseils adaptés</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid md:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                    placeholder="votre@email.com (optionnel)"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Créneau d’appel
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                  >
                    <option value="">Indifférent</option>
                    <option value="matin">Matin (8h-12h)</option>
                    <option value="apres-midi">Après-midi (14h-18h)</option>
                    <option value="soir">Début de soirée (18h-20h)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgence du projet
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="urgent">Urgent (problème d'étanchéité)</option>
                    <option value="rapide">Rapide (1-2 mois)</option>
                    <option value="normal">Normal (3-6 mois)</option>
                    <option value="planifie">Planifié (plus de 6 mois)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet de votre appel
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                  placeholder="Décrivez brièvement votre projet ou votre problème..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full flex items-center justify-center space-x-2 bg-[#30628D] text-white px-5 py-2 rounded-lg hover:bg-[#30628D]/90 transition-colors font-semibold text-sm ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <Phone size={20} />
                <span>{submitting ? 'Envoi en cours...' : 'Demander à être rappelé'}</span>
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallRequest;