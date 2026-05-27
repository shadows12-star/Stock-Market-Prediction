// ─── Hero Section ───────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section className="bg-[#0a0f1a] min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
              New: Real-Time FX Signals Live
            </span>
          </div>

          <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Predict the <br />
            Market with{" "}
            <span className="text-cyan-400">AI Precision</span>
          </h1>

          <p className="text-gray-400 text-base leading-relaxed max-w-md mb-10">
            Harness the power of neural network architectures designed specifically
            for quantitative finance. Gain institutional-grade insights and
            high-confidence market forecasts in milliseconds.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-cyan-400 hover:bg-cyan-300 text-[#0a0f1a] font-bold px-7 py-3 rounded-full flex items-center gap-2 transition-all duration-200">
              Start Predicting
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="border border-white/20 text-white hover:bg-white/5 font-semibold px-7 py-3 rounded-full transition-all duration-200">
              View Demo
            </button>
          </div>
        </div>

        {/* Right: Chart Card */}
        <div className="relative">
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 shadow-2xl">
            {/* Confidence Score Badge */}
            <div className="absolute -top-4 -right-4 bg-[#0d1525] border border-white/10 rounded-xl px-4 py-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest">Confidence Score</p>
                <p className="text-white font-extrabold text-lg leading-none">95.4%</p>
              </div>
            </div>

            {/* Pair & Price */}
            <div className="mb-4">
              <p className="text-gray-400 text-sm">BTC / USD</p>
              <div className="flex items-baseline gap-2">
                <span className="text-white text-2xl font-bold">$64,281.40</span>
                <span className="text-green-400 text-sm font-semibold">+2.45%</span>
              </div>
            </div>

            {/* Fake Bar Chart */}
            <div className="flex items-end gap-1.5 h-28 mb-4">
              {[40, 55, 45, 70, 60, 85, 65, 90, 75, 95, 80, 100].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${i % 3 === 1 ? "bg-red-400/70" : "bg-green-400/80"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            {/* Trend Line (SVG) */}
            <svg viewBox="0 0 300 60" className="w-full mb-4" fill="none">
              <path
                d="M0 50 C50 45, 80 40, 120 30 C160 20, 200 15, 250 10 C270 8, 285 6, 300 4"
                stroke="#22d3ee"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
              <path
                d="M0 50 C50 45, 80 40, 120 30 C160 20, 200 15, 250 10 C270 8, 285 6, 300 4"
                stroke="#22d3ee"
                strokeWidth="1"
                opacity="0.2"
                fill="none"
              />
            </svg>

            {/* AI Feed */}
            <div className="bg-[#0a0f1a] rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <p className="text-gray-400 text-xs uppercase tracking-widest">Real-Time AI Feed</p>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-green-500/20 text-green-400 font-bold px-2 py-0.5 rounded">BUY</span>
                  <span className="text-gray-300 text-xs">NASDAQ 100 at 18,240</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-red-500/20 text-red-400 font-bold px-2 py-0.5 rounded">SELL</span>
                  <span className="text-gray-300 text-xs">GOLD Spot at 2,345.20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Bar ───────────────────────────────────────────────────────────────
export function StatsBar() {
  const stats = [
    { value: "95%", label: "Prediction Accuracy", color: "text-cyan-400" },
    { value: "50K+", label: "Active Traders", color: "text-green-400" },
    { value: "24/7", label: "Market Monitoring", color: "text-yellow-400" },
  ];

  return (
    <section className="bg-[#0d1525] border-y border-white/10 py-12 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className={`text-4xl font-extrabold ${s.color} mb-1`}>{s.value}</p>
            <p className="text-gray-400 text-xs uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Features Section ─────────────────────────────────────────────────────────
export function Features() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      iconBg: "bg-cyan-400/10",
      title: "AI Market Prediction",
      desc: "Our proprietary neural networks identify patterns invisible to the human eye, predicting trends before they emerge with high-fidelity accuracy.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      iconBg: "bg-green-400/10",
      title: "Real-Time Data",
      desc: "Zero-latency data ingestion from over 400 global exchanges, providing a competitive edge in fast-moving volatile markets.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconBg: "bg-yellow-400/10",
      title: "Risk Assessment",
      desc: "Automated risk mitigation strategies that protect your capital against extreme market movements and black swan events.",
    },
  ];

  return (
    <section className="bg-[#0a0f1a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-extrabold mb-4">Unmatched Analytical Power</h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Leveraging quantum-inspired algorithms and deep learning models to process
            trillions of data points across global markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#111827] border border-white/10 rounded-2xl p-7 hover:border-white/20 hover:-translate-y-1 transition-all duration-200"
            >
              <div className={`w-12 h-12 ${f.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ─────────────────────────────────────────────────────────────
export function CTA() {
  return (
    <section className="bg-[#0a0f1a] px-6 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0f2744] to-[#0d1a2e] border border-white/10 rounded-3xl px-10 py-16 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom-right,_rgba(34,211,238,0.08)_0%,_transparent_70%)]" />

          <div className="relative z-10 max-w-xl">
            <h2 className="text-white text-4xl font-extrabold leading-tight mb-8">
              Ready to Outperform the <br /> World's Best Traders?
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-cyan-400 hover:bg-cyan-300 text-[#0a0f1a] font-bold px-7 py-3 rounded-full transition-all duration-200">
                Create Free Account
              </button>
              <button className="border border-white/20 text-white hover:bg-white/5 font-semibold px-7 py-3 rounded-full transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
