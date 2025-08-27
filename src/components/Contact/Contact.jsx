import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [isSuccess, setIsSuccess] = React.useState(false);

  // Development mode - set to false for production
  const isDevelopment = false;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setIsSuccess(false);

    // Simulate form submission in development mode
    if (isDevelopment) {
      setTimeout(() => {
        setResult("Form Submitted Successfully (Development Mode)");
        setIsSuccess(true);
        event.target.reset();
      }, 1000);
      return;
    }

    const formData = new FormData(event.target);
    formData.append(
      "subject",
      "New Contact Form Submission from Portfolio Website"
    );
    formData.append("from_name", "Portfolio Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok || response.status === 301 || response.status === 302) {
        // Success or redirect means the form was submitted
        setResult(
          "Form Submitted Successfully! You should receive an email confirmation."
        );
        setIsSuccess(true);
        event.target.reset();
      } else {
        const data = await response.json();
        if (response.status === 429) {
          setResult("Too many requests. Please wait a moment and try again.");
          setIsSuccess(false);
        } else if (response.status === 400) {
          setResult("Please check your form data and try again.");
          setIsSuccess(false);
        } else {
          setResult(data.message || "Failed to submit form. Please try again.");
          setIsSuccess(false);
        }
      }
    } catch (error) {
      console.log("Error caught:", error);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's connect!</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <Mail size={24} />
              <p>atrakic1@gmail.com</p>
            </div>
            <div className="contact-detail">
              <Phone size={24} />
              <p>301.820.1425</p>
            </div>
            <div className="contact-detail">
              <MapPin size={24} />
              <p>New York, NY</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          {/* Hidden field for Web3Forms */}
          <input
            type="hidden"
            name="access_key"
            value="6f8bdc3e-802f-45e1-ab3d-697f53e87442"
          />

          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
          {result && (
            <p className={`form-result ${isSuccess ? "success" : "error"}`}>
              {result}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
