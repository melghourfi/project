import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, Shield, Heart, Target, ArrowRight } from 'lucide-react';
import history from '../assets/history.png';
import history2 from '../assets/history-2.jpg';

interface AboutProps {
  translations: any;
}

const About: React.FC<AboutProps> = ({ translations }) => {
  return (
    <div className="pt-48 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">À propos de KROObydvrenov</h1>
              <div className="mx-auto max-w-4xl bg-[#F8FBFF] p-8 rounded-lg">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Depuis plus de 15 ans, nous sommes spécialisés dans la rénovation de fenêtres en bois en Île-de-France.
                  Notre passion pour l'artisanat traditionnel et notre expertise technique nous permettent de redonner vie
                  à vos menuiseries tout en améliorant leurs performances énergétiques.
                </p>
              </div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-stretch mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre histoire</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  <strong>KROO by DV Rénov</strong> a été fondée par <strong>Olivier Rey</strong>, artisan menuisier passionné par la restauration de fenêtres anciennes. 
                  Formé auprès de DVRénov, Olivier a acquis une expérience unique qui l'a conduit à développer une méthode de rénovation à l'identique : respect des formes et des matériaux d'origine, 
                  mais avec les performances énergétiques modernes.
                </p>
                <p>
                  Aujourd’hui, l’entreprise est implantée dans le <strong>Sud-Ouest</strong> et intervient sur tous types de menuiseries, des maisons de caractère périgourdines aux demeures bordelaises, en passant par les bastides du Lot-et-Garonne et les habitations traditionnelles du Lot.
                </p>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Une ouverture nationale</h3>
                  <p>
                    Bien ancrés dans le Sud-Ouest, nous restons également ouverts aux projets sur d’autres régions. Chaque fenêtre en bois raconte une histoire : nous avons à cœur de la préserver, où qu’elle se trouve en France.
                  </p>
                </div>
            </div>
          </div>
          
          <div 
            className="bg-cover bg-center rounded-2xl shadow-lg"
            style={{ backgroundImage: `url(${history})` }}
          >
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Nos valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#30628D]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#30628D]/20 transition-colors">
                <Heart className="text-[#30628D]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Passion du métier</h3>
              <p className="text-gray-600 leading-relaxed">
                Chaque projet est abordé avec la passion de l’artisan. Nous prenons le temps nécessaire 
                pour comprendre vos besoins et respecter l’âme de votre menuiserie.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#30628D]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#30628D]/20 transition-colors">
                <Target className="text-[#30628D]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence technique</h3>
              <p className="text-gray-600 leading-relaxed">
                Notre expertise technique nous permet d'allier méthodes traditionnelles et innovations 
                modernes pour obtenir des résultats durables et efficaces.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#30628D]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#30628D]/20 transition-colors">
                <Shield className="text-[#30628D]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Engagement qualité</h3>
              <p className="text-gray-600 leading-relaxed">
                Depuis plus de 20 ans, notre savoir-faire éprouvé et notre suivi personnalisé garantissent
                 une rénovation à l’identique, alliant préservation du bois et absence de démarches administratives.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Notre équipe</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="">
                  <img
                    src={history2}
                    alt="Olivier Rey"
                    className="w-full h-auto rounded-md object-cover"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Olivier Rey</h3>
                  <p className="text-[#30628D] font-semibold mb-2">Fondateur & Artisan</p>
                  <p className="text-sm text-gray-600 mb-4">06 20 60 96 43</p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Parcours professionnel</h4>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#30628D] rounded-full mt-2"></div>
                      <div>
                        <strong>2013 – Débuts avec DVRénov</strong>
                        <p>En 2013, je découvre ma passion pour le bois, une matière noble qui me séduit immédiatement. Restaurer et préserver devient une évidence, avec la volonté de contribuer à la sauvegarde du patrimoine architectural.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#30628D] rounded-full mt-2"></div>
                      <div>
                        <strong>2024 – Création de KROO by DVRénov</strong>
                        <p>En 2024 naît KROO by DVRénov, avec l’ambition de faire connaître la rénovation à l’identique des fenêtres en bois et de développer cette expertise dans le Sud-Ouest, en s’appuyant sur une technique perfectionnée.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-[#30628D] to-[#624832] rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold text-center mb-12">KROObydvrenov en chiffres</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">Années d'expérience</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Projets réalisés</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-90">Clients satisfaits</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold mb-2">10</div>
                <div className="text-sm opacity-90">Ans de garantie</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Nos services</h2>
          <div className="relative xl:grid xl:grid-cols-6 xl:gap-6 ">
            <div className="flex overflow-x-auto snap-x snap-mandatory xl:contents scrollbar-hide -mx-4 px-2 xl:px-0 xl:mx-0">
              <div className="w-4/5 flex-shrink-0 snap-center px-2 xl:w-auto xl:px-0 xl:contents ">
                <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow flex flex-col justify-center h-full">
                  <h3 className="font-semibold text-gray-900 mb-2">Rénovation à l’identique</h3>
                  <p className="text-sm text-gray-600">Restaurer vos fenêtres bois en conservant leur style d’origine et leur authenticité.</p>
                </div>
              </div>
              <div className="w-4/5 flex-shrink-0 snap-center px-2 xl:w-auto xl:px-0 xl:contents ">
                <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow flex flex-col justify-center h-full">
                  <h3 className="font-semibold text-gray-900 mb-2">Double vitrage haute performance</h3>
                  <p className="text-sm text-gray-600">Mise à niveau énergétique grâce à l’intégration de vitrages modernes et isolants.</p>
                </div>
              </div>
              <div className="w-4/5 flex-shrink-0 snap-center px-2 xl:w-auto xl:px-0 xl:contents ">
                <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow flex flex-col justify-center h-full">
                  <h3 className="font-semibold text-gray-900 mb-2">Atelier mobile sur chantier</h3>
                  <p className="text-sm text-gray-600">Fenêtres déposées le matin, rénovées et reposées le soir : confort et réactivité.</p>
                </div>
              </div>
              <div className="w-4/5 flex-shrink-0 snap-center px-2 xl:w-auto xl:px-0 xl:contents ">
                <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow flex flex-col justify-center h-full">
                  <h3 className="font-semibold text-gray-900 mb-2">Entretien et suivi</h3>
                  <p className="text-sm text-gray-600">Maintenance préventive pour prolonger la durée de vie de vos menuiseries bois.</p>
                </div>
              </div>
              <div className="w-4/5 flex-shrink-0 snap-center px-2 xl:w-auto xl:px-0 xl:contents ">
                <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow flex flex-col justify-center h-full">
                  <h3 className="font-semibold text-gray-900 mb-2">Patrimoine valorisé</h3>
                  <p className="text-sm text-gray-600">Solutions adaptées aux bâtiments anciens, aux demeures de caractère et aux pièces uniques (cintrées, vitraux, œil-de-bœuf).</p>
                </div>
              </div>
              <div className="w-4/5 flex-shrink-0 snap-center px-2 xl:w-auto xl:px-0 xl:contents ">
                <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow flex flex-col justify-center h-full">
                  <h3 className="font-semibold text-gray-900 mb-2">Diagnostic personnalisé</h3>
                  <p className="text-sm text-gray-600">Étude technique complète et conseils sur mesure pour vos projets de rénovation.</p>
                </div>
              </div>
            </div>
            {/* Scroll indicator for mobile */}
            <div className="xl:hidden absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 backdrop-blur-sm rounded-full p-1 pointer-events-none animate-slide-and-fade">
              <ArrowRight size={20} className="text-[#30628D]" />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Prêt à rénover vos fenêtres ?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un diagnostic gratuit et découvrez comment nous pouvons redonner vie à vos menuiseries.
          </p>
          <div className="flex flex-col items-center sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/devis" className="inline-block bg-[#30628D] text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Demander un devis gratuit
            </Link>
            <Link to="/contact" className="inline-block border-2 border-[#624832] text-[#624832] px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#624832] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Nous appeler
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;