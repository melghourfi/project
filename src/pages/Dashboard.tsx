import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { Edit, Archive, Trash2, RotateCcw, Copy, Eye, PlusCircle, List, Star, Activity } from 'lucide-react';
import { translations } from '../data/translations'; // Import translations
import 'react-quill/dist/quill.snow.css'; // import styles

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  featured?: boolean;
  archived?: boolean;
  deletedAt?: string | null;
}

const ADMIN_PASSWORD = 'admin'; // Replace with a more secure password, ideally from environment variables

const Dashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [activityLog, setActivityLog] = useState<string[]>([]);

  const [activeView, setActiveView] = useState<'form' | 'list' | 'activity'>('form');
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [newArticle, setNewArticle] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    author: 'Olivier Rey',
    date: new Date().toISOString().split('T')[0],
    category: 'conseil',
    featured: false,
    archived: false,
  });

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('isAdminAuthenticated');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }

    try {
      const stored = localStorage.getItem('dashboardArticles');
      if (stored) {
        const parsedArticles: Article[] = JSON.parse(stored);
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const validArticles = parsedArticles.filter(article => {
          if (!article.deletedAt) return true;
          const deletedDate = new Date(article.deletedAt);
          return deletedDate > sevenDaysAgo;
        });

        if (parsedArticles.length > 0) {
          setArticles(validArticles);
          return;
        }
      }

    } catch (error) {
      console.error('Error loading articles from localStorage:', error);
    }

    try {
      const storedLog = localStorage.getItem('activityLog');
      if (storedLog) {
        setActivityLog(JSON.parse(storedLog));
      }
    } catch (error) {
      console.error('Error loading activity log from localStorage:', error);
    }
  }, []);

  const logActivity = (action: string) => {
    const newLogEntry = `${new Date().toLocaleString()}: ${action}`;
    const updatedLog = [newLogEntry, ...activityLog];
    setActivityLog(updatedLog);
    localStorage.setItem('activityLog', JSON.stringify(updatedLog));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      setError('');
      logActivity('User logged in');
    } else {
      setError('Incorrect password.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    const checkedValue = (e.target as HTMLInputElement).checked;

    setNewArticle(prev => ({
      ...prev,
      [name]: isCheckbox ? checkedValue : value,
    }));
  };

  const handleContentChange = (content: string) => {
    setNewArticle(prev => ({
      ...prev,
      content: content,
    }));
  };

  const handleEditClick = (article: Article) => {
    setEditingArticle(article);
    setNewArticle({ ...article, date: article.date || new Date().toISOString().split('T')[0] } as any);
    setActiveView('form');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let updatedArticles;
    if (editingArticle) {
      // Update existing article
      updatedArticles = articles.map(article =>
        article.id === editingArticle.id ? { ...newArticle, id: editingArticle.id } : article
      );
      logActivity(`Article "${newArticle.title}" updated`);
      alert('Article mis à jour avec succès !');
    } else {
      // Add new article
      const articleToSave: Article = {
        ...newArticle,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
      };
      updatedArticles = [...articles, articleToSave];
      logActivity(`Article "${newArticle.title}" created`);
      alert('Article publié avec succès !');
    }

    setArticles(updatedArticles);
    localStorage.setItem('dashboardArticles', JSON.stringify(updatedArticles));

    // Reset form
    setNewArticle({
      title: '',
      excerpt: '',
      content: '',
      image: '',
      author: 'Olivier Rey',
      date: new Date().toISOString().split('T')[0],
      category: 'conseil',
      featured: false,
      archived: false,
    });
    setEditingArticle(null);
    setActiveView('list');
  };

  const toggleArchiveArticle = (id: number) => {
    const articleToToggle = articles.find(article => article.id === id);
    if (articleToToggle) {
      const confirmationText = articleToToggle.archived ? 'désarchiver' : 'archiver';
      if (window.confirm(`Êtes-vous sûr de vouloir ${confirmationText} cet article ?`)) {
        const updatedArticles = articles.map(article =>
          article.id === id ? { ...article, archived: !article.archived } : article
        );
        setArticles(updatedArticles);
        localStorage.setItem('dashboardArticles', JSON.stringify(updatedArticles));
        logActivity(`Article "${articleToToggle.title}" ${articleToToggle.archived ? 'unarchived' : 'archived'}`);
      }
    }
  };

  const deleteArticle = (id: number) => {
    const articleToDelete = articles.find(article => article.id === id);
    if (articleToDelete) {
      const updatedArticles = articles.map(article =>
        article.id === id ? { ...article, deletedAt: new Date().toISOString() } : article
      );
      setArticles(updatedArticles);
      localStorage.setItem('dashboardArticles', JSON.stringify(updatedArticles));
      logActivity(`Article "${articleToDelete.title}" deleted`);
      // If we are deleting the article being edited, clear the form
      if (editingArticle && editingArticle.id === id) setEditingArticle(null);
    }
  };

  const duplicateArticle = (id: number) => {
    const articleToDuplicate = articles.find(article => article.id === id);
    if (articleToDuplicate) {
      if (window.confirm(`Êtes-vous sûr de vouloir dupliquer cet article : "${articleToDuplicate.title}" ?`)) {
        const duplicatedArticle: Article = {
          ...articleToDuplicate,
          id: Date.now(),
          title: `${articleToDuplicate.title} (Copie)`,
          date: new Date().toISOString().split('T')[0],
          featured: false, // Duplicates are not featured by default
          archived: false, // Duplicates are active by default
        };

        const updatedArticles = [...articles, duplicatedArticle];
        setArticles(updatedArticles);
        localStorage.setItem('dashboardArticles', JSON.stringify(updatedArticles));
        logActivity(`Article "${articleToDuplicate.title}" duplicated`);
        alert('Article dupliqué avec succès !');
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-28 pb-20 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              className="w-full p-3 border rounded-lg bg-white text-gray-900"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="w-full bg-[#30628D] text-white py-3 rounded-lg font-semibold">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 h-screen flex text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 max-w-xs bg-white dark:bg-gray-800 p-6 flex flex-col border-r border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Dashboard</h1>
        <nav className="flex flex-col space-y-2">
          <button 
            onClick={() => { setActiveView('form'); setEditingArticle(null); setNewArticle({ title: '', excerpt: '', content: '', image: '', author: 'Olivier Rey', date: new Date().toISOString().split('T')[0], category: 'conseil', featured: false, archived: false }); }}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors font-medium ${activeView === 'form' && !editingArticle ? 'bg-[#30628D] text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
          >
            <PlusCircle size={20} />
            <span>Publier un article</span>
          </button>
          <button 
            onClick={() => setActiveView('list')}
            className={`flex items-center justify-between p-3 rounded-lg transition-colors font-medium ${activeView === 'list' ? 'bg-[#30628D] text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
          >
            <div className="flex items-center space-x-3">
              <List size={20} />
              <span>Gérer les articles</span>
            </div>
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${activeView === 'list' ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-700'}`}>
              {articles.filter(a => !a.archived && !a.deletedAt).length}
            </span>
          </button>
          <button 
            onClick={() => setActiveView('activity')}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors font-medium ${activeView === 'activity' ? 'bg-[#30628D] text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
          >
            <Activity size={20} />
            <span>Activité</span>
          </button>
        </nav>
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sauvegarde</h2>
          <div className="flex flex-col space-y-2">
            <button
              onClick={backupArticles}
              className="flex items-center space-x-3 p-3 rounded-lg transition-colors font-medium hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              <span>Sauvegarder les articles</span>
            </button>
            <button
              onClick={restoreArticles}
              className="flex items-center space-x-3 p-3 rounded-lg transition-colors font-medium hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              <span>Restaurer les articles</span>
            </button>
          </div>
        </div>
        <div className="mt-auto text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} KROObydvrenov</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8 flex flex-col overflow-hidden h-full">
        {activeView === 'form' && (
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col h-full">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{editingArticle ? 'Modifier l\'article' : 'Publier un nouvel article'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-grow overflow-hidden">
              <div className="grid grid-cols-2 gap-6">
                <input name="title" value={newArticle.title} onChange={handleInputChange} placeholder="Titre" required className="w-full p-3 border rounded bg-white text-gray-900" />
                <input name="image" value={newArticle.image} onChange={handleInputChange} placeholder="URL de l\'image" required className="w-full p-3 border rounded bg-white text-gray-900" />
              </div>
              <textarea name="excerpt" value={newArticle.excerpt} onChange={handleInputChange} placeholder="Petite description" required className="w-full p-3 border rounded bg-white text-gray-900" rows={2}></textarea>
              <div className="flex-grow overflow-hidden relative pb-8">
                <ReactQuill theme="snow" value={newArticle.content} onChange={handleContentChange} className="h-full" />
              </div>
              <div className="mt-auto">
                <div className="grid grid-cols-3 gap-4">
                  <input name="author" value={newArticle.author} onChange={handleInputChange} placeholder="Auteur" required className="w-full p-3 border rounded bg-white text-gray-900" />
                  <input type="date" name="date" value={newArticle.date} onChange={handleInputChange} placeholder="Date de publication" required className="w-full p-3 border rounded bg-white text-gray-900" />
                  <select name="category" value={newArticle.category} onChange={handleInputChange} className="w-full p-3 border rounded bg-white text-gray-900">
                    <option value="conseil">Conseil</option>
                    <option value="renovation">Rénovation</option>
                    <option value="financement">Financement</option>
                    <option value="technique">Technique</option>
                  </select>
                </div>
                <div className="flex items-center mt-4">
                  <input type="checkbox" id="featured" name="featured" checked={newArticle.featured} onChange={handleInputChange} className="mr-2 h-4 w-4" />
                  <label htmlFor="featured" className="text-gray-900">Mettre en avant sur la page d\'accueil ?</label>
                </div>
                <div className="flex space-x-4 mt-6">
                  <button type="submit" className="w-full bg-[#30628D] text-white py-3 rounded-lg font-semibold">{editingArticle ? 'Mettre à jour' : 'Publier'}</button>
                  {editingArticle && (
                    <button type="button" onClick={() => { setEditingArticle(null); setActiveView('list'); setNewArticle({ title: '', excerpt: '', content: '', image: '', author: 'Olivier Rey', readTime: '5 min', category: 'conseil', featured: false, archived: false }); }} className="w-full bg-gray-500 text-white py-3 rounded-lg font-semibold mt-2">
                      Annuler
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        )}
        
        {activeView === 'list' && (
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col h-full overflow-hidden">
              <div className="h-2/3 flex flex-col">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex-shrink-0">Articles Actifs</h2>
                <div className="space-y-4 overflow-y-auto flex-grow">
                  {articles.filter(a => !a.archived && !a.deletedAt).map(article => (
                    <div key={article.id} className="p-4 border rounded-lg flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">{article.title}</h3>
                        <p className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString()}</p>
                      </div>
                      <div className="flex space-x-1">
                        <button onClick={() => handleEditClick(article)} className="p-2 text-blue-600 hover:text-blue-800" title="Modifier"><Edit size={18} /></button>
                        <a href={`/blog/${article.id}`} target="_blank" rel="noopener noreferrer" className="p-2 text-green-600 hover:text-green-800" title="Voir"><Eye size={18} /></a>
                        <button onClick={() => duplicateArticle(article.id)} className="p-2 text-gray-600 hover:text-gray-800" title="Dupliquer"><Copy size={18} /></button>
                        <button onClick={() => toggleArchiveArticle(article.id)} className="p-2 text-yellow-600 hover:text-yellow-800" title="Archiver"><Archive size={18} /></button>
                        <button onClick={() => deleteArticle(article.id)} className="p-2 text-red-600 hover:text-red-800" title="Supprimer"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-1/3 flex flex-col pt-6">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex-shrink-0">Articles Archivés</h2>
                <div className="space-y-4 overflow-y-auto flex-grow">
                  {articles.filter(a => a.archived && !a.deletedAt).map(article => (
                    <div key={article.id} className="p-4 border rounded-lg flex justify-between items-center bg-gray-50">
                      <div>
                        <h3 className="font-semibold text-gray-500 line-through">{article.title}</h3>
                        <p className="text-sm text-gray-400">{new Date(article.date).toLocaleDateString()}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button onClick={() => toggleArchiveArticle(article.id)} className="p-2 text-green-600 hover:text-green-800" title="Désarchiver"><RotateCcw size={18} /></button>
                        <button onClick={() => deleteArticle(article.id)} className="p-2 text-red-600 hover:text-red-800" title="Supprimer"><Trash2- size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        )}

        {activeView === 'activity' && (
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col h-full">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Activité Récente</h2>
            <div className="space-y-4 overflow-y-auto">
              {activityLog.map((log, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gray-50">
                  <p className="text-sm text-gray-700">{log}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
