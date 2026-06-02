import "./index.css";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Vans from "./component/Vans";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
