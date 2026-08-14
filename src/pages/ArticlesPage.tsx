import React, { useState } from 'react';
import { articlesData } from '../data/articles';
import type { Article } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { ArticleModal } from '../components/ArticleModal';

export const ArticlesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = ['All', 'Front-End', 'Media Engineering', 'Kingdom Leadership'];

  const featuredArticle = articlesData.find((a) => a.featured) || articlesData[0];
  
  const standardArticles = articlesData.filter((a) => !a.featured);

  const filteredArticles = activeCategory === 'All'
    ? standardArticles
    : standardArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="articles-page animate-fade-in">
      <div className="container">
        {/* HEADER */}
        <div className="page-header">
          <h1 className="heading-xl mb-2">Articles & Field Notes</h1>
          <p className="page-subtitle mb-4">Insights, updates, and deep dives from the PHENY team.</p>
        </div>

        {/* FEATURED ARTICLE HERO */}
        {featuredArticle && (
          <ArticleCard
            article={featuredArticle}
            featured={true}
            onOpenArticle={(art) => setSelectedArticle(art)}
          />
        )}

        {/* FILTER BAR */}
        <div className="filter-bar mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ARTICLES GRID */}
        <div className="articles-grid">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onOpenArticle={(art) => setSelectedArticle(art)}
            />
          ))}
        </div>
      </div>

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <style>{`
        .articles-page {
          padding: 56px 0 80px 0;
        }

        .page-header {
          margin-bottom: 40px;
        }

        .page-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
        }

        .filter-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .mb-2 { margin-bottom: 8px; }
        .mb-4 { margin-bottom: 24px; }

        @media (max-width: 768px) {
          .articles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
