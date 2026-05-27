export default function Footer() {
  const links = {
    PLATFORM: ["Features", "Real-time Data", "AI Insights", "Pricing"],
    COMPANY: ["About Us", "Careers", "Press Kit", "Contact"],
    LEGAL: ["Privacy Policy", "Terms of Service", "Security"],
  };

  return (
    <footer className="bg-[#070d18] border-t border-white/10 px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-cyan-400 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#0a0f1a]">
                  <path d="M3 3l7 7-4 4 7 7 4-4 7-7-7-7-4 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-white font-bold text-lg tracking-wide">AETHER AI</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              The future of algorithmic market prediction, powered by advanced artificial intelligence.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <p className="text-white text-xs font-bold tracking-widest uppercase mb-4">{heading}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-gray-200 text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs tracking-wide">
            © 2024 AETHER AI SYSTEMS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4">
            {/* Globe */}
            <a href="#" className="text-gray-600 hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </a>
            {/* Mail */}
            <a href="#" className="text-gray-600 hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            {/* RSS */}
            <a href="#" className="text-gray-600 hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7M6 17a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
