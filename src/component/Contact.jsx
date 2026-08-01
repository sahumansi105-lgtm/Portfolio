import { useRef, useState } from "react";
import axios from "axios";
import "../CSS/Contact.css";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const name = formData.get("user_name").trim();
    const email = formData.get("user_email").trim();
    const phone = formData.get("user_phone").trim();
    const message = formData.get("message").trim();

    // Name Validation
    const nameRegex = /^[A-Za-z ]{2,40}$/;

    if (!nameRegex.test(name)) {
      alert("Please enter a valid name (letters and spaces only).");
      return;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone Validation
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    // Message Validation
    if (message.length < 10) {
      alert("Message must contain at least 10 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/contact", {
        name,
        email,
        phone,
        message,
      });

      alert(response.data || "Message sent successfully!");

      form.current.reset();
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data || "Failed to send message.");
      } else {
        alert("Server not responding. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h3>Let's Connect</h3>

          <div className="info-item">
            📧
            <a href="mailto:sahumansi105@gmail.com">
              sahumansi105@gmail.com
            </a>
          </div>

          <div className="info-item">
            📱
            <a href="tel:+917738216790">
              +91 7738216790
            </a>
          </div>

          <div className="info-item">
            💼
            <a
              href="https://www.linkedin.com/in/mansi-shahu105"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="info-item">
            💻
            <a
              href="https://github.com/sahumansi105-lgtm"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </div>

          <div className="info-item">
            📍 Mumbai, Maharashtra, India
          </div>

          <a
            className="whatsapp-btn"
            href="https://wa.me/917738216790?text=Hello%20Mansi,%20I%20would%20like%20to%20contact%20you."
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* Right Side */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            minLength="2"
            maxLength="40"
            pattern="[A-Za-z ]{2,40}"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <input
            type="tel"
            name="user_phone"
            placeholder="Your Phone Number"
            maxLength="10"
            pattern="[6-9][0-9]{9}"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            minLength="10"
            maxLength="500"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? (
              <>
                <span className="loader"></span> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;