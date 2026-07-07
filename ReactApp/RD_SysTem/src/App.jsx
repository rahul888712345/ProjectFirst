import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Login from "./Login.jsx";

export default function App() {
  return (
    <BrowserRouter>
      {/* Components placed here (like a Navbar) stay visible on every single page */}
      <Navbar />

      {/* The Router switches out the components inside this block based on the URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
