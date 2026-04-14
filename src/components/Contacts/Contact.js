import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
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
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
    window.location.href = `mailto:adegunlenurudeen214@gmail.com?subject=${subject}&body=${body}`;
    return Promise.resolve();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await handleEmailJSSubmit(formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      try {
        await handleFallbackSubmit(formData);
        setSubmitStatus("fallback");
        setFormData({ name: "", email: "", message: "" });
      } catch (fallbackError) {
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-heading">Let's build something together</h3>
              <p className="contact-text">
                I'm currently looking for new opportunities. Whether you have a question 
                or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="icon-box"><Mail /></div>
                  <div className="detail-text">
                    <span>Email</span>
                    <a href="mailto:adegunlenurudeen214@gmail.com">adegunlenurudeen214@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon-box"><Phone rotate={90} /></div>
                  <div className="detail-text">
                    <span>Phone</span>
                    <a href="tel:+2348135522924">+234 813 552 2924</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon-box"><MapPin /></div>
                  <div className="detail-text">
                    <span>Location</span>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="How can I help you?"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="status-message success"
                  >
                    <CheckCircle size={18} /> Message sent successfully!
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="status-message error"
                  >
                    <AlertCircle size={18} /> Failed to send message.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;