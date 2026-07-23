import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#whatido',    label: 'What I Do' },
  { href: '#howitworks', label: 'How It Works' },
  { href: '#mywork',     label: 'My Work' },
  { href: '#contact',    label: 'Get In Touch' },
];

export default function Header() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [btnHovered, setBtnHovered]   = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    checkMobile(); // run on mount

    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const bar = (rotate, opacity = 1) => ({
    display: 'block',
    width: '22px',
    height: '2px',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    transform: rotate,
    opacity,
  });

  return (
    <header
      id="Header"
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: scrolled ? 'rgba(11, 20, 38, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(79,142,247,0.18)' : 'none',
        transition: 'all 0.35s ease',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          {/* Logo */}
          <h1 style={{
            fontWeight: 800, fontSize: '1.15rem', margin: 0,
            background: 'linear-gradient(135deg, #ffffff, #93C5FD)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Zelo's Creative Space
          </h1>

          {/* Desktop nav - only rendered when not mobile */}
          {!isMobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {navLinks.map((link, i) => (
                <a key={link.href} href={link.href}
                  onMouseEnter={() => setHoveredLink(i)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    color: hoveredLink === i ? '#fff' : '#94A3B8',
                    fontWeight: 500, fontSize: '0.95rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact"
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                style={{
                  backgroundColor: '#4F8EF7', color: '#fff',
                  padding: '0.4rem 1.1rem', borderRadius: '8px',
                  fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
                  transform: btnHovered ? 'translateY(-1px)' : 'translateY(0)',
                  backgroundColor: btnHovered ? '#3B7DDD' : '#4F8EF7',
                  transition: 'background-color 0.2s, transform 0.2s',
                }}
              >
                Hire Me
              </a>
            </nav>
          )}

          {/* Mobile burger - only rendered on mobile */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px',
              }}
            >
              <span style={bar(isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none')} />
              <span style={bar('none', isOpen ? 0 : 1)} />
              <span style={bar(isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none')} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMobile && isOpen && (
        <div style={{
          backgroundColor: '#0F1D38',
          borderTop: '1px solid rgba(79,142,247,0.18)',
          padding: '0.5rem 0 1rem',
        }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block', padding: '0.75rem 0',
                  color: '#94A3B8', fontWeight: 500, textDecoration: 'none',
                  borderBottom: '1px solid rgba(79,142,247,0.1)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact"
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block', marginTop: '0.75rem',
                backgroundColor: '#4F8EF7', color: '#fff',
                padding: '0.75rem 1rem', borderRadius: '8px',
                fontWeight: 700, textDecoration: 'none', textAlign: 'center',
              }}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}