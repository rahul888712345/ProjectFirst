import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Servicess from "./Servicess";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/servicess" element={<Servicess />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
