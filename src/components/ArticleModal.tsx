import React, { useEffect } from 'react';
import { X, Calendar, Clock, Tag, Share2, Check, ExternalLink } from 'lucide-react';
import type { Article } from '../data/articles';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div
        className="modal-container article-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close article">
          <X size={20} />
        </button>

        <div className="article-modal-header">
          <span className="badge-tag badge-orange-subtle mb-3">
            <Tag size={12} style={{ marginRight: '6px' }} />
            {article.category}
          </span>
          <h2 className="heading-lg article-modal-title">{article.title}</h2>
          
          <div className="article-modal-meta">
            <span className="meta-item">
              <Calendar size={14} />
              {article.date}
            </span>
            {article.readTime && (
              <span className="meta-item">
                <Clock size={14} />
                {article.readTime}
              </span>
            )}
            <button className="share-btn" onClick={handleShare}>
              {copied ? <Check size={14} className="text-green" /> : <Share2 size={14} />}
              {copied ? 'Link Copied!' : 'Share Article'}
            </button>
          </div>
        </div>

        <div className="article-modal-banner">
          <img src={article.image} alt={article.title} />
        </div>

        <div className="article-modal-body">
          <p className="article-lead">{article.summary}</p>
          
          <div className="article-section">
            <h3>Key Takeaways & Framework</h3>
            <p>
              In modern technology environments across East Africa and beyond, building scalable digital systems demands an unyielding commitment to core engineering principles, user empathy, and purposeful execution.
            </p>
            <p>
              Whether deploying high-performance React front-ends, architecting live media distribution for ministry, or leading cross-functional teams at Aromax Technologies, successful outcomes stem from treating every system as a vehicle for real-world impact.
            </p>
          </div>

          <div className="article-callout">
            <blockquote>
              "Excellence is not an accident. It is the result of high intention, sincere effort, intelligent direction, and skillful execution."
            </blockquote>
          </div>

          <div className="article-section">
            <h3>Practical Implementation Strategy</h3>
            <ul className="article-list">
              <li><strong>User-Centric Architecture:</strong> Design interfaces that load fast on any network speed and adapt seamlessly to every screen size.</li>
              <li><strong>Modular & Maintainable Code:</strong> Utilize TypeScript, component-driven design, and strict state boundaries to ensure longevity.</li>
              <li><strong>Stewardship & Leadership:</strong> Empower team members, maintain transparent communication, and measure success by the value delivered to end users.</li>
            </ul>
          </div>
        </div>

        <div className="article-modal-footer">
          <p className="footer-note">Have questions or want to discuss this topic?</p>
          <a
            href="https://wa.me/256701951404?text=Hello%20Stephen%2C%20I%20read%20your%20article%20and%20wanted%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary-orange"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            Discuss with Stephen <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          overflow-y: auto;
        }

        .article-modal-container {
          background-color: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-hero);
          max-width: 760px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          padding: 40px;
          box-shadow: var(--shadow-lg);
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background-color: var(--bg-hero);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .modal-close-btn:hover {
          color: var(--text-primary);
          border-color: var(--primary-orange);
          transform: rotate(90deg);
        }

        .article-modal-title {
          font-size: 1.75rem;
          line-height: 1.3;
          margin-bottom: 16px;
          color: var(--text-primary);
        }

        .article-modal-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 24px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.875rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .share-btn {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--primary-orange);
          cursor: pointer;
          margin-left: auto;
        }

        .text-green {
          color: #10B981;
        }

        .article-modal-banner {
          width: 100%;
          height: 300px;
          border-radius: var(--radius-card);
          overflow: hidden;
          margin-bottom: 32px;
        }

        .article-modal-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .article-lead {
          font-size: 1.125rem;
          line-height: 1.65;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 24px;
        }

        .article-section {
          margin-bottom: 24px;
        }

        .article-section h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .article-section p {
          font-size: 1rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .article-callout {
          background-color: var(--bg-tag-orange);
          border-left: 4px solid var(--primary-orange);
          padding: 20px 24px;
          border-radius: 8px;
          margin: 28px 0;
        }

        .article-callout blockquote {
          font-size: 1.0625rem;
          font-style: italic;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .article-list {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .article-list li {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .article-modal-footer {
          margin-top: 36px;
          padding-top: 24px;
          border-top: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-note {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        @media (max-width: 640px) {
          .article-modal-container {
            padding: 24px 20px;
          }
          .article-modal-banner {
            height: 200px;
          }
          .share-btn {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
};
