import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/AboutsUs";
import ContactPage from "./Pages/ContactPage";
import ServicesPage from "./Pages/ServicesPage";
import MobileServices from "./Pages/Sub/MobileServices";
import TabletServices from "./Pages/Sub/TabletServices";
import IpadServices from "./Pages/Sub/IpadServices";
import LaptopServices from "./Pages/Sub/LaptopServices";
import ComputerServices from "./Pages/Sub/ComputerServices";
import logo from "./Img/logo.png";
import Navbar from "./Components/Navbar";
import Footer from "./Pages/Sections/Footer";

function App() {
  return (
    <div className="w-full h-full  flex flex-col">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/MobileServices" element={<MobileServices />} />
          <Route path="/TabletServices" element={<TabletServices />} />
          <Route path="/IpadServices" element={<IpadServices />} />
          <Route path="/LaptopServices" element={<LaptopServices />} />
          <Route path="/ComputerServices" element={<ComputerServices />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
