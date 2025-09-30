import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Search } from 'lucide-react';
import { useLocalStorageArticles } from '../hooks/useLocalStorageArticles';

interface BlogProps {
  translations: any;
}

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  archived?: boolean;
}

const Blog: React.FC<BlogProps> = ({ translations }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showMore, setShowMore] = useState(false);
  const allArticles = useLocalStorageArticles();

  const articles = useMemo(() => {
    const activeArticles = allArticles.filter(article => !article.archived && !article.deletedAt);
    return activeArticles;
  }, [allArticles]);

  const categories = [
    { id: 'all', name: 'Tous les articles' },
    { id: 'renovation', name: 'Rénovation' },
    { id: 'financement', name: 'Financement' },
    { id: 'conseil', name: 'Conseils' },
    { id: 'technique', name: 'Technique' }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-48 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{translations.blog.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.blog.subtitle}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Initial 3 articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {articles.slice(0, 3).map((article) => (
              <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#30628D] transition-colors line-clamp-2">
                    <Link to={`/blog/${article.id}`} className="hover:text-[#30628D] transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <button className="text-[#30628D] font-semibold hover:text-[#30628D]/80 transition-colors">
                    <Link to={`/blog/${article.id}`}>
                      {translations.blog.readMore} →
                    </Link>
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {/* Additional articles with fade animation */}
          {articles.length > 3 && (
            <>
              <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 ${showMore ? 'animate-fadeIn' : 'hidden'}`}>
                {articles.slice(3).map((article) => (
                  <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <User size={14} />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                        </div>
                      </div>
                      
                      <Link to={`/blog/${article.id}`}>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#30628D] transition-colors cursor-pointer line-clamp-2">
                          {article.title}
                        </h2>
                      </Link>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <button className="text-[#30628D] font-semibold hover:text-[#30628D]/80 transition-colors">
                        <Link to={`/blog/${article.id}`}>
                          {translations.blog.readMore} →
                        </Link>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Show More / Show Less Button */}
              <div className="text-center">
                {!showMore ? (
                  <button
                    onClick={() => setShowMore(true)}
                    className="bg-[#30628D] text-white px-8 py-3 rounded-lg hover:bg-[#30628D]/90 transition-colors font-semibold"
                  >
                    {translations.blog.showMore}
                  </button>
                ) : (
                  <button
                    onClick={() => setShowMore(false)}
                    className="border-2 border-[#30628D] text-[#30628D] px-8 py-3 rounded-lg hover:bg-[#30628D] hover:text-white transition-colors font-semibold"
                  >
                    {translations.blog.showLess}
                  </button>
                )}
              </div>
            </>
          )}

          {articles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucun article trouvé pour votre recherche.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;