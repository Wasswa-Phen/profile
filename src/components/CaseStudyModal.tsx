import React from 'react';
import { X, ExternalLink, CheckCircle2, GitBranch } from 'lucide-react';
import type { Project } from '../data/projects';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const caseStudy = project.fullCaseStudy || {
    overview: project.description,
    challenge: 'Architecting a scalable system maintaining real-time responsiveness and zero downtime under peak load.',
    solution: 'Designed and deployed modular frontend components backed by automated integration tests and cloud edge optimization.',
    keyResults: [
      'Delivered 99.9% uptime across production environments.',
      'Achieved dynamic asset optimization reducing payload size by 45%.',
      'Seamless user adoption with intuitive design system implementation.'
    ]
  };

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div className="modal-header">
          <span className="badge-tag badge-blue mb-2">{project.category}</span>
          <h2 className="heading-lg">{project.title}</h2>
          <div className="modal-tags mt-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="badge-tag badge-grey">{tech}</span>
            ))}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-image">
            <img src={project.image} alt={project.title} />
          </div>

          <section className="modal-section">
            <h3>Overview</h3>
            <p>{caseStudy.overview}</p>
          </section>

          <section className="modal-section">
            <h3>The Challenge</h3>
            <p>{caseStudy.challenge}</p>
          </section>

          <section className="modal-section">
            <h3>The Solution</h3>
            <p>{caseStudy.solution}</p>
          </section>

          <section className="modal-section">
            <h3>Key Results & Impact</h3>
            <ul className="results-list">
              {caseStudy.keyResults.map((result, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={18} className="result-icon" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="modal-footer">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary-orange"
            >
              Live Demo <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View Repository <GitBranch size={16} />
            </a>
          )}
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background-color: rgba(30, 27, 24, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .modal-container {
          background-color: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-hero);
          max-width: 760px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          padding: 36px;
          box-shadow: var(--shadow-lg);
        }

        .modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: var(--bg-hero);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-primary);
          transition: background-color var(--transition-fast);
        }

        .modal-close:hover {
          background-color: var(--border-light);
        }

        .modal-header {
          margin-bottom: 24px;
        }

        .modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .modal-image {
          width: 100%;
          height: 300px;
          border-radius: var(--radius-card);
          overflow: hidden;
          margin-bottom: 28px;
          background-color: var(--bg-hero);
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-section {
          margin-bottom: 24px;
        }

        .modal-section h3 {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .modal-section p {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .results-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .results-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9375rem;
          color: var(--text-secondary);
        }

        .result-icon {
          color: var(--primary-orange);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .modal-footer {
          display: flex;
          gap: 16px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid var(--border-light);
        }

        .mb-2 { margin-bottom: 8px; }
        .mt-3 { margin-top: 12px; }

        @media (max-width: 640px) {
          .modal-container {
            padding: 20px;
          }
          .modal-image {
            height: 200px;
          }
          .modal-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};
