import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Services from "./Services.jsx";
import Register from "./Register.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  // Login state ko maintain karne ke liye state (ya localStorage use kar sakte hain)
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("userToken"),
  );

  const loginUser = () => {
    localStorage.setItem("userToken", "mock-token-xyz");
    setIsAuthenticated(true);
  };

  const logoutUser = () => {
    localStorage.removeItem("userToken");
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      {/* Agar user logged in hai, sirf tabhi Navbar screen par dikhega */}
      {isAuthenticated && <Navbar onLogout={logoutUser} />}

      <Routes>
        {/* Default / path par check hoga: login hai to dashboard bhejo, nahi to login component */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login onLogin={loginUser} />
            )
          }
        />

        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login onLogin={loginUser} />
            )
          }
        />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Route: Agar logged in nahi hai to wapas login page par kick out karo */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
      {isAuthenticated && <Footer onLogout={logoutUser} />}
    </BrowserRouter>
  );
}
