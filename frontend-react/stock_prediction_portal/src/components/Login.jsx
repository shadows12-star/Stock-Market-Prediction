import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const autofillStyle = {
  WebkitBoxShadow: "0 0 0px 1000px #111827 inset",
  WebkitTextFillColor: "white",
  caretColor: "white",
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username,  password);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen relative overflow-hidden bg-[#070d18] flex flex-col items-center justify-between px-6 py-12">

        {/* Background Glow Effects */}
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[320px] h-[320px] bg-blue-500/10 blur-[120px] rounded-full" />

        {/* Top Branding */}
        <div className="relative z-10 flex flex-col items-center gap-4 mt-6">
          {/* Logo */}
          <div className="w-20 h-20 bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            <svg className="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="8" cy="15" r="3" strokeWidth="2" />
              <circle cx="16" cy="9" r="2" strokeWidth="2" />
              <circle cx="17" cy="17" r="1.5" strokeWidth="2" />
              <line x1="10.5" y1="13.5" x2="14.5" y2="10.5" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="16.2" y1="11" x2="16.8" y2="15.5" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Brand Text */}
          <div className="text-center">
            <p className="text-cyan-400 font-black text-xl tracking-[0.25em] uppercase">AETHER AI</p>
            <p className="text-gray-500 text-xs tracking-[0.35em] uppercase mt-1">Neural Market Analysis</p>
          </div>
        </div>

        {/* Login Content */}
        <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-8">

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-white text-5xl font-black tracking-tight mb-3">Welcome Back</h1>
            <p className="text-gray-400 text-sm">Access your predictive trading insights</p>
          </div>

          {/* Login Card — single <form>, no duplicate wrapper div */}
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >
            {/* Username */}
            <div className="mb-5">
              <label className="text-gray-400 text-[11px] font-bold tracking-widest uppercase mb-2 block">
                Username
              </label>
              <div className="flex items-center gap-3 bg-[#111827]/80 border border-white/10 hover:border-white/20 focus-within:border-cyan-400/50 rounded-xl px-4 py-3 transition-all duration-300">
                <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5.121 17.804A9 9 0 1118.88 17.8M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="your_username"
                  style={autofillStyle}
                  className="bg-transparent text-white text-sm placeholder-gray-600 outline-none w-full"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-gray-400 text-[11px] font-bold tracking-widest uppercase">
                  Password
                </label>
                <a href="#" className="text-cyan-400 text-xs font-semibold hover:text-cyan-300 transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="flex items-center gap-3 bg-[#111827]/80 border border-white/10 hover:border-white/20 focus-within:border-cyan-400/50 rounded-xl px-4 py-3 transition-all duration-300">
                <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={autofillStyle}
                  className="bg-transparent text-white text-sm placeholder-gray-600 outline-none w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 hover:text-gray-300 transition-colors shrink-0"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-[1.01] hover:shadow-cyan-500/30 active:scale-[0.99] text-[#070d18] font-extrabold text-lg py-4 rounded-2xl transition-all duration-300 shadow-xl"
            >
              Login
            </button>

            {/* Small Security Text */}
            <p className="text-center text-gray-500 text-xs mt-4">
              Secure AI-powered authentication system
            </p>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-gray-600 text-[11px] tracking-widest uppercase font-medium">Or continue with</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-[#111827] hover:bg-[#1a2540] border border-white/10 rounded-xl py-3 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-white text-sm font-semibold">Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-[#111827] hover:bg-[#1a2540] border border-white/10 rounded-xl py-3 transition-all duration-200"
              >
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                <span className="text-white text-sm font-semibold">SSO</span>
              </button>
            </div>
          </form>

          {/* Sign Up */}
          <p className="text-gray-500 text-sm">
            Don't have an account?{" "}
       
            <Link to ="/register" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
              Sign up for free
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="relative z-10 text-gray-600 tracking-wide text-xs text-center pb-2">
          © 2024 AETHER AI. Neural Market Analysis.
        </p>
      </div>
      <Footer />
    </>
  );
}