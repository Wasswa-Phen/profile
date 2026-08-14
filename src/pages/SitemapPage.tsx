import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Briefcase, BookOpen, Mail, Shield, FileText, Map, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projects';
import { articlesData } from '../data/articles';
import { socialLinksData } from '../data/socialLinks';

export const SitemapPage: React.FC = () => {
  const mainPages = [
    {
      title: 'Home Page',
      path: '/',
      icon: <Home size={20} />,
      description: 'Portfolio intro, hero banner, core expertise pillars, featured projects, and insights.',
      sections: ['Hero Banner', 'Core Expertise', 'About Stephen Summary', 'Featured Work', 'Latest Insights', 'Call to Action']
    },
    {
      title: 'About & Stewardship',
      path: '/about',
      icon: <User size={20} />,
      description: 'Professional biography, core values, education at Victoria University, career timeline & toolbox.',
      sections: ['Professional Profile', 'Mission Statement', 'Core Values & Philosophy', 'Education & Qualifications', 'Career Timeline', 'Technical & Creative Toolbox']
    },
    {
      title: 'Projects & Work',
      path: '/projects',
      icon: <Briefcase size={20} />,
      description: 'Complete portfolio of web applications, church media platforms, and enterprise solutions.',
      sections: ['All Projects Grid', 'Web Platforms Filter', 'Church & Media Filter', 'Enterprise Solutions Filter', 'Interactive Case Studies']
    },
    {
      title: 'Articles & Field Notes',
      path: '/articles',
      icon: <BookOpen size={20} />,
      description: 'Thought leadership, technical guides, media engineering deep dives, and Kingdom leadership.',
      sections: ['Featured Article Hero', 'Front-End Architecture', 'Media Systems Engineering', 'Kingdom Stewardship', 'Interactive Article Reader']
    },
    {
      title: 'Contact & Collaboration',
      path: '/contact',
      icon: <Mail size={20} />,
      description: 'Direct email inquiry, phone/WhatsApp contacts, brand entity details, interactive contact form.',
      sections: ['Direct Email Links', 'WhatsApp Chat Button', 'Official Phone Numbers', 'Interactive Contact Form', 'Social Media Bar']
    }
  ];

  const legalPages = [
    {
      title: 'Privacy Policy',
      path: '/privacy',
      icon: <Shield size={18} />,
      description: 'Comprehensive policy on data collection, local storage, security, third parties, and user privacy rights.'
    },
    {
      title: 'Terms of Service',
      path: '/terms',
      icon: <FileText size={18} />,
      description: 'Terms of use, intellectual property, acceptable use, software engineering deliverables, and governing law.'
    },
    {
      title: 'Visual Sitemap',
      path: '/sitemap',
      icon: <Map size={18} />,
      description: 'Interactive map of all routes, sub-sections, project case studies, and social media channels.'
    }
  ];

  return (
    <div className="sitemap-page animate-fade-in">
      <div className="container">
        {/* PAGE HEADER */}
        <div className="page-header text-center">
          <span className="badge-tag badge-orange-subtle mb-3">
            <Map size={14} style={{ marginRight: '6px' }} />
            SITE ARCHITECTURE
          </span>
          <h1 className="heading-xl mb-3">Interactive Site Map</h1>
          <p className="page-subtitle">
            Complete navigation overview of all pages, sub-sections, portfolio items, and external profiles across PHENY LTD.
          </p>
        </div>

        {/* MAIN NAVIGATION MAP */}
        <section className="sitemap-section mb-5">
          <h2 className="heading-lg section-title mb-4">
            <CheckCircle2 size={24} className="text-orange" />
            Main Navigation Routes
          </h2>

          <div className="sitemap-grid">
            {mainPages.map((page) => (
              <div key={page.path} className="sitemap-card">
                <div className="card-top">
                  <div className="page-icon-box">{page.icon}</div>
                  <div className="page-title-meta">
                    <h3>
                      <Link to={page.path} className="page-link-title">
                        {page.title}
                      </Link>
                    </h3>
                    <code className="path-code">{page.path}</code>
                  </div>
                </div>

                <p className="page-desc">{page.description}</p>

                <div className="sections-list">
                  <span className="list-heading">Sections & Features:</span>
                  <ul>
                    {page.sections.map((sec) => (
                      <li key={sec}>{sec}</li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  <Link to={page.path} className="visit-btn">
                    Visit Page <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT CASE STUDIES MAP */}
        <section className="sitemap-section mb-5">
          <h2 className="heading-lg section-title mb-4">
            <Briefcase size={24} className="text-orange" />
            Featured Projects & Case Studies
          </h2>

          <div className="sitemap-subgrid">
            {projectsData.map((project) => (
              <div key={project.id} className="subcard">
                <div className="subcard-header">
                  <span className="badge-tag badge-blue mb-2">{project.category}</span>
                  <h4 className="subcard-title">{project.title}</h4>
                </div>
                <p className="subcard-desc">{project.description}</p>
                <div className="subcard-actions">
                  <Link to="/projects" className="link-text">
                    View in Projects <ArrowRight size={14} />
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link-badge"
                    >
                      Live App <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ARTICLES & LEGAL SECTION */}
        <div className="grid-2-sitemap mb-5">
          {/* ARTICLES */}
          <div className="sitemap-section">
            <h2 className="heading-md section-title mb-4">
              <BookOpen size={20} className="text-orange" />
              Published Articles
            </h2>
            <div className="vertical-list">
              {articlesData.map((art) => (
                <div key={art.id} className="list-item-card">
                  <div>
                    <span className="badge-tag badge-orange-subtle mb-1">{art.category}</span>
                    <h5 className="item-title">{art.title}</h5>
                  </div>
                  <Link to="/articles" className="icon-link">
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* LEGAL & DISCLOSURES */}
          <div className="sitemap-section">
            <h2 className="heading-md section-title mb-4">
              <Shield size={20} className="text-orange" />
              Legal & Disclosures
            </h2>
            <div className="vertical-list">
              {legalPages.map((legal) => (
                <div key={legal.path} className="list-item-card">
                  <div className="legal-item-left">
                    <div className="legal-icon">{legal.icon}</div>
                    <div>
                      <h5 className="item-title">
                        <Link to={legal.path} className="link-dark">
                          {legal.title}
                        </Link>
                      </h5>
                      <p className="legal-desc">{legal.description}</p>
                    </div>
                  </div>
                  <Link to={legal.path} className="icon-link">
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EXTERNAL PROFILES & SOCIAL CHANNELS */}
        <section className="sitemap-section">
          <h2 className="heading-md section-title text-center mb-4">
            Official Channels & Social Connect
          </h2>
          <div className="social-grid">
            {socialLinksData.map((social) => (
              social.status === 'coming-soon' ? (
                <div key={social.name} className="social-card disabled">
                  <span>{social.name}</span>
                  <span className="badge-coming">Soon</span>
                </div>
              ) : (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <span>{social.name}</span>
                  <ExternalLink size={14} />
                </a>
              )
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .sitemap-page {
          padding: 56px 0 80px 0;
        }

        .page-header {
          max-width: 760px;
          margin: 0 auto 48px auto;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sitemap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .sitemap-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-card);
          padding: 28px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-normal);
        }

        .sitemap-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .card-top {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
        }

        .page-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background-color: var(--bg-tag-orange);
          color: var(--primary-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .page-link-title {
          font-size: 1.125rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .page-link-title:hover {
          color: var(--primary-orange);
        }

        .path-code {
          font-size: 0.75rem;
          background-color: var(--bg-hero);
          padding: 2px 6px;
          border-radius: 4px;
          color: var(--secondary-blue);
          font-weight: 600;
        }

        .page-desc {
          font-size: 0.875rem;
          line-height: 1.5;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .sections-list {
          margin-bottom: 20px;
          background-color: var(--bg-hero);
          padding: 16px;
          border-radius: 10px;
          margin-top: auto;
        }

        .list-heading {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          display: block;
          margin-bottom: 8px;
        }

        .sections-list ul {
          padding-left: 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sections-list li {
          font-size: 0.8125rem;
          color: var(--text-secondary);
        }

        .card-footer {
          padding-top: 12px;
          border-top: 1px solid var(--border-light);
        }

        .visit-btn {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--primary-orange);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .sitemap-subgrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .subcard {
          background-color: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-card);
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        .subcard-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .subcard-desc {
          font-size: 0.8125rem;
          line-height: 1.5;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .subcard-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }

        .link-text {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--secondary-blue);
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .external-link-badge {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary-orange);
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .grid-2-sitemap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .vertical-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .list-item-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .item-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .link-dark {
          color: var(--text-primary);
        }

        .link-dark:hover {
          color: var(--primary-orange);
        }

        .legal-item-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .legal-icon {
          color: var(--primary-orange);
          flex-shrink: 0;
        }

        .legal-desc {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .icon-link {
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }

        .icon-link:hover {
          color: var(--primary-orange);
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .social-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 700;
          font-size: 0.875rem;
          color: var(--text-primary);
          transition: all var(--transition-fast);
        }

        .social-card:hover:not(.disabled) {
          border-color: var(--primary-orange);
          color: var(--primary-orange);
          transform: translateY(-2px);
        }

        .social-card.disabled {
          opacity: 0.6;
          cursor: default;
        }

        .badge-coming {
          font-size: 0.6875rem;
          background-color: var(--bg-hero);
          padding: 2px 6px;
          border-radius: 4px;
          color: var(--text-muted);
        }

        .mb-1 { margin-bottom: 4px; }
        .mb-2 { margin-bottom: 8px; }
        .mb-3 { margin-bottom: 12px; }
        .mb-4 { margin-bottom: 16px; }
        .mb-5 { margin-bottom: 40px; }
        .text-center { text-align: center; }
        .text-orange { color: var(--primary-orange); }

        @media (max-width: 1024px) {
          .sitemap-grid,
          .sitemap-subgrid {
            grid-template-columns: repeat(2, 1fr);
          }
          .social-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .sitemap-grid,
          .sitemap-subgrid,
          .grid-2-sitemap,
          .social-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
