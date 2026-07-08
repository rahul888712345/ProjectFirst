import { Link } from "react-router-dom";

export default function Navbar({ onLogout }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between", // ❌ 'justify-content' ko 'justifyContent' me badla
        background: "#1a1a1a",
        padding: "1rem 2rem",
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/dashboard"
          style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
        >
          Dashboard
        </Link>
        <Link
          to="/home"
          style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
        >
          About
        </Link>
      </div>

      <button
        onClick={onLogout}
        style={{
          background: "#dc2626",
          color: "white",
          border: "none",
          padding: "5px 15px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </nav>
  );
}
