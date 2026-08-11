import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import type { Project } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { CaseStudyModal } from '../components/CaseStudyModal';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Platforms', 'Church & Media', 'Enterprise'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="projects-page animate-fade-in">
      <div className="container">
        {/* HEADER */}
        <div className="page-header text-center">
          <h1 className="heading-xl mb-3">Selected Projects & Real-World Solutions</h1>
          <p className="page-subtitle">Web applications, media systems, and brand platforms.</p>

          {/* FILTER PILLS */}
          <div className="filter-bar">
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
        </div>

        {/* PROJECTS GRID */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        .projects-page {
          padding: 56px 0 80px 0;
        }

        .page-header {
          max-width: 800px;
          margin: 0 auto 48px auto;
        }

        .page-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 32px;
        }

        .filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .mb-3 { margin-bottom: 12px; }
        .text-center { text-align: center; }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
