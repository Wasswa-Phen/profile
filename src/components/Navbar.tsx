import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Articles', path: '/articles' },
  ];

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
          PHENY
        </NavLink>

        <nav className="navbar-desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              end={item.path === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            onClick={() => navigate('/contact')}
            className="btn btn-primary-orange desktop-cta"
          >
            Get in Touch
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setMobileMenuOpen(false)}
              end={item.path === '/'}
            >
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              navigate('/contact');
            }}
            className="btn btn-primary-orange mobile-cta"
          >
            Get in Touch
          </button>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--border-light);
          height: 80px;
          display: flex;
          align-items: center;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          font-size: 1.625rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-primary);
        }

        .navbar-desktop-nav {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 4px;
        }

        .mobile-drawer {
          display: none;
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--border-light);
          padding: 24px;
          flex-direction: column;
          gap: 16px;
          box-shadow: var(--shadow-lg);
        }

        .mobile-nav-link {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 8px 0;
        }

        .mobile-nav-link.active {
          color: var(--primary-orange);
          font-weight: 700;
        }

        .mobile-cta {
          margin-top: 12px;
          width: 100%;
        }

        @media (max-width: 768px) {
          .navbar-desktop-nav,
          .desktop-cta {
            display: none;
          }
          .mobile-toggle,
          .mobile-drawer {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};
