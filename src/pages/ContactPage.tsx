import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, CheckCircle, Clock, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { socialLinksData } from '../data/socialLinks';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="contact-page animate-fade-in">
      <div className="container">
        {/* PAGE HEADER */}
        <div className="page-header">
          <h1 className="heading-xl mb-2">Let's Connect & Collaborate</h1>
          <p className="page-subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        {/* MAIN 2-COLUMN GRID */}
        <div className="contact-grid mb-5">
          {/* LEFT CONTACT INFO */}
          <div className="contact-info-col">
            <div className="info-card">
              <div className="info-icon-circle">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="heading-sm mb-1">Email</h3>
                <p className="info-subtext">For general inquiries and collaboration.</p>
                <a href="mailto:wasswastephen24@gmail.com" className="info-link">
                  wasswastephen24@gmail.com
                </a>
                <br />
                <a href="mailto:wasswastephen676@gmail.com" className="info-link info-link-secondary">
                  wasswastephen676@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-circle">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="heading-sm mb-1">Call / WhatsApp</h3>
                <p className="info-subtext">Available Mon-Sat, 9am to 6pm EAT.</p>
                <a href="tel:+256701951404" className="info-link">
                  +256 701 951 404
                </a>
                <span className="phone-badge">Airtel · WhatsApp</span>
                <br />
                <a href="tel:+256763260974" className="info-link">
                  +256 763 260 974
                </a>
                <span className="phone-badge">MTN</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-circle">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="heading-sm mb-1">Location</h3>
                <p className="info-subtext">Based in</p>
                <p className="info-address">
                  <strong>Kampala, Uganda</strong>
                </p>
              </div>
            </div>

            <div className="info-card brand-card">
              <div className="info-icon-circle brand-icon">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="heading-sm mb-1">Brand Entity</h3>
                <p className="brand-name">PHENY / PHENY LTD</p>
                <p className="info-subtext">Powering Up Digital Excellence</p>
              </div>
            </div>
          </div>

          {/* RIGHT MESSAGE FORM */}
          <div className="form-card">
            <h2 className="heading-md mb-4">Send a Message</h2>

            {submitted ? (
              <div className="success-banner animate-fade-in">
                <CheckCircle size={40} className="success-icon mb-2" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. Stephen will get back to you within 24 hours.</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ firstName: '', lastName: '', email: '', message: '' });
                  }}
                  className="btn btn-outline mt-3"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary-orange full-width-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* SOCIAL LINKS BAR */}
        <div className="social-links-section text-center">
          <h3 className="heading-sm mb-3">Connect Across Platforms</h3>
          <div className="social-links-bar">
            {socialLinksData.map((social) => (
              social.status === 'coming-soon' ? (
                <span key={social.name} className="social-pill disabled">
                  {social.name} <Clock size={14} /> <span className="pill-badge">Soon</span>
                </span>
              ) : (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  {social.name} <ExternalLink size={14} />
                </a>
              )
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-page {
          padding: 56px 0 80px 0;
        }

        .page-header {
          margin-bottom: 40px;
        }

        .page-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 640px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 32px;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-card {
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-card);
          padding: 24px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          box-shadow: var(--shadow-sm);
        }

        .brand-card {
          background-color: #FFF9F6;
          border-color: #F7E2D5;
        }

        .info-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #EBF3FA;
          color: #1A568C;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .brand-icon {
          background-color: #FFF0EA;
          color: var(--primary-orange);
        }

        .info-subtext {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }

        .info-link {
          font-size: 0.9375rem;
          font-weight: 700;
          color: #B53F00;
          display: inline-block;
        }

        .info-link-secondary {
          font-size: 0.8125rem;
          font-weight: 600;
          margin-top: 4px;
          opacity: 0.8;
        }

        .phone-badge {
          font-size: 0.6875rem;
          font-weight: 700;
          background-color: #EBF3FA;
          color: #1A568C;
          padding: 2px 8px;
          border-radius: 6px;
          margin-left: 8px;
          vertical-align: middle;
        }

        .brand-name {
          font-size: 1.125rem;
          font-weight: 800;
          color: var(--primary-orange);
          margin-bottom: 2px;
        }

        .info-address {
          font-size: 0.9375rem;
          line-height: 1.4;
          color: var(--text-primary);
        }

        .form-card {
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-hero);
          padding: 40px;
          box-shadow: var(--shadow-sm);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: var(--radius-input);
          border: 1px solid #E4D8D0;
          background-color: #FAF6F3;
          font-size: 0.9375rem;
          color: var(--text-primary);
          transition: border-color var(--transition-fast), background-color var(--transition-fast);
          outline: none;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--primary-orange);
          background-color: #FFFFFF;
        }

        .full-width-btn {
          width: 100%;
          padding: 14px;
          font-size: 1rem;
          margin-top: 8px;
        }

        .success-banner {
          text-align: center;
          padding: 40px 20px;
        }

        .success-icon {
          color: #10B981;
        }

        .social-links-section {
          margin-top: 48px;
        }

        .social-links-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 16px;
        }

        .social-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: var(--radius-pill);
          background-color: #EBF3FA;
          color: #1A568C;
          font-size: 0.875rem;
          font-weight: 700;
          transition: all var(--transition-fast);
        }

        .social-pill:hover:not(.disabled) {
          background-color: #DDEBF7;
          transform: translateY(-1px);
          color: var(--primary-orange);
        }

        .social-pill.disabled {
          background-color: #F1ECE8;
          color: var(--text-muted);
          opacity: 0.8;
          cursor: default;
        }

        .pill-badge {
          font-size: 0.6875rem;
          background-color: #E2D7CF;
          padding: 2px 6px;
          border-radius: 6px;
          color: var(--text-secondary);
        }

        .mb-1 { margin-bottom: 4px; }
        .mb-2 { margin-bottom: 8px; }
        .mb-3 { margin-bottom: 12px; }
        .mb-4 { margin-bottom: 16px; }
        .mb-5 { margin-bottom: 40px; }
        .mt-3 { margin-top: 12px; }
        .text-center { text-align: center; }

        @media (max-width: 864px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .form-card {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
};
