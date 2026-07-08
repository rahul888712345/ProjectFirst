import "./Home.css";
export default function Home() {
  const features = [
    {
      id: 1,
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Optimized for high performance, loading instantly for global users.",
    },
    {
      id: 2,
      icon: "🛡️",
      title: "Secure by Default",
      description:
        "Enterprise-grade encryption and data protection mechanics built-in.",
    },
    {
      id: 3,
      icon: "⚙️",
      title: "Highly Customisable",
      description:
        "Easily tweak layouts, themes, and integrations to fit your precise needs.",
    },
  ];
  function test() {
    alert("Register Successful!!");
  }
  return (
    <div className="home-container">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="badge">Introducing Version 2.0</span>
          <h1>Build Apps Faster Than Ever Before</h1>
          <p className="hero-subtitle">
            A modern, production-ready design ecosystem crafted to accelerate
            your workflow. Stop configuring boilerplate and start shipping
            features.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Get Started Free</button>
            <button className="btn btn-secondary">Live Demo ↗</button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80"
            alt="Product Analytics Platform Interface"
            className="hero-image"
          />
        </div>
      </section>

      {/* 2. FEATURES GRID */}
      <section className="features-section">
        <div className="section-header">
          <h2>Everything you need to scale</h2>
          <p>
            Ditch the disparate tools. Manage everything under a unified
            dashboard infrastructure.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CALL TO ACTION (CTA) PROMO */}
      <section className="cta-section">
        <div className="cta-card">
          <h2>Ready to transform your workflow?</h2>
          <p>Join over 10,000+ developers scaling applications seamlessly.</p>
          <button className="btn btn-light" onClick={test}>
            Create Account
          </button>
        </div>
      </section>
    </div>
  );
}
