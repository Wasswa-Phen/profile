import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured }) => {
  if (featured) {
    return (
      <article className="featured-article-card">
        <div className="featured-image">
          <img src={article.image} alt={article.title} />
        </div>

        <div className="featured-content">
          <span className="badge-tag badge-blue mb-3">{article.category}</span>
          <h2 className="heading-md mb-3">{article.title}</h2>
          <p className="article-summary mb-4">{article.summary}</p>

          <div className="article-footer">
            <span className="article-date">{article.date}</span>
            <a href={`#article-${article.id}`} className="read-link">
              Read Article <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <style>{`
          .featured-article-card {
            background: #FFFFFF;
            border: 1px solid var(--border-light);
            border-radius: var(--radius-hero);
            overflow: hidden;
            display: grid;
            grid-template-columns: 1fr 1fr;
            box-shadow: var(--shadow-sm);
            margin-bottom: 48px;
            transition: box-shadow var(--transition-normal);
          }

          .featured-article-card:hover {
            box-shadow: var(--shadow-md);
          }

          .featured-image {
            width: 100%;
            height: 100%;
            min-height: 320px;
          }

          .featured-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .featured-content {
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .article-summary {
            font-size: 0.9375rem;
            line-height: 1.6;
            color: var(--text-secondary);
          }

          .article-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
            padding-top: 16px;
          }

          .article-date {
            font-size: 0.875rem;
            color: var(--text-muted);
            font-weight: 500;
          }

          .read-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-weight: 700;
            font-size: 0.9375rem;
            color: var(--primary-orange);
            transition: gap var(--transition-fast);
          }

          .read-link:hover {
            gap: 10px;
          }

          .mb-3 { margin-bottom: 12px; }
          .mb-4 { margin-bottom: 16px; }

          @media (max-width: 864px) {
            .featured-article-card {
              grid-template-columns: 1fr;
            }
            .featured-image {
              min-height: 240px;
            }
            .featured-content {
              padding: 24px;
            }
          }
        `}</style>
      </article>
    );
  }

  return (
    <article className="standard-article-card">
      <div className="standard-image">
        <img src={article.image} alt={article.title} />
      </div>

      <div className="standard-content">
        <h3 className="card-title mb-2">{article.title}</h3>
        <p className="article-summary mb-3">{article.summary}</p>

        <div className="article-footer">
          <span className="article-date">{article.date}</span>
          <a href={`#article-${article.id}`} className="read-link">
            Read <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <style>{`
        .standard-article-card {
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-card);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .standard-article-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .standard-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
          background-color: #F8F4F0;
        }

        .standard-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }

        .standard-article-card:hover .standard-image img {
          transform: scale(1.03);
        }

        .standard-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .mb-2 { margin-bottom: 8px; }
        .mb-3 { margin-bottom: 12px; }
      `}</style>
    </article>
  );
};
