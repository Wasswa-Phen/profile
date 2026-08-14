import React from 'react';
import { FileText, CheckCircle2, ShieldAlert, Award, Scale, HelpCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
  const lastUpdated = 'August 14, 2026';

  return (
    <div className="terms-page animate-fade-in">
      <div className="container">
        {/* HEADER */}
        <div className="page-header text-center">
          <span className="badge-tag badge-blue mb-3">
            <FileText size={14} style={{ marginRight: '6px' }} />
            TERMS & CONDITIONS
          </span>
          <h1 className="heading-xl mb-3">Terms of Service</h1>
          <p className="page-subtitle">
            Rules, responsibilities, and guidelines for using PHENY LTD services and web applications.
          </p>
          <span className="last-updated">Last Updated: {lastUpdated}</span>
        </div>

        {/* CONTENT WRAPPER */}
        <div className="legal-content-wrapper">
          <aside className="legal-sidebar">
            <div className="sidebar-sticky">
              <h4 className="sidebar-title">Sections</h4>
              <nav className="sidebar-nav">
                <a href="#acceptance" className="sidebar-link">1. Acceptance of Terms</a>
                <a href="#intellectual-property" className="sidebar-link">2. Intellectual Property</a>
                <a href="#acceptable-use" className="sidebar-link">3. Acceptable Use</a>
                <a href="#services-deliverables" className="sidebar-link">4. Software & Services</a>
                <a href="#liability" className="sidebar-link">5. Limitation of Liability</a>
                <a href="#governing-law" className="sidebar-link">6. Governing Law</a>
                <a href="#changes" className="sidebar-link">7. Amendments</a>
                <a href="#contact-terms" className="sidebar-link">8. Contact Info</a>
              </nav>
            </div>
          </aside>

          <main className="legal-body">
            <section id="acceptance" className="legal-section">
              <div className="section-icon-header">
                <CheckCircle2 size={22} className="text-orange" />
                <h2>1. Acceptance of Terms</h2>
              </div>
              <p>
                By accessing, browsing, or utilizing the web applications, products, and services provided by PHENY LTD and Wasswa Makubuya Stephen (Pheny), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our <Link to="/privacy">Privacy Policy</Link>.
              </p>
              <p>
                If you do not agree with any part of these terms, you must discontinue use of our website and services immediately.
              </p>
            </section>

            <section id="intellectual-property" className="legal-section">
              <div className="section-icon-header">
                <Award size={22} className="text-orange" />
                <h2>2. Intellectual Property Rights</h2>
              </div>
              <p>
                Unless otherwise indicated, all content on this website — including code repositories, custom design systems, branding, logos, media engineering architectures, text, and graphics — is the proprietary property of PHENY LTD and protected by international copyright, trademark, and intellectual property laws.
              </p>
              <ul className="legal-list">
                <li><strong>Brand Assets:</strong> The name "PHENY", "PHENY LTD", logo, and slogan "Building technology with purpose. Leading with excellence." may not be used without prior written authorization.</li>
                <li><strong>Client Ownership:</strong> Custom code and deliverables produced under explicit client contracts are governed by specific project agreements executed between PHENY LTD and the client.</li>
              </ul>
            </section>

            <section id="acceptable-use" className="legal-section">
              <div className="section-icon-header">
                <ShieldAlert size={22} className="text-orange" />
                <h2>3. Acceptable Use Policy</h2>
              </div>
              <p>When interacting with our website and digital products, you agree NOT to:</p>
              <ul className="legal-list">
                <li>Engage in unauthorized scraping, reverse engineering, or automated exploitation of our systems.</li>
                <li>Submit false, misleading, or malicious messages through our contact forms or communication channels.</li>
                <li>Attempt to breach or bypass authentication, security, or network controls.</li>
                <li>Use our services or brand identity for unlawful, fraudulent, or malicious purposes.</li>
              </ul>
            </section>

            <section id="services-deliverables" className="legal-section">
              <div className="section-icon-header">
                <FileText size={22} className="text-orange" />
                <h2>4. Software Engineering & Client Services</h2>
              </div>
              <p>
                PHENY LTD offers software development, web application engineering, media production setup, and technical consultation. Specific client engagements, scopes of work, milestones, payment schedules, and warranties are defined in individual service contracts.
              </p>
              <p>
                We strive for maximum performance, accessibility, and modern design standards across all software buildouts.
              </p>
            </section>

            <section id="liability" className="legal-section">
              <div className="section-icon-header">
                <Scale size={22} className="text-orange" />
                <h2>5. Limitation of Liability</h2>
              </div>
              <p>
                This website and its demonstration content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.
              </p>
              <p>
                In no event shall PHENY LTD or Wasswa Makubuya Stephen be liable for any indirect, incidental, consequential, or punitive damages arising from your use or inability to use this website or external linked platforms.
              </p>
            </section>

            <section id="governing-law" className="legal-section">
              <div className="section-icon-header">
                <Scale size={22} className="text-orange" />
                <h2>6. Governing Law & Jurisdiction</h2>
              </div>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the <strong>Republic of Uganda</strong>. Any dispute arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the competent courts in Kampala, Uganda.
              </p>
            </section>

            <section id="changes" className="legal-section">
              <div className="section-icon-header">
                <HelpCircle size={22} className="text-orange" />
                <h2>7. Amendments to Terms</h2>
              </div>
              <p>
                We reserve the right to revise or update these Terms of Service at any time. Changes become effective immediately upon posting on this page with an updated revision date. Your continued use of the website following any changes constitutes acceptance of those revisions.
              </p>
            </section>

            <section id="contact-terms" className="legal-section contact-card-section">
              <div className="section-icon-header">
                <Mail size={22} className="text-orange" />
                <h2>8. Legal Contact Information</h2>
              </div>
              <p>
                For legal inquiries, contract clarification, or terms regarding PHENY LTD services:
              </p>
              <div className="legal-contact-details">
                <p><strong>PHENY LTD / Wasswa Makubuya Stephen</strong></p>
                <p>Kampala, Uganda</p>
                <p>Email: <a href="mailto:wasswastephen24@gmail.com" className="text-orange">wasswastephen24@gmail.com</a></p>
                <p>Direct Phone: <a href="tel:+256701951404" className="text-orange">+256 701 951 404</a></p>
              </div>
            </section>
          </main>
        </div>
      </div>

      <style>{`
        .terms-page {
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
