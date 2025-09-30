import React, { Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Star, Phone } from 'lucide-react';

interface WindowTypesProps {
  translations: any;
}

const WindowTypes: React.FC<WindowTypesProps> = ({ translations }) => {
  const { type } = useParams();

  const windowTypesData = {
    bois: {
      title: "Fenêtres en Bois - Rénovation & Restauration",
      subtitle: "Spécialiste de la rénovation de fenêtres en bois traditionnel",
      image: "https://images.pexels.com/photos/5691720/pexels-photo-5691720.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `# Rénovation de Fenêtres en Bois : Notre Spécialité

## Pourquoi choisir la rénovation de fenêtres en bois ?

Le bois est un matériau noble qui traverse les siècles. Nos fenêtres en bois rénovées allient **charme authentique** et **performances modernes**. Chez KROObydvrenov, nous maîtrisons parfaitement les techniques de restauration qui permettent de redonner vie à vos menuiseries anciennes.

### Les avantages du bois rénové

**Esthétique intemporelle**
Le bois apporte une chaleur et une authenticité incomparables à votre habitat. Chaque essence a ses propres caractéristiques et son grain unique.

**Isolation naturelle**
Le bois possède naturellement d'excellentes propriétés isolantes, tant thermiques qu'acoustiques. Avec nos techniques de rénovation, nous optimisons ces performances.

**Durabilité exceptionnelle**
Une fenêtre en bois bien entretenue peut durer plusieurs décennies. Nos traitements préventifs garantissent une longévité maximale.

**Respect de l'environnement**
La rénovation évite le gaspillage et préserve les ressources naturelles. C'est un choix écologique et responsable.

## Notre processus de rénovation

### 1. Diagnostic complet
- Évaluation de l'état du bois
- Détection des zones d'humidité
- Analyse des performances actuelles
- Identification des pathologies

### 2. Décapage professionnel
- Techniques adaptées à chaque type de bois
- Préservation de l'intégrité du matériau
- Élimination des anciennes peintures
- Préparation optimale des surfaces

### 3. Traitement et réparation
- Traitement anti-insectes et anti-champignons
- Consolidation des zones fragilisées
- Greffes de bois si nécessaire
- Renforcement des assemblages

### 4. Amélioration énergétique
- Installation de double vitrage performant
- Amélioration de l'étanchéité
- Pose de joints haute performance
- Optimisation des mécanismes

### 5. Finitions de qualité
- Application de sous-couches adaptées
- Peinture ou lasure selon vos préférences
- Protection longue durée
- Traitement des ferrures

## Types de bois que nous traitons

**Chêne** - Robuste et durable, idéal pour les fenêtres de caractère
**Pin** - Économique et facile à travailler
**Méranti** - Excellent rapport qualité-prix
**Bois exotiques** - Pour des projets haut de gamme

## Nos garanties

- **Garantie décennale** sur tous nos travaux
- **Certification RGE** pour vos aides financières
- **Assurance 10M€** pour votre tranquillité
- **Service après-vente** réactif et professionnel`,
      benefits: [
        "Préservation du patrimoine architectural",
        "Amélioration des performances énergétiques",
        "Économies sur le chauffage",
        "Valorisation de votre bien immobilier",
        "Respect de l'environnement",
        "Éligibilité aux aides financières"
      ]
    },
    pvc: {
      title: "Fenêtres PVC - Solutions Modernes",
      subtitle: "Performance énergétique et facilité d'entretien",
      image: "https://images.pexels.com/photos/5691725/pexels-photo-5691725.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `# Fenêtres PVC : Performance et Modernité

## Les avantages du PVC

Le PVC est devenu incontournable dans la menuiserie moderne grâce à ses **excellentes performances** et sa **facilité d'entretien**. Nos fenêtres PVC offrent un rapport qualité-prix exceptionnel.

### Performances énergétiques optimales

**Isolation thermique**
Les profilés PVC multi-chambres offrent une isolation thermique remarquable, réduisant significativement vos factures de chauffage.

**Étanchéité parfaite**
Les joints d'étanchéité intégrés garantissent une protection optimale contre les infiltrations d'air et d'eau.

**Isolation acoustique**
Le PVC associé à un vitrage adapté offre une excellente protection contre les nuisances sonores.

## Notre gamme PVC

### Gamme Confort
- Profilé 5 chambres
- Coefficient Uw jusqu'à 1,1 W/m².K
- Large choix de couleurs
- Excellent rapport qualité-prix

### Gamme Performance
- Profilé 6 chambres
- Coefficient Uw jusqu'à 0,9 W/m².K
- Renforts acier intégrés
- Finitions premium

### Gamme Prestige
- Profilé 7 chambres
- Coefficient Uw jusqu'à 0,8 W/m².K
- Design contemporain
- Options personnalisées

## Installation et garanties

Nos équipes certifiées assurent une **pose parfaite** selon les règles de l'art. Chaque installation est garantie 10 ans.`,
      benefits: [
        "Excellent rapport qualité-prix",
        "Entretien minimal requis",
        "Résistance aux intempéries",
        "Large gamme de couleurs",
        "Recyclable à 100%",
        "Installation rapide"
      ]
    },
    aluminium: {
      title: "Fenêtres Aluminium - Design Contemporain",
      subtitle: "Élégance moderne et performance thermique",
      image: "https://images.pexels.com/photos/5691730/pexels-photo-5691730.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `# Fenêtres Aluminium : L'Alliance du Design et de la Performance

## Pourquoi choisir l'aluminium ?

L'aluminium représente le **summum de la modernité** en menuiserie. Matériau de choix pour l'architecture contemporaine française, il offre des possibilités de design infinies tout en garantissant d'excellentes performances énergétiques.

### Design et esthétique

**Finesse des profilés**
L'aluminium permet de créer des fenêtres aux lignes épurées avec des profilés très fins, maximisant les surfaces vitrées.

**Couleurs illimitées**
Grâce au thermolaquage, toutes les couleurs RAL sont possibles, y compris les effets métallisés et texturés.

**Formes sur mesure**
L'aluminium se prête à toutes les formes : cintrées, triangulaires, trapézoïdales, parfait pour l'architecture française moderne.

## Technologies avancées

### Rupture de pont thermique
Nos profilés aluminium intègrent une **rupture de pont thermique** performante pour une isolation optimale.

### Systèmes innovants
- **Ouvrants cachés** pour un design épuré
- **Systèmes coulissants** à galandage
- **Fenêtres oscillo-battantes** haute performance
- **Baies vitrées panoramiques** pour plus de lumière

## Nos gammes aluminium

### Gamme Essentielle
- Profilé 60mm avec rupture de pont thermique
- Coefficient Uw jusqu'à 1,4 W/m².K
- Finitions standards (blanc, gris, marron)
- Excellent rapport qualité-prix

### Gamme Performance
- Profilé 70mm haute isolation
- Coefficient Uw jusqu'à 1,1 W/m².K
- Large choix de couleurs RAL
- Quincaillerie renforcée

### Gamme Prestige
- Profilé 80mm ultra-performant
- Coefficient Uw jusqu'à 0,9 W/m².K
- Finitions premium (anodisé, effet bois)
- Options sur mesure

## Performances énergétiques

### Isolation thermique
Nos fenêtres aluminium atteignent des **performances exceptionnelles** :
- Coefficient Uw de 0,9 à 1,4 W/m².K selon la gamme
- Étanchéité à l'air classe A4
- Résistance au vent jusqu'à classe C5

### Isolation acoustique
- Réduction sonore jusqu'à 42 dB
- Vitrages acoustiques disponibles
- Parfait pour les environnements urbains

## Applications spécialisées

**Rénovation de bâtiments**
Idéal pour moderniser l'aspect d'un bâtiment tout en respectant l'architecture française

**Projets sur mesure**
Adaptation à tous types de contraintes architecturales

**Bâtiments BBC et passifs**
Performances énergétiques optimales pour les constructions écologiques

## Avantages environnementaux

### Recyclabilité
L'aluminium est **recyclable à 100%** sans perte de qualité, contribuant à l'économie circulaire française.

### Durabilité
- Résistance à la corrosion
- Aucun entretien nécessaire
- Durée de vie supérieure à 50 ans

### Efficacité énergétique
Nos fenêtres aluminium contribuent à **réduire l'empreinte carbone** de votre habitat.

## Installation et garanties

### Pose professionnelle
Nos équipes certifiées **RGE** assurent une installation parfaite selon les normes françaises.

### Garanties complètes
- **Garantie décennale** sur tous nos travaux
- **Garantie fabricant** 10 ans sur les profilés
- **Service après-vente** réactif

## Financement et aides

Nos fenêtres aluminium haute performance sont **éligibles aux aides** :
- MaPrimeRénov'
- Éco-PTZ
- CEE (Certificats d'Économies d'Énergie)
- TVA réduite à 5,5%`,
      benefits: [
        "Design moderne et épuré",
        "Durabilité exceptionnelle",
        "Résistance à la corrosion",
        "Recyclable à 100%",
        "Aucun entretien requis",
        "Performances énergétiques optimales"
      ]
    },
    mixte: {
      title: "Fenêtres Mixtes Bois-Aluminium",
      subtitle: "Le meilleur des deux matériaux",
      image: "https://images.pexels.com/photos/5691735/pexels-photo-5691735.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `# Fenêtres Mixtes Bois-Aluminium : L'Excellence Combinée

## Le concept mixte bois-aluminium

Les fenêtres mixtes associent la **chaleur du bois** à l'intérieur et la **résistance de l'aluminium** à l'extérieur. Cette combinaison révolutionnaire offre le meilleur des deux matériaux pour l'habitat français moderne.

### Avantages de la technologie mixte

**Côté intérieur : la noblesse du bois**
- Chaleur et authenticité du matériau naturel
- Isolation thermique et acoustique naturelle
- Possibilité de personnalisation (lasure, peinture)
- Respect de l'architecture traditionnelle française

**Côté extérieur : la protection aluminium**
- Résistance totale aux intempéries
- Aucun entretien nécessaire
- Design moderne et épuré
- Large choix de couleurs

## Nos gammes mixtes

### Gamme Tradition
- Bois pin ou chêne + aluminium standard
- Coefficient Uw jusqu'à 1,2 W/m².K
- Finitions classiques
- Idéal pour la rénovation patrimoniale

### Gamme Contemporaine
- Bois moderne + aluminium design
- Coefficient Uw jusqu'à 1,0 W/m².K
- Formes et couleurs personnalisées
- Parfait pour l'architecture actuelle

### Gamme Prestige
- Essences nobles + aluminium haute performance
- Coefficient Uw jusqu'à 0,8 W/m².K
- Finitions premium sur mesure
- Pour les projets d'exception

## Essences de bois disponibles

### Bois européens
- **Chêne français** : robustesse et longévité exceptionnelles
- **Pin sylvestre** : excellent rapport qualité-prix
- **Mélèze** : résistance naturelle et esthétique

### Bois exotiques
- **Méranti** : stabilité dimensionnelle
- **Moabi** : essence africaine durable
- **Iroko** : résistance naturelle aux insectes

## Performance énergétique

### Isolation thermique optimale
Les fenêtres mixtes atteignent des **performances énergétiques exceptionnelles** grâce à la combinaison des matériaux :
- Coefficient Uw de 0,8 à 1,2 W/m².K selon la gamme
- Triple vitrage disponible pour les maisons passives
- Rupture de pont thermique intégrée

### Étanchéité parfaite
- Étanchéité à l'air classe A4
- Étanchéité à l'eau classe E1200
- Résistance au vent jusqu'à classe C5

### Confort acoustique
- Isolation acoustique jusqu'à 45 dB
- Vitrages acoustiques spécialisés disponibles
- Idéal pour les environnements urbains bruyants

## Respect de l'environnement

### Matériaux durables
- **Bois certifié PEFC** issu de forêts gérées durablement
- **Aluminium recyclé** à 75% minimum
- **Finitions écologiques** sans solvants nocifs

### Bilan carbone optimisé
- Stockage du CO2 dans le bois
- Recyclabilité totale de l'aluminium
- Contribution à l'efficacité énergétique du bâtiment

## Applications spécialisées

### Rénovation patrimoniale
- Respect des contraintes architecturales
- Conservation de l'aspect bois traditionnel
- Amélioration des performances énergétiques

### Construction neuve
- Intégration parfaite dans l'architecture moderne
- Performances BBC et maison passive
- Design contemporain

### Projets sur mesure
- Formes cintrées et spéciales
- Grandes dimensions possibles
- Couleurs et finitions personnalisées

## Installation spécialisée

### Savoir-faire technique
La pose de fenêtres mixtes demande une **expertise particulière** que nos équipes certifiées RGE maîtrisent parfaitement.

### Points critiques
- Étanchéité parfaite entre les matériaux
- Réglage précis des mécanismes
- Isolation périphérique optimisée
- Finitions soignées

### Garanties
- **Garantie décennale** sur l'installation
- **Garantie fabricant** 10 ans
- **Service après-vente** spécialisé

## Entretien et durabilité

### Côté intérieur (bois)
- Entretien simple avec produits adaptés
- Rénovation possible (ponçage, lasure)
- Durée de vie : 30-50 ans

### Côté extérieur (aluminium)
- **Aucun entretien** nécessaire
- Nettoyage à l'eau savonneuse
- Durée de vie : 50+ ans

## Financement et aides

Nos fenêtres mixtes haute performance sont **éligibles à toutes les aides** :
- **MaPrimeRénov'** : jusqu'à 100€ par équipement
- **Éco-PTZ** : financement jusqu'à 30 000€
- **CEE** : primes énergie
- **TVA réduite** à 5,5%

Notre certification **RGE** vous garantit l'accès à ces financements.`,
      benefits: [
        "Esthétique bois à l'intérieur",
        "Protection aluminium extérieure",
        "Performances énergétiques maximales",
        "Durabilité exceptionnelle",
        "Entretien minimal",
        "Personnalisation totale",
        "Respect de l'environnement",
        "Éligible aux aides financières"
      ]
    }
  };

  const data = windowTypesData[type as keyof typeof windowTypesData];

  if (!data) {
    return (
      <div className="pt-40 pb-20 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Type de fenêtre non trouvé</h1>
          <Link to="/" className="inline-flex items-center space-x-2 text-[#30628D] hover:text-[#30628D]/80 transition-colors">
            <ArrowLeft size={20} />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-[#30628D] hover:text-[#30628D]/80 transition-colors">
            <ArrowLeft size={20} />
            <span>Retour à l'accueil</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {data.subtitle}
            </p>
            <div className="flex flex-col items-center sm:flex-row sm:justify-start justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/devis" className="inline-block bg-[#30628D] text-white px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                Demander un devis
              </Link>
              <Link to="/call-request" className="inline-block border-2 border-[#624832] text-[#624832] px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#624832] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                Être rappelé
              </Link>
            </div>
          </div>
          <div>
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed">
              {data.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold text-gray-900 mt-10 mb-6">
                      {paragraph.replace('# ', '')}
                    </h1>
                  );
                } else if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-5">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <div key={index} className="bg-[#30628D]/10 border-l-4 border-[#30628D] p-4 rounded-r-lg my-4">
                      <p className="text-base font-semibold text-gray-900">
                        {paragraph.replace(/\*\*/g, '')}
                      </p>
                    </div>
                  );
                } else if (paragraph.includes('\n- ')) {
                  const items = paragraph.split('\n').filter(line => line.trim().startsWith('- '));
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-4 pl-4">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-base leading-relaxed text-gray-700">{item.replace(/- /g, '')}</li>
                      ))}
                    </ul>
                  );
                } else {
                  const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                  return (
                    <p key={index} className="text-base leading-relaxed text-gray-700 mb-4">
                      {parts.map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={i}>{part.slice(2, -2)}</strong>;
                        }
                        return part;
                      })}
                    </p>
                  );
                }
              })}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Avantages principaux</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {data.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#30628D] to-[#624832] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Intéressé par ce type de fenêtre ?</h3>
            <p className="text-lg opacity-90 mb-6">
              Contactez Olivier Rey pour un diagnostic gratuit et un devis personnalisé
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/call-request" className="inline-flex items-center justify-center space-x-2 bg-white text-[#30628D] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                <Phone size={20} />
                <span>Être rappelé</span>
              </Link>
              <Link to="/devis" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#30628D] transition-colors font-semibold">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowTypes;