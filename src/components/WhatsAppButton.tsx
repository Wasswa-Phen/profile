import React, { useState } from 'react';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = '256701951404';
  const defaultMessage = encodeURIComponent("Hello Stephen, I'm reaching out from your portfolio website!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="whatsapp-floating-wrapper">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Official SVG Logo Icon */}
        <svg
          className="whatsapp-icon"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.886-9.885 9.886m0-18.066c-6.19 0-11.222 5.031-11.225 11.224 0 1.977.515 3.908 1.494 5.606l-1.587 5.797 5.932-1.556a11.22 11.22 0 005.38 1.377h.005c6.19 0 11.223-5.033 11.226-11.226 0-2.997-1.167-5.815-3.284-7.933A11.16 11.16 0 0012.051 3.719z" />
        </svg>

        <span className={`whatsapp-tooltip ${isHovered ? 'visible' : ''}`}>
          Chat on WhatsApp
        </span>
      </a>

      <style>{`
        .whatsapp-floating-wrapper {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 999;
          display: flex;
          align-items: center;
        }

        .whatsapp-btn {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background-color: #25D366;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 18px rgba(37, 211, 102, 0.45);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          text-decoration: none;
        }

        .whatsapp-btn::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #25D366;
          opacity: 0.6;
          z-index: -1;
          animation: whatsappPulse 2s infinite ease-in-out;
        }

        .whatsapp-btn:hover {
          transform: scale(1.1) translateY(-2px);
          background-color: #20BA5A;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.6);
        }

        .whatsapp-icon {
          fill: #FFFFFF;
        }

        .whatsapp-tooltip {
          position: absolute;
          right: 70px;
          background-color: #1E1B18;
          color: #FFFFFF;
          font-size: 0.8125rem;
          font-weight: 700;
          padding: 8px 14px;
          border-radius: 8px;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transform: translateX(8px);
          transition: all 0.25s ease;
          pointer-events: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        [data-theme="dark"] .whatsapp-tooltip {
          background-color: #FFFFFF;
          color: #121212;
        }

        .whatsapp-tooltip.visible {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }

        @keyframes whatsappPulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          70% {
            transform: scale(1.4);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .whatsapp-floating-wrapper {
            bottom: 20px;
            right: 20px;
          }
          .whatsapp-btn {
            width: 52px;
            height: 52px;
          }
          .whatsapp-tooltip {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
