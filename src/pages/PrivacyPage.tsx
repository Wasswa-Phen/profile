import React from 'react';
import { Shield, Lock, Eye, Database, Bell, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPage: React.FC = () => {
  const lastUpdated = 'August 14, 2026';

  return (
    <div className="privacy-page animate-fade-in">
      <div className="container">
        {/* HEADER */}
        <div className="page-header text-center">
          <span className="badge-tag badge-orange-subtle mb-3">
            <Shield size={14} style={{ marginRight: '6px' }} />
            LEGAL DISCLOSURE
          </span>
          <h1 className="heading-xl mb-3">Privacy Policy</h1>
          <p className="page-subtitle">
            How PHENY LTD & Stephen Wasswa collect, protect, and respect your data.
          </p>
          <span className="last-updated">Last Updated: {lastUpdated}</span>
        </div>

        {/* POLICY CONTENT GRID */}
        <div className="legal-content-wrapper">
          <aside className="legal-sidebar">
            <div className="sidebar-sticky">
              <h4 className="sidebar-title">Sections</h4>
              <nav className="sidebar-nav">
                <a href="#overview" className="sidebar-link">1. Overview & Scope</a>
                <a href="#data-collection" className="sidebar-link">2. Data We Collect</a>
                <a href="#data-use" className="sidebar-link">3. How We Use Data</a>
                <a href="#cookies" className="sidebar-link">4. Cookies & Storage</a>
                <a href="#third-parties" className="sidebar-link">5. Third-Party Services</a>
                <a href="#security" className="sidebar-link">6. Security Measures</a>
                <a href="#user-rights" className="sidebar-link">7. Your Rights</a>
                <a href="#contact-privacy" className="sidebar-link">8. Contact Info</a>
              </nav>
            </div>
          </aside>

          <main className="legal-body">
            <section id="overview" className="legal-section">
              <div className="section-icon-header">
                <Shield size={22} className="text-orange" />
                <h2>1. Overview & Scope</h2>
              </div>
              <p>
                PHENY LTD ("we", "us", or "our"), founded and led by Wasswa Makubuya Stephen (Pheny), is committed to safeguarding the privacy of visitors, clients, and partners who interact with our official digital portfolio and software services (located at <code>stephen-wasswa.github.io</code> and related web applications).
              </p>
              <p>
                This Privacy Policy describes our policies and procedures regarding the collection, use, and disclosure of your information when you access our services, and tells you about your privacy rights and how the law protects you under Ugandan Data Protection & Privacy Laws and applicable international privacy standards.
              </p>
            </section>

            <section id="data-collection" className="legal-section">
              <div className="section-icon-header">
                <Database size={22} className="text-orange" />
                <h2>2. Data We Collect</h2>
              </div>
              <p>
                We minimize data collection to only what is necessary to provide exceptional technical services, communicate effectively, and maintain system security.
              </p>
              <div className="data-box-grid">
                <div className="data-box">
                  <h3>Voluntary Contact Information</h3>
                  <p>
                    When you submit an inquiry through our <Link to="/contact">Contact Page</Link> or reach out via email/WhatsApp, we collect your name, email address, phone number, and message content to fulfill your request.
                  </p>
                </div>
                <div className="data-box">
                  <h3>Technical & Analytical Data</h3>
                  <p>
                    Standard web server logs and browser preferences (such as your chosen light/dark color theme stored locally in <code>localStorage</code>) to deliver an optimized experience across desktop and mobile devices.
                  </p>
                </div>
              </div>
            </section>

            <section id="data-use" className="legal-section">
              <div className="section-icon-header">
                <Eye size={22} className="text-orange" />
                <h2>3. How We Use Your Information</h2>
              </div>
              <p>PHENY LTD utilizes collected information strictly for the following purposes:</p>
              <ul className="legal-list">
                <li>To respond to technical inquiries, project proposals, and consultation requests.</li>
                <li>To deliver corporate front-end, media engineering, and software solutions requested by clients.</li>
                <li>To maintain, audit, and improve the performance and security of our web applications.</li>
                <li>To comply with legal obligations and enforce our <Link to="/terms">Terms of Service</Link>.</li>
              </ul>
              <div className="highlight-callout">
                <p>
                  <strong>We do NOT sell, rent, or trade your personal information</strong> to third parties for advertising or commercial exploitation.
                </p>
              </div>
            </section>

            <section id="cookies" className="legal-section">
              <div className="section-icon-header">
                <Lock size={22} className="text-orange" />
                <h2>4. Cookies & Local Storage</h2>
              </div>
              <p>
                Our web application uses client-side local storage (<code>localStorage</code>) strictly for storing user UI preferences (such as preserving your selected Dark Mode or Light Mode setting across visits).
              </p>
              <p>
                We do not deploy intrusive third-party tracking cookies or behavioral advertising pixels.
              </p>
            </section>

            <section id="third-parties" className="legal-section">
              <div className="section-icon-header">
                <Bell size={22} className="text-orange" />
                <h2>5. Third-Party Services</h2>
              </div>
              <p>
                We may embed or link to trusted third-party platforms for specific functionality:
              </p>
              <ul className="legal-list">
                <li><strong>GitHub Pages / Vercel:</strong> Static site hosting and content delivery.</li>
                <li><strong>WhatsApp API / Meta:</strong> Direct Messaging routing when initiated by the user.</li>
                <li><strong>Google Fonts / Lucide Icons:</strong> Open-source typographical and visual assets.</li>
              </ul>
              <p>
                These third-party services maintain their own privacy policies. We encourage you to review their terms when navigating outside our application.
              </p>
            </section>

            <section id="security" className="legal-section">
              <div className="section-icon-header">
                <Shield size={22} className="text-orange" />
                <h2>6. Security Measures</h2>
              </div>
              <p>
                The security of your personal data is paramount to us. We implement HTTPS encryption in transit, strict access controls, and modular component boundaries to ensure your data remains protected against unauthorized access, loss, or alteration.
              </p>
            </section>

            <section id="user-rights" className="legal-section">
              <div className="section-icon-header">
                <FileText size={22} className="text-orange" />
                <h2>7. Your Privacy Rights</h2>
              </div>
              <p>
                Depending on your location, you have the following rights regarding your personal information:
              </p>
              <ul className="legal-list">
                <li><strong>Access & Verification:</strong> Request a copy of personal information we hold about you.</li>
                <li><strong>Correction:</strong> Request updates or corrections to any inaccurate contact details.</li>
                <li><strong>Deletion:</strong> Request complete removal of your contact information from our active records.</li>
              </ul>
            </section>

            <section id="contact-privacy" className="legal-section contact-card-section">
              <div className="section-icon-header">
                <Mail size={22} className="text-orange" />
                <h2>8. Contact Information</h2>
              </div>
              <p>
                If you have questions, comments, or data requests regarding this Privacy Policy, please contact our privacy lead:
              </p>
              <div className="legal-contact-details">
                <p><strong>Wasswa Makubuya Stephen (Pheny)</strong></p>
                <p>Founder & Lead Software Engineer, PHENY LTD</p>
                <p>Kampala, Uganda</p>
                <p>Email: <a href="mailto:wasswastephen24@gmail.com" className="text-orange">wasswastephen24@gmail.com</a></p>
                <p>Phone / WhatsApp: <a href="tel:+256701951404" className="text-orange">+256 701 951 404</a></p>
              </div>
            </section>
          </main>
        </div>
      </div>

      <style>{`
        .privacy-page {
          padding: 56px 0 80px 0;
        }

        .page-header {
          max-width: 720px;
          margin: 0 auto 48px auto;
        }

        .last-updated {
          font-size: 0.8125rem;
          color: var(--text-muted);
          font-weight: 600;
          display: block;
          margin-top: 8px;
        }

        .legal-content-wrapper {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 48px;
          align-items: start;
        }

        .sidebar-sticky {
          position: sticky;
          top: 100px;
          background-color: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-card);
          padding: 24px;
        }

        .sidebar-title {
          font-size: 0.875rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sidebar-link {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .sidebar-link:hover {
          color: var(--primary-orange);
        }

        .legal-body {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .legal-section {
          background-color: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-card);
          padding: 36px;
          box-shadow: var(--shadow-sm);
        }

        .section-icon-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .section-icon-header h2 {
          font-size: 1.375rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .legal-section p {
          font-size: 0.9375rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 14px;
        }

        .legal-section p code {
          background-color: var(--bg-hero);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.875rem;
          color: var(--primary-orange);
        }

        .data-box-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 20px;
        }

        .data-box {
          background-color: var(--bg-hero);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 20px;
        }

        .data-box h3 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .data-box p {
          font-size: 0.875rem;
          margin-bottom: 0;
        }

        .legal-list {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }

        .legal-list li {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .highlight-callout {
          background-color: var(--bg-tag-orange);
          border-left: 4px solid var(--primary-orange);
          padding: 16px 20px;
          border-radius: 8px;
          margin-top: 16px;
        }

        .highlight-callout p {
          margin: 0;
          color: var(--text-primary);
        }

        .contact-card-section {
          background-color: var(--bg-tag-orange);
        }

        .legal-contact-details p {
          margin-bottom: 6px;
          font-size: 0.9375rem;
        }

        .text-orange {
          color: var(--primary-orange);
          font-weight: 600;
        }

        .mb-3 { margin-bottom: 12px; }
        .text-center { text-align: center; }

        @media (max-width: 960px) {
          .legal-content-wrapper {
            grid-template-columns: 1fr;
          }
          .legal-sidebar {
            display: none;
          }
          .data-box-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .legal-section {
            padding: 24px 20px;
          }
        }
      `}</style>
    </div>
  );
};
