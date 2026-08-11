import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinksData } from '../data/socialLinks';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-left">
          <Link to="/" className="footer-logo">
            PHENY
          </Link>
          <p className="footer-copyright">
            © {currentYear} PHENY LTD. All rights reserved. Building technology with purpose. Leading with excellence. Creating impact through innovation.
          </p>
        </div>

        <div className="footer-links">
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#terms" className="footer-link">Terms of Service</a>
          <a href="#sitemap" className="footer-link">Sitemap</a>
          {socialLinksData
            .filter((link) => link.status !== 'coming-soon')
            .slice(0, 5)
            .map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {link.name}
              </a>
            ))}
        </div>
      </div>

      <style>{`
        .site-footer {
          margin-top: auto;
          background-color: #FFF0E8;
          border-top: 1px solid #F7E2D5;
          padding: 48px 0;
        }

        .footer-container {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
        }

        .footer-left {
          max-width: 440px;
        }

        .footer-logo {
          font-size: 1.625rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #B53F00;
          display: inline-block;
          margin-bottom: 12px;
        }

        .footer-copyright {
          font-size: 0.8125rem;
          line-height: 1.5;
          color: #1A4975;
          font-weight: 500;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .footer-link {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: color var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--primary-orange);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            gap: 24px;
          }
          .footer-links {
            gap: 16px 20px;
          }
        }
      `}</style>
    </footer>
  );
};
