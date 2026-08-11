import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Mic, Layers, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { CaseStudyModal } from '../components/CaseStudyModal';
import type { Project } from '../data/projects';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 2);

  return (
    <div className="home-page animate-fade-in">
      <div className="container">
        {/* HERO SECTION */}
        <section className="hero-banner">
          <h1 className="hero-title">
            Building Technology with Purpose.<br />
            <span className="text-orange-accent">Leading with Excellence.</span>
          </h1>
          <p className="hero-subtitle">
            I engineer scalable systems and craft digital experiences that drive impact.
            Bridging the gap between robust software architecture and compelling creative vision.
          </p>
          <div className="hero-actions">
            <button
              onClick={() => navigate('/projects')}
              className="btn btn-primary-orange"
            >
              Explore Work
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="btn btn-outline"
            >
              Contact Me
            </button>
          </div>
        </section>

        {/* CORE EXPERTISE SECTION */}
        <section className="section-padding">
          <div className="section-header text-center">
            <h2 className="heading-lg">Core Expertise</h2>
            <p className="section-subtext">The pillars that drive my professional journey.</p>
          </div>

          <div className="grid-3">
            <div className="expertise-card">
              <div className="icon-box icon-orange">
                <Code size={22} />
              </div>
              <h3 className="heading-sm">Software Engineering</h3>
              <p className="card-text">
                Developing robust, scalable web applications using React, Vite, TypeScript, and modern front-end architecture. Currently pursuing a Professional Certificate in Software Engineering at Victoria University Kampala.
              </p>
              <button onClick={() => navigate('/about')} className="link-arrow">
                Learn more <ArrowRight size={14} />
              </button>
            </div>

            <div className="expertise-card">
              <div className="icon-box icon-blue">
                <Mic size={22} />
              </div>
              <h3 className="heading-sm">Ministry & Media</h3>
              <p className="card-text">
                Leading media production, livestream operations, and audiovisual engineering at Kasenge Miracle Centre Church. Managing Behringer X32 audio systems and OBS Studio broadcasting setups.
              </p>
              <button onClick={() => navigate('/about')} className="link-arrow">
                Learn more <ArrowRight size={14} />
              </button>
            </div>

            <div className="expertise-card">
              <div className="icon-box icon-cyan">
                <Layers size={22} />
              </div>
              <h3 className="heading-sm">Tech Entrepreneurship</h3>
              <p className="card-text">
                Contributing to digital product strategy, corporate web solutions, and technical team execution at Aromax Technologies Uganda. Building Africa's digital future through excellence and innovation.
              </p>
              <button onClick={() => navigate('/about')} className="link-arrow">
                Learn more <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT STEPHEN SUMMARY */}
        <section className="section-padding">
          <div className="about-summary-box">
            <div className="about-summary-text">
              <h2 className="heading-lg mb-3">About Stephen</h2>
              <p className="body-copy mb-4">
                I am Wasswa Makubuya Stephen, known professionally as Pheny. My work exists at the intersection of technology, creative media, and Kingdom stewardship. Beyond writing clean, scalable code, I build systems that transform businesses, strengthen churches, and improve community infrastructure across Uganda and East Africa.
              </p>
              <button
                onClick={() => navigate('/about')}
                className="btn btn-secondary-blue"
              >
                Learn More
              </button>
            </div>

            <div className="about-summary-image">
              <img src="/images/stephen_portrait.png" alt="Stephen Wasswa (Pheny)" />
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="section-padding">
          <div className="section-header flex-header">
            <div>
              <h2 className="heading-lg">Featured Projects</h2>
              <p className="section-subtext">A selection of recent work and technical achievements.</p>
            </div>
            <button
              onClick={() => navigate('/projects')}
              className="btn btn-outline"
            >
              View All Projects
            </button>
          </div>

          <div className="grid-2">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        </section>

        {/* LATEST INSIGHTS */}
        <section className="section-padding">
          <div className="section-header text-center">
            <h2 className="heading-lg">Latest Insights</h2>
            <p className="section-subtext">Thoughts on engineering, leadership, and Kingdom stewardship.</p>
          </div>

          <div className="featured-insight-card">
            <div className="insight-image">
              <img src="/images/media_engineering.png" alt="Technology as Kingdom Stewardship" />
            </div>
            <div className="insight-content">
              <span className="badge-tag badge-orange-subtle mb-2">Kingdom Leadership</span>
              <h3 className="heading-md mb-2">Technology as Kingdom Stewardship: Building Systems That Serve Purpose</h3>
              <p className="card-text mb-4">
                Exploring how software engineering and media production intersect with spiritual stewardship — why I believe great software begins with understanding people and ends with honoring God through excellence.
              </p>
              <button onClick={() => navigate('/articles')} className="read-link">
                Read Article <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              onClick={() => navigate('/articles')}
              className="btn btn-outline"
            >
              Read More Articles
            </button>
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="section-padding">
          <div className="dark-cta-banner">
            <h2 className="cta-heading">Ready to Build Something Great?</h2>
            <p className="cta-subtext">
              Whether you have a specific project in mind or just want to explore possibilities, I'm always open to discussing new opportunities and technical challenges.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="btn btn-primary-orange banner-white-btn"
            >
              Get in Touch
            </button>
          </div>
        </section>
      </div>

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        .home-page {
          padding-top: 40px;
        }

        .hero-banner {
          background-color: var(--bg-hero);
          border-radius: var(--radius-hero);
          padding: 72px 48px;
          text-align: center;
          margin-bottom: 40px;
        }

        .hero-title {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 20px;
        }

        .text-orange-accent {
          color: #B53F00;
        }

        .hero-subtitle {
          font-size: 1.125rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 680px;
          margin: 0 auto 32px auto;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .section-padding {
          padding: 48px 0;
        }

        .section-header {
          margin-bottom: 36px;
        }

        .section-subtext {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-top: 6px;
        }

        .flex-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .text-center {
          text-align: center;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .expertise-card {
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-card);
          padding: 32px 24px;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform var(--transition-normal);
        }

        .expertise-card:hover {
          transform: translateY(-4px);
        }

        .icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .icon-orange {
          background-color: #FFF0EA;
          color: var(--primary-orange);
        }

        .icon-blue {
          background-color: #EBF3FA;
          color: #1A568C;
        }

        .icon-cyan {
          background-color: #E6F7F8;
          color: #0F766E;
        }

        .card-text {
          font-size: 0.9375rem;
          line-height: 1.55;
          color: var(--text-secondary);
          margin: 12px 0 20px 0;
        }

        .link-arrow {
          background: none;
          border: none;
          color: #1A568C;
          font-size: 0.875rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          margin-top: auto;
          padding: 0;
        }

        .about-summary-box {
          background-color: #FFF0EA;
          border-radius: var(--radius-hero);
          padding: 48px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .about-summary-image {
          width: 100%;
          height: 320px;
          border-radius: var(--radius-card);
          overflow: hidden;
          background-color: #F7E5DB;
        }

        .about-summary-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .body-copy {
          font-size: 1rem;
          line-height: 1.65;
          color: var(--text-secondary);
        }

        .featured-insight-card {
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-card);
          overflow: hidden;
          display: grid;
          grid-template-columns: 320px 1fr;
          box-shadow: var(--shadow-sm);
        }

        .insight-image {
          width: 100%;
          height: 100%;
          min-height: 220px;
        }

        .insight-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .insight-content {
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .read-link {
          background: none;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          font-size: 0.9375rem;
          color: var(--primary-orange);
          cursor: pointer;
          padding: 0;
          transition: gap var(--transition-fast);
        }

        .read-link:hover {
          gap: 10px;
        }

        .dark-cta-banner {
          background-color: var(--bg-dark-banner);
          border-radius: var(--radius-hero);
          padding: 64px 40px;
          text-align: center;
          color: #FFFFFF;
        }

        .cta-heading {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .cta-subtext {
          font-size: 1.0625rem;
          line-height: 1.6;
          max-width: 640px;
          margin: 0 auto 32px auto;
          opacity: 0.9;
        }

        .banner-white-btn {
          background-color: #FFFFFF;
          color: var(--text-primary);
        }

        .banner-white-btn:hover {
          background-color: #F8F4F0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .mb-2 { margin-bottom: 8px; }
        .mb-3 { margin-bottom: 12px; }
        .mb-4 { margin-bottom: 16px; }
        .mt-4 { margin-top: 24px; }

        @media (max-width: 960px) {
          .grid-3,
          .grid-2 {
            grid-template-columns: 1fr;
          }
          .about-summary-box {
            grid-template-columns: 1fr;
            padding: 32px;
          }
          .featured-insight-card {
            grid-template-columns: 1fr;
          }
          .flex-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .hero-banner {
            padding: 40px 20px;
          }
          .hero-title {
            font-size: 1.875rem;
          }
          .dark-cta-banner {
            padding: 40px 20px;
          }
          .cta-heading {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};
