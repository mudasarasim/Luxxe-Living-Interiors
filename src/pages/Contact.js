import React, { useState } from "react";
import "./Contact.css"; // Make sure your styles are updated here

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Banner / Breadcrumb */}
      <section
        className="breadcrumb-area style2"
        style={{
          backgroundImage: `url('images/resources/breadcrumb-bg.jpg')`,
        }}
      >
        <div className="container">
          <div className="inner-content-box text-center">
            <h1>Contact Us</h1>
            <p>We’re here to help and answer any question you might have.</p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-area">
        <div className="container">
          <div className="row justify-content-center gap-4">
            {[
              {
                icon: "📍",
                title: "Address",
                content: "Al Hazm Building, Hor AL Anz, Dubai, UAE",
              },
              {
                icon: "📞",
                title: "Phone",
                content: "+971 52 513 1339",
              },
              {
                icon: "✉️",
                title: "Email",
                content: "lovelie.gallo@gmail.com",
              },
              {
                icon: "⏰",
                title: "Working Hours",
                content: "Mon - Fri: 9:00 AM - 6:00 PM",
              },
            ].map(({ icon, title, content }, i) => (
              <div key={i} className="contact-info-card">
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p>{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map Section */}
      <section className="contact-form-area">
        <div className="container">
          <div className="row contact-form-wrapper">
            {/* Form */}
            <div className="col contact-form-col">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                  />
                </label>

                <label>
                  Subject
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                  />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here"
                  />
                </label>

                <div className="button">
                  <button className="btn-one" type="submit">
                    Send Message <span className="flaticon-next"></span>
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="col map-col">
              <iframe
                title="company-location"
                src="https://maps.google.com/maps?q=Office%20No%3A9%2C%20Al%20Hazm%20Building%2C%20Hor%20AL%20Anz%2C%20Dubai&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
