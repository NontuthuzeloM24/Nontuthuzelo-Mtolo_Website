import React from "react";

const steps = [
  { step: 1, title: "Consultation", description: "Understand your brand." },
  { step: 2, title: "Design", description: "Layout & look approved by you." },
  { step: 3, title: "Build & Deploy", description: "Website gone live" },
];

const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4"> How It Works </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">A simple 3-step process to get your website up and running.</p>
      </div>
      <div>
        {steps.map((s) => (
          <div key={s.step}>
            <div>{s.step}</div>
            <h3>{s.status}</h3>
            <p>{s.description}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
