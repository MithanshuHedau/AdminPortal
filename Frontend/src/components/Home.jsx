import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const handleLearnMore = () => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="brand-highlight">AuthPractice</span>
          </h1>
          <p className="hero-description">
            A secure and modern authentication system built with React and
            Node.js. Experience seamless user registration, login, and protected
            content access.
          </p>
          <div className="hero-buttons">
            <button onClick={handleGetStarted} className="btn btn-primary">
              {isLoggedIn ? "Go to Dashboard" : "Get Started"}
            </button>
            {!isLoggedIn && (
              <Link to="/signup" className="btn btn-secondary">
                Sign Up Free
              </Link>
            )}
          </div>
        </div>
        <div className="hero-image">
          <div className="auth-visual">
            <div className="auth-card-demo">
              <div className="demo-header">🔐</div>
              <div className="demo-content">
                <div className="demo-line"></div>
                <div className="demo-line short"></div>
                <div className="demo-button"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose AuthPractice?</h2>
          <div className="features-grid">
            <div
              className="feature-card"
              onClick={() => !isLoggedIn && handleLearnMore()}
            >
              <div className="feature-icon">🔒</div>
              <h3>Secure Authentication</h3>
              <p>
                Industry-standard security with JWT tokens, password hashing,
                and secure session management.
              </p>
            </div>

            <div
              className="feature-card"
              onClick={() => !isLoggedIn && handleLearnMore()}
            >
              <div className="feature-icon">⚡</div>
              <h3>Fast & Responsive</h3>
              <p>
                Lightning-fast performance with modern React components and
                optimized backend API responses.
              </p>
            </div>

            <div
              className="feature-card"
              onClick={() => !isLoggedIn && handleLearnMore()}
            >
              <div className="feature-icon">🎨</div>
              <h3>Modern Design</h3>
              <p>
                Beautiful, responsive UI that works seamlessly across all
                devices and screen sizes.
              </p>
            </div>

            <div
              className="feature-card"
              onClick={() => !isLoggedIn && handleLearnMore()}
            >
              <div className="feature-icon">🛡️</div>
              <h3>Protected Routes</h3>
              <p>
                Advanced route protection ensuring only authenticated users can
                access sensitive content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Join thousands of users who trust AuthPractice for their
              authentication needs.
            </p>
            <div className="cta-buttons">
              {!isLoggedIn ? (
                <>
                  <Link to="/signup" className="btn btn-primary large">
                    Create Account
                  </Link>
                  <Link to="/login" className="btn btn-outline large">
                    Sign In
                  </Link>
                </>
              ) : (
                <Link to="/dashboard" className="btn btn-primary large">
                  Access Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
