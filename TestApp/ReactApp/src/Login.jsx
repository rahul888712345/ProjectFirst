import { useState } from "react";
import "./Login.css"; // Purana CSS file reuse karein

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("rahul@gmail.com");
  const [password, setPassword] = useState("Rahul@1234");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Mock validation
    if (email && password) {
      onLogin(); // App.jsx me auth state true karega aur Navbar activate karega
      navigate("/dashboard"); // Dashboard par redirect karega
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>RD SYSTEMS</h2>
        <form onSubmit={handleFormSubmit} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-login-btn">
            Sign In
          </button>
        </form>
        <p className="signup-redirect">
          Don't have an account? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
}
