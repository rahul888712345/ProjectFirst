import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Section 1: About / Brand */}
        <div className="footer-section about">
          <h3>My Dashboard</h3>
          <p>
            An intuitive and powerful platform built to manage your data, track
            performance, and streamline your daily workflows with ease.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#analytics">Analytics</a>
            </li>
            <li>
              <a href="#settings">Settings</a>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact / Support */}
        <div className="footer-section contact">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#faq">FAQs</a>
            </li>
            <li>
              <a href="#help">Help Center</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RD-System. All rights reserved.</p>
      </div>
    </footer>
  );
}
