// ─── Hero Section ───────────────────────────────────────────────────────────
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="bg-[#0a0f1a] min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
              Live: 10-Year Historical Analysis Engine
            </span>
          </div>

          <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Predict Stocks <br />
            with Deep Learning <br />
            <span className="text-cyan-400">LSTM Models</span>
          </h1>

          <p className="text-gray-400 text-base leading-relaxed max-w-md mb-10">
            Instantly ingest a decade of Yahoo Finance data, evaluate technical indicators, 
            and view backtested forecasts. Powered by a Django REST backend, React frontend, 
            and an optimized TensorFlow Keras evaluation engine.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/dashboard" className="bg-cyan-400 hover:bg-cyan-300 text-[#0a0f1a] font-bold px-7 py-3 rounded-full flex items-center gap-2 transition-all duration-200">
              Launch Dashboard
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
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
                <p className="text-gray-400 text-[10px] uppercase tracking-widest">Model Fit ($R^2$)</p>
                <p className="text-white font-extrabold text-lg leading-none">High Variance Fit</p>
              </div>
            </div>

            {/* Pair & Price */}
            <div className="mb-4">
              <p className="text-gray-400 text-sm">Sample Pipeline Feed</p>
              <div className="flex items-baseline gap-2">
                <span className="text-white text-2xl font-bold">SPY / USD</span>
                <span className="text-cyan-400 text-sm font-semibold">100 & 200 Day MA</span>
              </div>
            </div>

            {/* Fake Bar Chart */}
            <div className="flex items-end gap-1.5 h-28 mb-4">
              {[40, 55, 45, 70, 60, 85, 65, 90, 75, 95, 80, 100].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${i % 3 === 1 ? "bg-cyan-500/40" : "bg-cyan-400/80"}`}
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
                strokeOpacity="0.2"
                fill="none"
              />
            </svg>

            {/* AI Feed */}
            <div className="bg-[#0a0f1a] rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <p className="text-gray-400 text-xs uppercase tracking-widest">Active Evaluation Metrics</p>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <span>Mean Squared Error (MSE)</span>
                  <span className="font-mono text-cyan-400">Calculated Live</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <span>Mean Absolute Error (MAE)</span>
                  <span className="font-mono text-cyan-400">Calculated Live</span>
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
    { value: "10 Yrs", label: "Yahoo Finance Data", color: "text-cyan-400" },
    { value: "2", label: "Moving Averages (100/200)", color: "text-green-400" },
    { value: "LSTM", label: "Keras Recurrent Model", color: "text-yellow-400" },
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      ),
      iconBg: "bg-cyan-400/10",
      title: "Technical Trend Analysis",
      desc: "Our Django backend processes incoming asset streams to compute and chart 100-day and 200-day Simple Moving Averages, mapping structural macro trends visually.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      iconBg: "bg-green-400/10",
      title: "Isolated Scale Inference",
      desc: "Input validation schemas feed unified historical blocks into a standalone MinMaxScaler pipeline, preparing data matrices for unbiased model testing.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconBg: "bg-yellow-400/10",
      title: "Hardened Error Scoring",
      desc: "Every dynamic test generation maps original values cleanly against inverse-transformed predictions to yield concrete MSE, MAE, and R-Squared validation metrics.",
    },
  ];

  return (
    <section className="bg-[#0a0f1a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-extrabold mb-4">Granular Analytical Processing</h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Leveraging structured time-series loops to step through sequential data dependencies 
            and generate deterministic model outputs.
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
              Ready to Analyze historical trends <br /> and evaluate your LSTM model?
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="bg-cyan-400 hover:bg-cyan-300 text-[#0a0f1a] font-bold px-7 py-3 rounded-full transition-all duration-200">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}