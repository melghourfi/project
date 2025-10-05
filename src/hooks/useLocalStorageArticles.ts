import { useState, useEffect, useCallback } from 'react';
import { defaultArticles } from '../data/articles';

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
  tags: string[];
  featured?: boolean;
  archived?: boolean;
  deletedAt?: string | null;
}

const articleImageMap: { [key: string]: string } = {
  'article-1.png': defaultArticles[0].image,
  'article-2.webp': defaultArticles[1].image,
  'article-3.jpeg': defaultArticles[2].image,
};

export const useLocalStorageArticles = () => {
  const getArticlesFromStorage = useCallback((): Article[] => {
    try {
      const stored = localStorage.getItem('dashboardArticles');
      if (stored) {
        const articles: Article[] = JSON.parse(stored);
        return articles.map(article => {
          const imageName = article.image.split('/').pop(); // Extract file name
          if (imageName && articleImageMap[imageName]) {
            return { ...article, image: articleImageMap[imageName] };
          }
          return article;
        });
      }
      localStorage.setItem('dashboardArticles', JSON.stringify(defaultArticles));
      return defaultArticles;
    } catch (error) {
      console.error('Error loading articles from localStorage:', error);
      return [];
    }
  }, []);

  const [articles, setArticles] = useState<Article[]>(getArticlesFromStorage());

  useEffect(() => {
    const handleStorageChange = () => {
      setArticles(getArticlesFromStorage());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [getArticlesFromStorage]);

  return articles;
};