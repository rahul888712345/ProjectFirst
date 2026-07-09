import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  // 1. Ek hi state object me saari fields ko manage karna
  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    age: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Inputs ke badalne par state update karne ka function
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 2. Form submit hone par validation aur redirection
  const handleSubmit = (e) => {
    e.preventDefault(); // Page refresh rokne ke liye

    const { fullName, city, age, email, password } = formData;

    // Validation: Koi field khali toh nahi hai?
    if (!fullName || !city || !age || !email || !password) {
      setError("Please fill in all the fields.");
      return;
    }

    // Age Validation: Kya age sahi number hai?
    if (Number(age) <= 0 || Number(age) > 120) {
      setError("Please enter a valid age between 1 and 120.");
      return;
    }

    // Password Length Validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError(""); // Sab sahi hone par error clear karein

    // Success Action
    console.log("Registered Data: ", formData);
    alert("Registration Successful! 🎉");

    // Register hone ke baad login page par redirect karein
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>📝 Registration Form</h2>

        {/* Error Message */}
        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Full Name Field */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* City Field */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>City</label>
            <input
              type="text"
              name="city"
              placeholder="e.g. Mumbai, Delhi"
              value={formData.city}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* Age Field */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* Email Field */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* Password Field */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Minimum 6 characters"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* Register Button */}
          <button type="submit" style={styles.button}>
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

// 3. Clean Inline Styling (CSS)
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f6f9",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "450px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "15px",
    boxSizing: "border-box",
  },
  button: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "15px",
  },
  error: {
    color: "red",
    backgroundColor: "#f8d7da",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "14px",
    textAlign: "center",
    marginBottom: "15px",
  },
};
