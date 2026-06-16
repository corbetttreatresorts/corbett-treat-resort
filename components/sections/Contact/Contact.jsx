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
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const cleanPhone = formData.phone.replace(/\D/g, "");
      if (cleanPhone.length < 10) {
        newErrors.phone = "Phone number must be at least 10 digits";
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setErrorMessage("");
    setToast({ show: false, message: "", type: "" });

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Format current date and time in 12-hour format
    const now = new Date();
    const formattedDate = now.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });

    try {
      // Google Apps Script doesn't support CORS OPTIONS preflight requests for application/json POSTs.
      // We use mode: "no-cors" and Content-Type: "text/plain" to bypass CORS preflight.
      // Google Apps Script's e.postData.contents will still receive the JSON string correctly.
      await fetch(
        "https://script.google.com/macros/s/AKfycbxiDDhmaNQYyEkXRsMfIkrFvGFBOQTgKI5d2Wyrt7e2YOdVFU1Gi0Rl8QL64NOL21ah/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            date: formattedDate,
            timestamp: formattedDate
          })
        }
      );

      // In no-cors mode, the response is opaque, meaning we can't read response.ok or response.status.
      // If the fetch call resolves without throwing an error, we treat it as a success.
      setSubmitStatus("success");
      setToast({
        show: true,
        message: "Thank you! Your message has been sent successfully. We will get back to you soon.",
        type: "success"
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});

      // Auto hide toast after 5 seconds
      setTimeout(() => {
        setToast(prev => ({ ...prev, show: false }));
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      const err = error.message || "Something went wrong. Please try again later.";
      setErrorMessage(err);
      setToast({
        show: true,
        message: err,
        type: "error"
      });
      
      setTimeout(() => {
        setToast(prev => ({ ...prev, show: false }));
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
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
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <span className="error-msg" style={{ color: "#ff5252", fontSize: "0.8rem", marginTop: "4px" }}>
                    {errors.name}
                  </span>
                )}
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
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="error-msg" style={{ color: "#ff5252", fontSize: "0.8rem", marginTop: "4px" }}>
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <span className="error-msg" style={{ color: "#ff5252", fontSize: "0.8rem", marginTop: "4px" }}>
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your dates, group size, or special requirements..."
                />
                {errors.message && (
                  <span className="error-msg" style={{ color: "#ff5252", fontSize: "0.8rem", marginTop: "4px" }}>
                    {errors.message}
                  </span>
                )}
              </div>

              <Button
                type="submit"
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

              {submitStatus === "error" && (
                <div className="form-status error">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification Container */}
      <div className="toast-container">
        <div className={`toast-notification ${toast.type} ${toast.show ? "show" : ""}`}>
          <div className="toast-content">{toast.message}</div>
          <button
            type="button"
            className="toast-close"
            onClick={() => setToast(prev => ({ ...prev, show: false }))}
          >
            &times;
          </button>
        </div>
      </div>
    </section>
  );
}
