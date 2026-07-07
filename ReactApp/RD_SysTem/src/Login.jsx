import { useState } from "react";
import "./Login.css"; // We will create this styling file next

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Dynamically update state when a user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Process the form data upon click or 'Enter' key press
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic client-side validation check
    if (!formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }

    // This is where you connect your API later
    console.log("Submitting credentials to server:", formData);
    alert("Login form submitted successfully! (Mocked)");
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p className="login-subtitle">Please enter your details to sign in</p>

        {/* Displays alert if fields are empty or invalid */}
        {error && <div className="error-alert">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-option">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="submit-login-btn">
            Sign In
          </button>
        </form>

        <p className="register-redirect">
          Don't have an account yet? <a href="/register">Create one</a>
        </p>
      </div>
    </div>
  );
}
