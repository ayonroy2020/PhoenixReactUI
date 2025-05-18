import React, { useState } from 'react';
// import './ContactForm.css';
import causes_8 from '../../images/causes-1.jpg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const recipientEmail = ' info@phoenixngo.org';
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Message:\n${message} \n\n Name: ${name}\nEmail: ${email}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-form-container">
      <div className="form-section">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="send-message-btn">Send Message</button>
        </form>
      </div>
      <div className="image-section" style={{ backgroundImage: `url(${causes_8})` }}>
        {/* <img src={causes_8} alt="Contact Us" /> */}
      </div>
    </div>
  );
};

export default ContactForm;
