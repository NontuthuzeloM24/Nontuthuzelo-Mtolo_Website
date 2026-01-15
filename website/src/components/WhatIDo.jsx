const services = [
  { title: "Custom design", description: "Tailored to your personal brand" },
  { title: "Responsive Layout", description: "Looks great on all devices" },
  { title: "Professional Look", description: "Clean, modern, trustworthy" },
];

const WhatIDo = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4"> What I Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I help professionals turn who they are and what they do into a strong
            online presence. From layout to final build, I focus on clarity,
            simplicity, and a professional look that works accros all devices.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
