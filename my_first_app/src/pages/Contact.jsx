
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting LUXE!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <p className="text-secondary text-uppercase">Get In Touch</p>
        <h1 className="fw-bold">Contact Us</h1>
        <p>We would love to hear from you.</p>
      </div>

      <div className="row g-5">
        <div className="col-lg-5">
          <h3 className="fw-bold mb-4">Let's Talk</h3>
          <p className="text-secondary">
            Have a question about our products or your order?
            Send us a message.
          </p>

          <p><strong>Email:</strong> support@luxe.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Pune, Maharashtra, India</p>
        </div>

        <div className="col-lg-7">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control p-3"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control p-3"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="subject"
                className="form-control p-3"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                className="form-control p-3"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-dark px-5 py-3">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
