import { useState, useEffect, useCallback } from 'react';

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

export const useLocalStorageArticles = () => {
  const getArticlesFromStorage = useCallback((): Article[] => {
    try {
      const stored = localStorage.getItem('dashboardArticles');
      return stored ? JSON.parse(stored) : [];
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