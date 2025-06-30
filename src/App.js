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
import ServiceDetailPage from "./pages/ServiceDetailPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";


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
           <Route path="/ServiceDetailPage" element={<ServiceDetailPage />} />
           <Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/dashboard" element={<AdminDashboard />} />

         </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
