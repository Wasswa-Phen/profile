import React from 'react';
import { Heart, ShieldCheck, Users, TrendingUp, History, Wrench, GraduationCap, BookOpen } from 'lucide-react';
import { coreValuesData, timelineData, educationData } from '../data/experience';
import { skillsData, skillCategories } from '../data/skills';

export const AboutPage: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart': return <Heart size={20} />;
      case 'shield-check': return <ShieldCheck size={20} />;
      case 'users': return <Users size={20} />;
      case 'trending-up': return <TrendingUp size={20} />;
      case 'book-open': return <BookOpen size={20} />;
      default: return <Heart size={20} />;
    }
  };

  return (
    <div className="about-page animate-fade-in">
      <div className="container">
        {/* HERO ABOUT SECTION */}
        <section className="about-hero-box">
          <div className="about-hero-text">
            <span className="badge-tag badge-orange-subtle mb-3">
              ABOUT & STEWARDSHIP
            </span>
            <h1 className="heading-xl mb-3">About Stephen Wasswa (Pheny)</h1>
            <h2 className="about-subtitle mb-4">
              Software Engineering Student • Front-End Developer • Creative Technologist • Kingdom Leader
            </h2>

            <p className="body-copy mb-3">
              I am Wasswa Makubuya Stephen, known professionally and creatively as Pheny. I am a Software Engineering student pursuing a Professional Certificate in Software Engineering (PCSE) at Victoria University Kampala (via the Institute of Advanced Technical Studies — IATS), where I also serve as the elected Class Coordinator.
            </p>
            <p className="body-copy mb-3">
              My work exists at the intersection of technology, creative media, and Kingdom stewardship. Beyond writing clean, scalable code, I build systems that transform businesses, strengthen churches, and improve community infrastructure across Uganda and East Africa.
            </p>
            <p className="body-copy">
              As a developer and a leader, I view code as a medium for impact — building systems that empower communities, streamline operations, and reflect a dedication to excellence and servant leadership.
            </p>
          </div>

          <div className="about-hero-photo-container">
            <div className="photo-wrapper">
              <img src="/images/stephen_portrait.png" alt="Stephen Wasswa (Pheny)" />
              <div className="current-focus-badge">
                <div className="focus-icon-circle">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <span className="focus-label">Current Focus</span>
                  <p className="focus-title">Software Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL STATEMENT */}
        <section className="section-padding">
          <div className="statement-box">
            <blockquote className="pro-statement">
              "I believe great software begins with understanding people and ends with honoring God through excellence."
            </blockquote>
            <p className="statement-body">
              My goal is not merely to write code, but to engineer reliable, scalable, and human-centered solutions. Whether designing digital interfaces, managing media systems for live ministry, or coordinating developer teams, I operate with disciplined execution, accountability, and continuous learning. Every challenge is an opportunity to innovate; every line of code is an opportunity to create real-world value.
            </p>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="section-padding">
          <div className="section-title-wrapper mb-4">
            <h2 className="heading-lg border-under">Core Values & Philosophy</h2>
          </div>

          <div className="values-grid">
            {coreValuesData.map((value) => (
              <div key={value.id} className="value-card">
                <div className="value-icon-box">
                  {getIcon(value.iconName)}
                </div>
                <h3 className="heading-sm mb-2">{value.title}</h3>
                <p className="card-text">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section-padding">
          <div className="section-title-wrapper mb-4">
            <h2 className="heading-lg border-under">Education</h2>
          </div>

          <div className="edu-grid">
            {educationData.map((edu, index) => (
              <div key={index} className="edu-card">
                <div className="edu-icon-box">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="heading-sm mb-1">{edu.institution}</h3>
                  <p className="edu-program">{edu.program}</p>
                  {edu.role && <p className="edu-role">{edu.role}</p>}
                  <span className="edu-timeline">{edu.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* JOURNEY & TOOLBOX */}
        <section className="section-padding">
          <div className="grid-2-custom gap-4">
            {/* JOURNEY TIMELINE */}
            <div className="journey-card">
              <div className="card-header-row mb-4">
                <History size={20} className="text-orange" />
                <h3 className="heading-sm">Leadership & Professional Experience</h3>
              </div>

              <div className="timeline">
                {timelineData.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot" />
                    <span className="timeline-period">{item.period}</span>
                    <h4 className="timeline-role">
                      {item.role}
                    </h4>
                    <span className="timeline-org">{item.organization}</span>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNICAL TOOLBOX */}
            <div className="toolbox-card">
              <div className="card-header-row mb-3">
                <Wrench size={20} className="text-orange" />
                <h3 className="heading-sm">Technical & Creative Toolbox</h3>
              </div>

              <p className="card-text mb-4">
                A curated selection of languages, frameworks, and tools utilized in crafting digital experiences, managing media production, and building real-world solutions.
              </p>

              {skillCategories.map((cat) => {
                const catSkills = skillsData.filter((s) => s.category === cat.key);
                if (catSkills.length === 0) return null;
                return (
                  <div key={cat.key} className="toolbox-category">
                    <span className="toolbox-cat-label">{cat.label}</span>
                    <div className="toolbox-tags">
                      {catSkills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`toolbox-pill ${skill.highlight ? 'highlight' : ''}`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .about-page {
          padding: 40px 0 60px 0;
        }

        .about-hero-box {
          background-color: var(--bg-hero);
          border-radius: var(--radius-hero);
          padding: 56px 48px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 40px;
        }

        .about-subtitle {
          font-size: 1.125rem;
          font-weight: 700;
          color: #B53F00;
        }

        .about-hero-photo-container {
          position: relative;
        }

        .photo-wrapper {
          width: 100%;
          height: 380px;
          border-radius: var(--radius-card);
          overflow: hidden;
          position: relative;
          background-color: #F8F4F0;
          box-shadow: var(--shadow-md);
        }

        .photo-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .current-focus-badge {
          position: absolute;
          bottom: -16px;
          left: -16px;
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          padding: 12px 20px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: var(--shadow-md);
        }

        .focus-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: var(--primary-orange);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .focus-label {
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .focus-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        /* PROFESSIONAL STATEMENT */
        .statement-box {
          background-color: #FFFFFF;
          border: 1px solid var(--border-light);
          border-left: 4px solid var(--primary-orange);
          border-radius: var(--radius-card);
          padding: 36px 40px;
          box-shadow: var(--shadow-sm);
        }

        .pro-statement {
          font-size: 1.375rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.4;
          margin-bottom: 16px;
          font-style: italic;
        }

        .statement-body {
          font-size: 1rem;
          line-height: 1.65;
          color: var(--text-secondary);
        }

        .border-under {
          position: relative;
          display: inline-block;
          padding-bottom: 8px;
        }

        .border-under::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 48px;
          height: 3px;
          background-color: #B53F00;
          border-radius: 2px;
        }

        /* VALUES */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .value-card {
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-card);
          padding: 28px;
          box-shadow: var(--shadow-sm);
        }

        .value-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #FFF0EA;
          color: var(--primary-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        /* EDUCATION */
        .edu-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .edu-card {
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-card);
          padding: 28px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          box-shadow: var(--shadow-sm);
        }

        .edu-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #EBF3FA;
          color: #1A568C;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .edu-program {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .edu-role {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--primary-orange);
          margin-top: 4px;
        }

        .edu-timeline {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          margin-top: 6px;
          display: inline-block;
        }

        /* TIMELINE & TOOLBOX */
        .grid-2-custom {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 24px;
        }

        .journey-card {
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-card);
          padding: 32px;
          box-shadow: var(--shadow-sm);
        }

        .toolbox-card {
          background-color: #FFF0EA;
          border: 1px solid #F8E2D6;
          border-radius: var(--radius-card);
          padding: 32px;
        }

        .card-header-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .text-orange {
          color: var(--primary-orange);
        }

        .timeline {
          position: relative;
          padding-left: 20px;
          border-left: 2px solid #F0E6E0;
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 16px;
        }

        .timeline-item {
          position: relative;
        }

        .timeline-dot {
          position: absolute;
          left: -27px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #B53F00;
        }

        .timeline-period {
          font-size: 0.75rem;
          font-weight: 800;
          color: #B53F00;
          letter-spacing: 0.05em;
        }

        .timeline-role {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 2px 0 2px 0;
        }

        .timeline-org {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 4px;
        }

        .timeline-desc {
          font-size: 0.875rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .toolbox-category {
          margin-bottom: 16px;
        }

        .toolbox-cat-label {
          font-size: 0.6875rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          display: block;
          margin-bottom: 8px;
        }

        .toolbox-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .toolbox-pill {
          padding: 5px 14px;
          border-radius: var(--radius-pill);
          background-color: #FFFFFF;
          border: 1px solid var(--border-light);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-primary);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }

        .toolbox-pill.highlight {
          background-color: #FFF0EA;
          border-color: #FFC4A8;
          color: #D94800;
        }

        .mb-1 { margin-bottom: 4px; }
        .mb-2 { margin-bottom: 8px; }
        .mb-3 { margin-bottom: 12px; }
        .mb-4 { margin-bottom: 16px; }
        .gap-4 { gap: 24px; }

        @media (max-width: 960px) {
          .about-hero-box,
          .grid-2-custom,
          .values-grid,
          .edu-grid {
            grid-template-columns: 1fr;
          }
          .current-focus-badge {
            left: 16px;
            bottom: -12px;
          }
        }

        @media (max-width: 640px) {
          .about-hero-box {
            padding: 32px 20px;
          }
          .journey-card, .toolbox-card {
            padding: 24px;
          }
          .statement-box {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
};
