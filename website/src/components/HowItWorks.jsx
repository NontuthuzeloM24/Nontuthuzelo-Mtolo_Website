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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {steps.map((s) => (
          <div key={s.step} className="rounded-lg bg-gray-50 p-6 shadow hover:shadow-lg transition">
            <div className="text-blue-500 text-4xl font-bold mb-4">{s.step}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.description}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
