import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Designing and building custom websites for professionals who want to
          showcase their personal brand online
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 max-w3xl mx-auto">
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
