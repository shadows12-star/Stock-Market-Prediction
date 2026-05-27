import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // active nav state
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = ["Home", "Features", "Insights", "Pricing"];

  return (
    <nav className="bg-[#0a0f1a] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-cyan-400 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 text-[#0a0f1a]"
            >
              <path
                d="M3 3l7 7-4 4 7 7 4-4 7-7-7-7-4 4z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className="text-white font-bold text-lg tracking-wide">
            AETHER AI
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setActiveItem(item)}
              className={`text-sm font-medium transition-colors ${
                activeItem === item
                  ? "text-white border-b-2 border-cyan-400 pb-0.5"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-cyan-400 hover:bg-cyan-300 text-[#0a0f1a] font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 tracking-wide">
            GET STARTED
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1525] px-6 pb-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setActiveItem(item)}
              className={`text-sm font-medium ${
                activeItem === item
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}

          <button className="bg-cyan-400 text-[#0a0f1a] font-bold text-sm px-5 py-2.5 rounded-full w-fit">
            GET STARTED
          </button>
        </div>
      )}
    </nav>
  );
}