import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavScroll from "./component/NavScroll.jsx";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";

export default function App() {
  return (
    <BrowserRouter>
      {/* Components placed here (like a Navbar) stay visible on every single page */}
      <NavScroll />

      {/* The Router switches out the components inside this block based on the URL */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
