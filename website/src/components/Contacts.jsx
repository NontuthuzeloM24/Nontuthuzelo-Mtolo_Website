import React from "react";

const Contacts = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600">
          Ready to present your personal brand professionally online? Let's work
          together to build a website that represents you.
        </p>
        </div>
        <form className="grid gap-6">
          <input type="text" placeholder="Your Name" required className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input type="email" placeholder="Your Email" required className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <textarea placeholder="Your Message" required className="border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition">Get in Touch</button>
        </form>
        </div>
    </section>
  );
};

export default Contacts;
