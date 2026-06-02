import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Hero} from "./components/MainSections";
import {StatsBar} from "./components/MainSections";
import {Features} from "./components/MainSections";
import {CTA} from "./components/MainSections";
import Login from "./components/Login";
import {Routes, Route} from "react-router-dom";
import Register from "./components/Register";
import AuthProvider from "./components/AuthProvider";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import About from "./components/About";

export default function App() {
  return (
    <AuthProvider>
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
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/about" element={
       
            <About />
          
        } />
      </Routes>
      
     
    </div>
    </AuthProvider>
  );
}