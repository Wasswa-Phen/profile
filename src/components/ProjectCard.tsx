import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <article className="project-card">
      <div className="card-image-wrapper">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>

      <div className="card-content">
        <span className="badge-tag badge-blue card-category">
          {project.category}
        </span>

        <h3 className="card-title">{project.title}</h3>

        <p className="card-description">{project.description}</p>

        <div className="card-tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge-tag badge-grey">
              {tech}
            </span>
          ))}
        </div>

        <div className="card-actions">
          <button
            onClick={() => onOpenCaseStudy?.(project)}
            className="btn btn-primary-orange flex-1"
          >
            View Case Study
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-circle"
              aria-label={`Visit ${project.title} live link`}
            >
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>
      </div>

      <style>{`
        .project-card {
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-card);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .card-image-wrapper {
          width: 100%;
          height: 220px;
          overflow: hidden;
          background-color: #F8F4F0;
        }

        .card-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }

        .project-card:hover .card-image-wrapper img {
          transform: scale(1.03);
        }

        .card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-category {
          align-self: flex-start;
          margin-bottom: 12px;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
        }

        .card-description {
          font-size: 0.90rem;
          line-height: 1.55;
          color: var(--text-secondary);
          margin-bottom: 16px;
          flex: 1;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .card-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
        }

        .flex-1 {
          flex: 1;
        }
      `}</style>
    </article>
  );
};
