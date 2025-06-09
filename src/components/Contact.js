import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact <span>Me</span></h2>
      <form className="contact-form" noValidate>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Mobile Number" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Your Message" required></textarea>
        <button className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
