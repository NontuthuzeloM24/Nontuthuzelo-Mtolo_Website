import React from "react";

const Contacts = () => {
  return (
    <section>
      <div>
        <h2>Contact</h2>
        <p>
          Ready to present your personal brand professionally online? Let's work
          together to build a website that represents you.
        </p>
        </div>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Get in Touch</button>
        </form>
    </section>
  );
};

export default Contacts;
