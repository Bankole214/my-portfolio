import React, { useState } from "react";
import emailjs from "@emailjs/browser"; 
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailJSSubmit = async (formData) => {
    return emailjs.send(
      "service_bw3x7hw",
      "template_cnazg5l",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "adegunlenurudeen214@gmail.com",
        reply_to: formData.email,
      },
      "qhDcxQ_AGwgrppnlE"
    );
  };

  const handleFallbackSubmit = (formData) => {
    // Create a mailto link as fallback
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;

    window.location.href = `mailto:adegunlenurudeen214@gmail.com?subject=${subject}&body=${body}`;
    return Promise.resolve(); // Simulate success
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Try EmailJS first
      await handleEmailJSSubmit(formData);
      console.log("Email sent via EmailJS");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("EmailJS failed, using fallback:", error);

      // Use fallback method
      try {
        await handleFallbackSubmit(formData);
        setSubmitStatus("fallback");
        setFormData({ name: "", email: "", message: "" });
      } catch (fallbackError) {
        console.error("All methods failed:", fallbackError);
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>I'm always interested in new opportunities and challenges.</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> adegunlenurudeen214@gmail.com
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> +2348135522924
              </div>
              <div className="contact-item">
                <strong>Location:</strong> Lagos, Nigeria
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}></textarea>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="status-message success">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "fallback" && (
              <div className="status-message info">
                📧 Opening your email client... Please send the pre-filled
                email.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="status-message error">
                ❌ Failed to send message. Please email me directly at{" "}
                <a href="mailto:adegunlenurudeen214@gmail.com">
                  adegunlenurudeen214@gmail.com
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;