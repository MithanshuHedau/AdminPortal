import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AuthPractice</h3>
            <p>A secure authentication system built with React and Node.js</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>Secure Authentication</li>
              <li>JWT Tokens</li>
              <li>Protected Routes</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 AuthPractice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
