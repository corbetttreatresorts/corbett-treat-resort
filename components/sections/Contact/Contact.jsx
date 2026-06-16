"use client";

import "./Contact.css";
import { useState } from "react";
import Button from "../../Button";
import { RiMapPinLine, RiPhoneLine, RiMailSendLine } from "react-icons/ri";
import { CONTACT_PHONES, RESORT_ADDRESS, CONTACT_EMAIL } from "@/constants";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-subtitle">GET IN TOUCH</span>
          <h2 className="contact-heading">Plan Your Perfect Escape</h2>
          <p className="contact-desc">
            Reach out to our team for reservations, special requests, or any questions about your upcoming stay at Corbett Treat Resort.
          </p>
        </div>

        <div className="contact-grid">
          
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <RiMapPinLine />
              </div>
              <div>
                <h3>Our Location</h3>
                <p>{RESORT_ADDRESS}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <RiPhoneLine />
              </div>
              <div>
                <h3>Call Us</h3>
                {CONTACT_PHONES.map((phone, idx) => (
                  <p key={idx}>
                    <a href={phone.href}>{phone.label}</a>
                  </p>
                ))}
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <RiMailSendLine />
              </div>
              <div>
                <h3>Email Us</h3>
                <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
              </div>
            </div>
          </div>

          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us about your dates, group size, or special requirements..."
                />
              </div>

              <Button
                variant="primary"
                size="large"
                className="submit-btn"
                disabled={isSubmitting}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {submitStatus === "success" && (
                <div className="form-status success">
                  Thank you! Your message has been sent successfully. We will get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
