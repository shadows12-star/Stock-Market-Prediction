import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Hero} from "./components/MainSections";
import {StatsBar} from "./components/MainSections";
import {Features} from "./components/MainSections";
import {CTA} from "./components/MainSections";
import Login from "./components/Login";
import {Routes, Route} from "react-router-dom";
import Register from "./components/Register";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <CTA />
      <Footer /></>

        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
     
    </div>
  );
}