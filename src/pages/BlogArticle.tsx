import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { useLocalStorageArticles } from '../hooks/useLocalStorageArticles';

interface BlogArticleProps {
  translations: any;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ translations }) => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(null);
  const allArticles = useLocalStorageArticles();
  const navigate = useNavigate();

  useEffect(() => {
    const articles = allArticles.filter(a => !a.archived);
    const foundArticle = articles.find((a: any) => a.id.toString() === id);
    
    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      // Handle case where article is not found
      if (allArticles.length > 0) { // Only redirect if we are sure it's not a loading issue
        navigate('/blog');
      }
    }
  }, [id, allArticles, navigate]);

  if (!article) {
    return (
      <div className="pt-44 pb-20 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Link to="/blog" className="text-[#30628D] hover:underline">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-32 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back to blog */}
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-[#30628D] hover:text-[#30628D]/80 transition-colors">
            <ArrowLeft size={20} />
            <span>Retour au blog</span>
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                </div>
              </div>
              
              <button className="flex items-center space-x-2 text-gray-500 hover:text-[#30628D] transition-colors">
                <Share2 size={16} />
                <span onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: article.title,
                      text: article.excerpt,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Lien copié dans le presse-papiers !');
                  }
                }}>Partager</span>
              </button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg mx-auto">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-[#30628D] to-[#624832] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Besoin de conseils pour votre projet ?</h3>
            <p className="text-lg opacity-90 mb-6">
              Contactez notre équipe pour un diagnostic gratuit et des conseils personnalisés
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/call-request" className="inline-block bg-white text-[#30628D] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Être rappelé
              </Link>
              <Link to="/devis" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#30628D] hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Demander un devis
              </Link>
            </div>
          </div>
          {/* Additional Blog CTA: discover other articles */}
          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-block bg-[#30628D] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Découvrire nos autres articles de blog
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogArticle;