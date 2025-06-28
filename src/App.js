import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonial from "./pages/Testimonial";


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/services" element={<Services />} />
           <Route path="/reviews" element={<Testimonial />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/about" element={<About />} />
         </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
