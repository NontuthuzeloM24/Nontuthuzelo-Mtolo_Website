import React, { useState } from "react";

const socialLinks = [
  { href: 'https://www.linkedin.com/in/nontuthuzelo-mtolo-877b34237', label: 'LinkedIn',  hoverColor: '#60A5FA' },
  { href: 'https://github.com/NontuthuzeloM24',                       label: 'GitHub',    hoverColor: '#E2E8F0' },
  { href: 'https://wa.me/27751904180',                                label: 'WhatsApp', hoverColor: '#4ADE80' },
];

const Footer = () => {
  const [hovered, setHovered] = useState(null);
  const [topHovered, setTopHovered] = useState(false);

  return (
    <footer style={{
      backgroundColor: '#0B1426',
      borderTop: '1px solid rgba(79,142,247,0.14)',
      padding: '2.5rem 1rem',
      textAlign: 'center',
    }}>
      <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
        &copy; {new Date().getFullYear()} Nontuthuzelo Mtolo. All rights reserved.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {socialLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              color: hovered === i ? link.hoverColor : '#64748B',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#Header"
        onMouseEnter={() => setTopHovered(true)}
        onMouseLeave={() => setTopHovered(false)}
        style={{
          color: '#4F8EF7',
          fontSize: '0.85rem',
          fontWeight: 600,
          textDecoration: 'none',
          opacity: topHovered ? 0.7 : 1,
          transition: 'opacity 0.2s',
        }}
      >
        Back to top ↑
      </a>
    </footer>
  );
};

export default Footer;