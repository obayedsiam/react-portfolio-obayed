// ContactSection.js
import React from "react";

function ContactSection() {
  const handleEmail = () => {
    window.location.href = `mailto:your-email@example.com?subject=Contact Request`;
  };

  const handleText = () => {
    const phoneNumber = "your-phone-number"; // Use your phone number
    window.location.href = `sms:${phoneNumber}?body=Hi, I would like to contact you.`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Me</h2>
        <p>
          If you'd like to get in touch, you can send me an email or a text
          message!
        </p>
        <button className="contact-button" onClick={handleEmail}>
          Send Email
        </button>
        <button className="contact-button" onClick={handleText}>
          Send Text
        </button>
      </div>
    </section>
  );
}

export default ContactSection;
