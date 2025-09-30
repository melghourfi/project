import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

interface ContactProps {
  translations: any;
}

const Contact: React.FC<ContactProps> = ({ translations }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwXYG2TS_VSIekeCVaoN8KmSeKT-ApxXRVk-7R8FfZHMvEXK52ov8cfWeXNhmDq6CY/exec';
    const data = new FormData();
    data.append('sheetName', 'Contact');
    for (const key in formData) {
      data.append(key, formData[key as keyof typeof formData]);
    }

    fetch(scriptURL, { method: 'POST', body: data})
      .then(response => {
        console.log('Success!', response);
        setSubmitting(false);
        alert('Message envoyé avec succès !');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      })
      .catch(error => {
        console.error('Error!', error.message);
        setSubmitting(false);
        alert('Une erreur est survenue. Veuillez réessayer.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center py-8 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contactez-nous</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Une question ? Un projet de rénovation ? Notre équipe d'experts est à votre écoute pour vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nos coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#30628D]/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-[#30628D]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <p className="text-gray-600">06 20 60 96 43</p>
                    <p className="text-sm text-gray-500">Lun-Ven 8h-18h, Sam 9h-17h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#30628D]/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-[#30628D]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@kroobydvrenov.com</p>
                    <p className="text-sm text-gray-500">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#30628D]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-[#30628D]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Zone d'intervention</h3>
                    <p className="text-gray-600">Présent dans tout le sud ouest</p>
                    <div className="text-sm text-gray-500 mt-1">
                      <p>(33) Gironde</p>
                      <p>(24) Dordogne</p>
                      <p>(47) Lot-et-Garonne</p>
                      <p>(46) Lot</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>


          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Envoyez-nous un message</h2>
            
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
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="information">Demande d'information</option>
                  <option value="conseil">Conseil technique</option>
                  <option value="maintenance">Service après-vente</option>
                  <option value="urgence">Intervention urgente</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                  placeholder="Décrivez votre demande ou votre question..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full flex items-center justify-center space-x-2 bg-[#30628D] text-white px-5 py-2 rounded-lg hover:bg-[#30628D]/90 transition-colors font-semibold text-sm ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <Send size={20} />
                <span>{submitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;