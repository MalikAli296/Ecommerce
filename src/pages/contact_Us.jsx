import React from "react";
import "../styles/Contact_Us.css"; // Your dedicated contact page styles
import '../styles/PagesCommon.css';

const teamMembers = [
  {
    name: "Malik Ali",
    role: "Communication Manager Assistant",
    email: "malik@gmail.com",
    phone: "1234-1234567",
    img: "https://avatar.iran.liara.run/public/24",
    alt: "Malik Ali"
  },
  {
    name: "Ali Raza Awan",
    role: "Product Manager Assistant",
    email: "awan@gmail.com",
    phone: "1234-1234567",  
    img: "https://avatar.iran.liara.run/public/27",
    alt: "Ali Raza Awan"
  }
];

const ContactUs = () => {
  return (
    <div className="contact-page container-fluid py-5">
      <div className="contact-wrapper mx-5">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h1 className="fw-bold contact-title">Contact Us</h1>
          <p className="text-muted contact-subtitle">
            We are here to assist you. Reach out anytime and our team will respond promptly.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="row g-4 justify-content-center mb-5">

          {/* Contact Card */}
          <div className="col-md-5">
            <div className="contact-card p-4 shadow-sm rounded-3 h-100">
              <h4 className="fw-semibold mb-3">Get in Touch</h4>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-envelope-fill contact-icon"></i>
                <div>
                  <h6 className="fw-semibold mb-1">Email</h6>
                  <p className="text-muted mb-0">support@yourcompany.com</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-telephone-fill contact-icon"></i>
                <div>
                  <h6 className="fw-semibold mb-1">Phone</h6>
                  <p className="text-muted mb-0">+92 300 1234567</p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <i className="bi bi-geo-alt-fill contact-icon"></i>
                <div>
                  <h6 className="fw-semibold mb-1">Location</h6>
                  <p className="text-muted mb-0">Islamabad, Pakistan</p>
                </div>
              </div>

            </div>
          </div>

          {/* Google Map */}
          <div className="col-md-7">
            <div className="map-container shadow-sm rounded-3 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.581356702123!2d73.04690267536808!3d33.71815147325809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfba5527dead%3A0x2a9e5078e1bc105b!2sIslamabad!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
          </div>

        </div>

        {/* TEAM SECTION */}
        <div className="team-section mt-5">
          <h2 className="fw-bold text-center mb-4">Our Communication Team</h2>
          <div className="row g-4 justify-content-center">

            {teamMembers.map((member, index) => (
              <div className="col-md-4" key={index}>
                <div className="team-card text-center p-4 shadow-sm rounded-3 h-100">
                  <img
                    src={member.img}
                    className="rounded-circle mb-3 team-img"
                    alt={member.alt}
                  />
                  <h5 className="fw-semibold mb-1">{member.name}</h5>
                  <p className="text-muted mb-2">{member.role}</p>

                  <div className="text-start mt-3">
                    <p className="mb-1"><i className="bi bi-envelope-fill me-2"></i>{member.email}</p>
                    <p className="mb-0"><i className="bi bi-telephone-fill me-2"></i>{member.phone}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
