import React from 'react';

const Contacts = () => {
    return (
        <section>
            <div>
                <h2>Contact</h2>
                <p>Ready to connect with you!</p>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    )
}
 export default Contacts;