import React from 'react';
import { Shield, Eye, Cookie, Database, Lock } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Politique de Confidentialité</h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            {/* Introduction */}
            <section>
              <div className="flex items-center mb-4">
                <Shield className="text-[#30628D] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Protection de vos données</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>
                  KROObydvrenov s'engage à protéger la confidentialité de vos données personnelles. Cette 
                  politique de confidentialité explique comment nous collectons, utilisons et protégeons 
                  vos informations personnelles conformément au Règlement Général sur la Protection des 
                  Données (RGPD).
                </p>
                <p>
                  <strong>Dernière mise à jour :</strong> 15 janvier 2025
                </p>
              </div>
            </section>

            {/* Responsable du traitement */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsable du traitement</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-2 text-gray-700">
                  <div><strong>Entreprise :</strong> KROObydvrenov</div>
                  <div><strong>Responsable :</strong> Olivier Rey</div>
                  <div><strong>Email :</strong> contact@kroobydvrenov.com</div>
                  <div><strong>Téléphone :</strong> 06 20 60 96 43</div>
                </div>
              </div>
            </section>

            {/* Données collectées */}
            <section>
              <div className="flex items-center mb-4">
                <Database className="text-[#30628D] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Données collectées</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Données d'identification</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse postale (pour les devis)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Données de navigation</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées</li>
                    <li>Durée de visite</li>
                    <li>Données de géolocalisation approximative</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Données de projet</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Type de bien</li>
                    <li>Nombre de fenêtres</li>
                    <li>Matériaux actuels et souhaités</li>
                    <li>Budget approximatif</li>
                    <li>Description du projet</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Finalités */}
            <section>
              <div className="flex items-center mb-4">
                <Eye className="text-[#30628D] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Finalités du traitement</h2>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-[#30628D] pl-4">
                  <h3 className="font-semibold text-gray-900">Gestion des demandes de contact et devis</h3>
                  <p className="text-gray-700">Base légale : Exécution de mesures précontractuelles</p>
                </div>
                
                <div className="border-l-4 border-[#30628D] pl-4">
                  <h3 className="font-semibold text-gray-900">Amélioration de nos services</h3>
                  <p className="text-gray-700">Base légale : Intérêt légitime</p>
                </div>
                
                <div className="border-l-4 border-[#30628D] pl-4">
                  <h3 className="font-semibold text-gray-900">Communication marketing (newsletter)</h3>
                  <p className="text-gray-700">Base légale : Consentement</p>
                </div>
                
                <div className="border-l-4 border-[#30628D] pl-4">
                  <h3 className="font-semibold text-gray-900">Respect des obligations légales</h3>
                  <p className="text-gray-700">Base légale : Obligation légale</p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <div className="flex items-center mb-4">
                <Cookie className="text-[#30628D] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Utilisation des cookies</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser 
                  l'utilisation du site.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Cookies nécessaires</h3>
                    <p className="text-sm text-gray-600">
                      Indispensables au fonctionnement du site (préférences de langue, panier, etc.)
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Cookies analytiques</h3>
                    <p className="text-sm text-gray-600">
                      Nous aident à comprendre comment vous utilisez notre site (Google Analytics)
                    </p>
                  </div>
                </div>
                
                <p>
                  Vous pouvez gérer vos préférences de cookies via le bandeau de consentement ou 
                  les paramètres de votre navigateur.
                </p>
              </div>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Durée de conservation</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Demandes de contact</span>
                  <span className="text-[#30628D] font-semibold">3 ans</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Données clients (contrats)</span>
                  <span className="text-[#30628D] font-semibold">10 ans</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Newsletter</span>
                  <span className="text-[#30628D] font-semibold">Jusqu'à désinscription</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Données de navigation</span>
                  <span className="text-[#30628D] font-semibold">13 mois</span>
                </div>
              </div>
            </section>

            {/* Vos droits */}
            <section>
              <div className="flex items-center mb-4">
                <Lock className="text-[#30628D] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Vos droits</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit d'accès</h3>
                    <p className="text-sm">Obtenir une copie de vos données personnelles</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit de rectification</h3>
                    <p className="text-sm">Corriger des données inexactes ou incomplètes</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit à l'effacement</h3>
                    <p className="text-sm">Demander la suppression de vos données</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit d'opposition</h3>
                    <p className="text-sm">Vous opposer au traitement de vos données</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit à la portabilité</h3>
                    <p className="text-sm">Récupérer vos données dans un format structuré</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit de limitation</h3>
                    <p className="text-sm">Limiter le traitement de vos données</p>
                  </div>
                </div>
                
                <div className="bg-[#30628D]/5 border border-[#30628D]/20 rounded-xl p-6">
                  <h3 className="font-semibold text-[#30628D] mb-2">Comment exercer vos droits ?</h3>
                  <p className="text-gray-700">
                    Pour exercer vos droits, contactez-nous par email à 
                    <strong> contact@kroobydvrenov.com</strong> en précisant votre demande et en 
                    joignant une copie de votre pièce d'identité.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Nous nous engageons à répondre dans un délai d'un mois maximum.
                  </p>
                </div>
              </div>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sécurité des données</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
                  protéger vos données personnelles contre la destruction, la perte, l'altération, 
                  la divulgation ou l'accès non autorisés.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-[#30628D]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Lock className="text-[#30628D]" size={20} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Chiffrement SSL</h3>
                    <p className="text-xs text-gray-600">Toutes les données sont chiffrées</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-[#30628D]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield className="text-[#30628D]" size={20} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Accès restreint</h3>
                    <p className="text-xs text-gray-600">Accès limité aux personnes autorisées</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-[#30628D]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Database className="text-[#30628D]" size={20} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Sauvegardes</h3>
                    <p className="text-xs text-gray-600">Sauvegardes régulières et sécurisées</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact DPO */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact et réclamations</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Pour toute question concernant cette politique de confidentialité ou le traitement 
                  de vos données personnelles, vous pouvez nous contacter :
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="space-y-2">
                    <div><strong>Email :</strong> contact@kroobydvrenov.com</div>
                    <div><strong>Téléphone :</strong> 06 20 60 96 43</div>
                    <div><strong>Objet :</strong> "Protection des données personnelles"</div>
                  </div>
                </div>
                
                <p>
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une 
                  réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-blue-800">
                    <strong>CNIL</strong><br />
                    3 Place de Fontenoy - TSA 80715<br />
                    75334 PARIS CEDEX 07<br />
                    Téléphone : 01 53 73 22 22<br />
                    Site web : www.cnil.fr
                  </p>
                </div>
              </div>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications de la politique</h2>
              <div className="text-gray-700">
                <p>
                  Cette politique de confidentialité peut être modifiée à tout moment. Toute modification 
                  sera publiée sur cette page avec une nouvelle date de mise à jour. Nous vous encourageons 
                  à consulter régulièrement cette page pour rester informé de nos pratiques en matière de 
                  protection des données.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;