import React from "react";

const Hero = () => {
  return (
    <section style={{
    minHeight: '100vh', display: 'flex', alignItems: 'center',
    background: 'linear-gradient(135deg, #0B1426 0%, #0F1D38 55%, #162040 100%)',
    position: 'relative', overflow: 'hidden',
  }}>
      {/* Decorative glow blobs */}
    <div style={{
      position: 'absolute', top: '-180px', right: '-180px',
      width: '560px', height: '560px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(79,142,247,0.13) 0%, transparent 70%)',
      pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', bottom: '-120px', left: '-120px',
      width: '420px', height: '420px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
      pointerEvents: 'none',
    }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      style={{ position: 'relative', zIndex: 1 }}>

        {/* Badge */}
      <div className="fade-up" style={{ marginBottom: '1.25rem' }}>
        <span style={{
          display: 'inline-block',
          backgroundColor: 'rgba(79,142,247,0.12)',
          color: '#93C5FD',
          padding: '0.35rem 1rem',
          borderRadius: '999px',
          fontSize: '0.8rem',
          fontWeight: 700,
          border: '1px solid rgba(79,142,247,0.3)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          Web Design & Development
        </span>
      </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Designing and building custom websites for professionals who want to
          showcase their personal brand online
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          I create clean, modern, mobile friendly websites that present you
          clearly and confidently.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition"
        >
          Get a website that represents you
        </a>
      </div>
    </section>
  );
};

export default Hero;
