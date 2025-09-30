import React from 'react';
import { Building, Mail, Phone, MapPin } from 'lucide-react';

const Legal: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Mentions Légales</h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            {/* Informations légales */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Building className="text-[#30628D] mr-3" size={24} />
                Informations légales
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <strong>Dénomination sociale :</strong> KROObydvrenov
                </div>
                <div>
                  <strong>Forme juridique :</strong> Entreprise individuelle
                </div>
                <div>
                  <strong>Dirigeant :</strong> Olivier Rey
                </div>
                <div>
                  <strong>SIRET :</strong> 123 456 789 00012
                </div>
                <div>
                  <strong>Code APE :</strong> 4332A - Travaux de menuiserie bois et PVC
                </div>
                <div>
                  <strong>TVA Intracommunautaire :</strong> FR12345678901
                </div>
                <div>
                  <strong>Certification :</strong> RGE Qualibois n°2024/123456
                </div>
              </div>
            </section>

            {/* Coordonnées */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Coordonnées</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-[#30628D]" size={20} />
                  <span>Zone d'intervention : Sud-Ouest (33, 24, 47, 46)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-[#30628D]" size={20} />
                  <span>06 20 60 96 43</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-[#30628D]" size={20} />
                  <span>contact@kroobydvrenov.com</span>
                </div>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergement du site</h2>
              <div className="text-gray-700">
                <p>Ce site est hébergé par :</p>
                <div className="mt-2 space-y-1">
                  <div><strong>Hébergeur :</strong> Netlify, Inc.</div>
                  <div><strong>Adresse :</strong> 2325 3rd Street, Suite 296, San Francisco, CA 94107, USA</div>
                </div>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                  et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                  les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                  formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </div>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsabilité</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site est 
                  périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions 
                  ou des lacunes.
                </p>
                <p>
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de 
                  bien vouloir le signaler par email à contact@kroobydvrenov.com en décrivant le problème 
                  de la manière la plus précise possible.
                </p>
                <p>
                  KROObydvrenov ne pourra en aucune circonstance être tenu responsable de tout dommage de 
                  quelque nature qu'il soit résultant de l'interprétation ou de l'utilisation des informations 
                  et/ou documents disponibles sur ce site.
                </p>
              </div>
            </section>

            {/* Liens hypertextes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Liens hypertextes</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Les sites internet peuvent proposer des liens vers d'autres sites internet ou d'autres 
                  ressources disponibles sur Internet. KROObydvrenov ne dispose d'aucun moyen pour contrôler 
                  les sites en connexion avec ses sites internet.
                </p>
                <p>
                  KROObydvrenov ne répond pas de la disponibilité de tels sites et sources externes, ni ne 
                  la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature 
                  que ce soit, résultant du contenu de ces sites ou sources externes.
                </p>
              </div>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Droit applicable et juridiction</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Tout litige en relation avec l'utilisation du site www.kroobydvrenov.com est soumis au 
                  droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents 
                  de Paris.
                </p>
              </div>
            </section>

            {/* Assurances */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Assurances professionnelles</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  <strong>Responsabilité civile professionnelle :</strong><br />
                  Assureur : Groupama<br />
                  Police n° : 123456789<br />
                  Montant de garantie : 2 000 000 €
                </p>
                <p>
                  <strong>Assurance décennale :</strong><br />
                  Assureur : Maaf<br />
                  Police n° : 987654321<br />
                  Montant de garantie : 10 000 000 €
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <div className="text-gray-700">
                <p>
                  Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
                </p>
                <div className="mt-4 space-y-2">
                  <div>Par téléphone : 06 20 60 96 43</div>
                  <div>Par email : contact@kroobydvrenov.com</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;