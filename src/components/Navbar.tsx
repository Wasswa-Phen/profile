import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme = 'light', onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Articles', path: '/articles' },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
          <img src="/images/Logo.png" alt="PHENY Logo" className="navbar-logo-img" />
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
            onClick={onToggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle dark mode"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

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
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <div className="mobile-nav-links">
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
          </div>

          <div className="mobile-drawer-footer">
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
        </div>
      )}

      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: var(--bg-card);
          border-bottom: 1px solid var(--border-light);
          height: 80px;
          display: flex;
          align-items: center;
          transition: background-color var(--transition-normal);
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
          display: flex;
          align-items: center;
        }

        .navbar-logo-img {
          height: 44px;
          width: auto;
          object-fit: contain;
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

        .theme-toggle-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid var(--border-light);
          background-color: var(--bg-hero);
          color: var(--primary-orange);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .theme-toggle-btn:hover {
          transform: rotate(15deg) scale(1.05);
          border-color: var(--primary-orange);
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
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          bottom: 0;
          height: calc(100vh - 80px);
          background-color: var(--bg-card);
          padding: 40px 24px 48px 24px;
          flex-direction: column;
          justify-content: space-between;
          z-index: 999;
          overflow-y: auto;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mobile-nav-link {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          padding: 12px 0;
          border-bottom: 1px solid var(--border-subtle);
          display: block;
          transition: color var(--transition-fast);
        }

        .mobile-nav-link.active {
          color: var(--primary-orange);
        }

        .mobile-drawer-footer {
          margin-top: 32px;
        }

        .mobile-cta {
          width: 100%;
          padding: 16px;
          font-size: 1.0625rem;
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
