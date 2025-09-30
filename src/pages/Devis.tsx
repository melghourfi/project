import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Home, AppWindow as Window, Calendar, FileText, Settings, CheckCircle, ArrowLeft, User, ClipboardList } from 'lucide-react';

interface DevisProps {
  translations: any;
}

const Devis: React.FC<DevisProps> = ({ translations }) => {
  const [step, setStep] = useState(1);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    
    // Project Info
    propertyType: '',
    windowCount: '',
    windowType: '',
    timeline: '',
    
    // Window Details
    windowShape: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwXYG2TS_VSIekeCVaoN8KmSeKT-ApxXRVk-7R8FfZHMvEXK52ov8cfWeXNhmDq6CY/exec';
    const data = new FormData();
    data.append('sheetName', 'Devis');
    for (const key in formData) {
      data.append(key, formData[key as keyof typeof formData]);
    }

    fetch(scriptURL, { method: 'POST', body: data})
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

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Demande de devis envoyée !</h1>
          <p className="text-gray-600 mb-6">
            Merci pour votre demande. Notre équipe vous contactera sous 24h pour discuter de votre projet.
          </p>
          <div className="mt-8">
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
      <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-12 items-center">
        {/* Left Column: Info and Progress */}
        <div className="text-center lg:text-left lg:col-span-2">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Demande de Devis Gratuit</h1>
            <p className="text-base text-gray-600 max-w-md mx-auto lg:mx-0">
              Obtenez votre devis personnalisé en quelques minutes. Notre équipe vous contactera sous 24h.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 overflow-x-hidden">
            <div className="flex items-center justify-center lg:justify-start">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold transition-colors text-sm ${
                    step >= stepNumber ? 'bg-[#30628D] text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {stepNumber}
                  </div>
                  {stepNumber < 4 && <div className={`w-6 md:w-10 h-1 mx-1 transition-colors ${step > stepNumber ? 'bg-[#30628D]' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>
            <div className="mt-4 text-center lg:text-left">
              <div className="hidden md:flex justify-between text-sm max-w-md mx-auto lg:mx-0">
                <span className={`${step >= 1 ? 'text-[#30628D] font-semibold' : 'text-gray-500'}`}>Infos</span>
                <span className={`${step >= 2 ? 'text-[#30628D] font-semibold' : 'text-gray-500'}`}>Projet</span>
                <span className={`${step >= 3 ? 'text-[#30628D] font-semibold' : 'text-gray-500'}`}>Détails</span>
                <span className={`${step >= 4 ? 'text-[#30628D] font-semibold' : 'text-gray-500'}`}>Récapitulatif</span>
              </div>
              <div className="md:hidden text-lg font-semibold text-[#30628D] mt-4 flex items-center justify-center">
                {step === 1 && <><Home size={22} className="mr-2" /><span>Informations personnelles</span></>}
                {step === 2 && <><Window size={22} className="mr-2" /><span>Détails du projet</span></>}
                {step === 3 && <><Settings size={22} className="mr-2" /><span>Détails de vos menuiseries</span></>}
                {step === 4 && <><FileText size={22} className="mr-2" /><span>Récapitulatif</span></>}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-xl p-4">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-3">
                  <div className="text-center mb-3">
                    <Home className="text-[#30628D] mx-auto mb-2" size={32} />
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Vos informations</h2>
                    <p className="text-gray-600">Pour vous contacter et vous envoyer le devis</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                        placeholder="06 XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    <div className="md:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                        placeholder="Adresse complète"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ville *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                        placeholder="Ville"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Code postal *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                        placeholder="Code postal"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-1">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#30628D] text-white px-5 py-2 rounded-lg hover:bg-[#30628D]/90 transition-colors font-semibold text-sm"
                    >
                      Suivant
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {step === 2 && (
                <div className="space-y-3">
                  <div className="text-center mb-4">
                    <Window className="text-[#30628D] mx-auto mb-2" size={32} />
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Détails du projet</h2>
                    <p className="text-gray-600">Informations sur votre bien et vos fenêtres</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type de bien *
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="maison">Maison</option>
                        <option value="appartement">Appartement</option>
                        <option value="batiment-ancien">Bâtiment ancien</option>
                        <option value="copropriete">Copropriété</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre de fenêtres à rénover *
                      </label>
                      <select
                        name="windowCount"
                        value={formData.windowCount}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                      >
                        <option value="">Sélectionnez</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num.toString()}>{num}</option>
                        ))}
                        <option value="plus-10">Plus de 10</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type d'ouverture *
                      </label>
                      <select
                        name="windowType"
                        value={formData.windowType}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="ouvrante">Fenêtre ouvrante</option>
                        <option value="fixe">Fenêtre fixe (non ouvrante)</option>
                        <option value="porte-fenetre">Porte-fenêtre</option>
                        <option value="velux">Velux bois</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Délai souhaité *
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="urgent">Urgent (moins d'1 mois)</option>
                        <option value="1-3-mois">1 à 3 mois</option>
                        <option value="plus-3-mois">+3 mois</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between pt-1">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-sm"
                    >
                      Précédent
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#30628D] text-white px-5 py-2 rounded-lg hover:bg-[#30628D]/90 transition-colors font-semibold text-sm"
                    >
                      Suivant
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Window Details */}
              {step === 3 && (
                <div className="space-y-3">
                  <div className="text-center mb-4">
                    <Settings className="text-[#30628D] mx-auto mb-2" size={32} />
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Détails de vos menuiseries</h2>
                    <p className="text-gray-600">Pour affiner notre analyse et préparer une solution sur mesure</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Forme / spécificité des fenêtres *
                    </label>
                    <select
                      name="windowShape"
                      value={formData.windowShape}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="standard">Standard rectangulaire</option>
                      <option value="cintree">Cintrée</option>
                      <option value="oeil-boeuf">Œil-de-bœuf</option>
                      <option value="croisillons">Avec croisillons</option>
                      <option value="vitraux">Avec vitraux</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description du projet
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30628D] focus:border-transparent text-gray-900"
                      placeholder="Précisez l'état actuel des fenêtres (peinture, bois, vitrage, mécanismes…), vos attentes (double vitrage, isolation, esthétique) et toute contrainte particulière (bâtiment ancien, accès difficile, etc.)."
                    />
                  </div>

                  <div className="flex justify-between pt-1">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-sm"
                    >
                      Précédent
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#30628D] text-white px-5 py-2 rounded-lg hover:bg-[#30628D]/90 transition-colors font-semibold text-sm"
                    >
                      Suivant
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Summary */}
              {step === 4 && (
                <div className="space-y-3">
                  <div className="text-center mb-3">
                    <FileText className="text-[#30628D] mx-auto mb-2" size={32} />
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Récapitulatif</h2>
                    <p className="text-gray-600">Vérifiez vos informations avant envoi</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                      <h3 className="text-base font-bold text-gray-900 flex items-center"><User size={18} className="mr-2 text-[#30628D]" />Informations</h3>
                      <div className="space-y-1 text-xs text-gray-800 pl-7">
                        <p><strong>Nom:</strong> {formData.name}</p>
                        <p><strong>Téléphone:</strong> {formData.phone}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Adresse:</strong> {formData.address}, {formData.city} {formData.postalCode}</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                      <h3 className="text-base font-bold text-gray-900 flex items-center"><ClipboardList size={18} className="mr-2 text-[#30628D]" />Projet</h3>
                      <div className="space-y-1 text-xs text-gray-800 pl-7">
                        <p><strong>Type de bien:</strong> {formData.propertyType}</p>
                        <p><strong>Nb. fenêtres:</strong> {formData.windowCount}</p>
                        <p><strong>Ouverture:</strong> {formData.windowType}</p>
                        <p><strong>Délai:</strong> {formData.timeline}</p>
                        <p><strong>Forme:</strong> {formData.windowShape}</p>
                      </div>
                    </div>
                  </div>

                  {formData.description && (
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h3 className="text-base font-bold text-gray-900 flex items-center"><FileText size={18} className="mr-2 text-[#30628D]" />Description</h3>
                      <p className="mt-1 text-xs text-gray-600 pl-7">{formData.description}</p>
                    </div>
                  )}

                  <div className="pt-1 text-center">
                    <p className="text-xs text-gray-500">
                      🔒 Vos informations restent confidentielles et ne sont utilisées que pour traiter votre demande.
                    </p>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-sm"
                    >
                      Précédent
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className={`bg-[#30628D] text-white px-5 py-2 rounded-lg hover:bg-[#30628D]/90 transition-colors font-semibold flex items-center space-x-2 text-sm ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                      <Calculator size={20} />
                      <span>{submitting ? 'Envoi en cours...' : 'Envoyer ma demande'}</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devis;