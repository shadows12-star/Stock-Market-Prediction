import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="bg-[#070d18] min-h-screen flex flex-col justify-between">
      <Navbar />

      <div className="relative flex-1 py-20 px-6 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
                System Documentation
              </span>
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-black tracking-tight mb-4">
              About <span className="text-cyan-400">Aethena</span>
            </h1>
            <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
              An AI-driven technical visualization environment combining financial analytics pipelines, 
              sequential indicator engineering, and deep learning neural modeling.
            </p>
          </div>

          {/* Project Overview */}
          <div className="bg-[#0d1526]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8 shadow-2xl">
            <h2 className="text-white text-xl font-bold tracking-tight mb-4">
              Project Architecture
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aethena abstracts complex financial evaluations into functional visual data paths. 
              The infrastructure targets historical time-series sequences from the Yahoo Finance engine, 
              constructs mathematical trend baselines, and runs real-time matrix inference pipelines via 
              a specialized Long Short-Term Memory (LSTM) network. The final computed data arrays are served 
              as lightweight REST vectors directly into reactive frontend layers.
            </p>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-[#0d1526]/30 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-white font-bold text-base mb-2">Historical Analysis</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Aggregates up to a decade of asset data metrics directly into continuous visual frames for macro review.
              </p>
            </div>

            <div className="bg-[#0d1526]/30 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-white font-bold text-base mb-2">Moving Averages</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Calculates and projects isolated 100-day and 200-day simple moving indicator lines across structural charts.
              </p>
            </div>

            <div className="bg-[#0d1526]/30 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-cyan-400 font-bold text-base mb-2">LSTM Time-Series Forecasting</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Passes scaled mathematical value blocks through recursive neural networks to approximate predictive paths.
              </p>
            </div>

            <div className="bg-[#0d1526]/30 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-white font-bold text-base mb-2">Model Performance Metrics</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Computes inverse-transformed evaluation values against real points to export true MSE, MAE, and $R^2$ scores.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-[#0d1526]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8 shadow-2xl">
            <h2 className="text-white text-xl font-bold tracking-tight mb-6">
              Core Core Technologies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {[
                "React",
                "Django",
                "Django REST API",
                "TensorFlow",
                "Keras",
                "Scikit-Learn",
                "Pandas",
                "NumPy",
                "Matplotlib",
                "Yahoo Finance",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-[#0a0f1a] border hover:bg-white/20 border-white/5 text-gray-300 text-xs text-center py-3 rounded-xl font-medium tracking-wide transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Developer Section */}
          <div className="bg-gradient-to-br from-[#0f2744] to-[#0d1a2e] border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-white text-xl font-bold tracking-tight mb-3">
              Engineered by Sami
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              This system represents a decoupled full-stack machine learning solution. By tying 
              Django REST framework endpoints directly into native TensorFlow runtimes and passing 
              cleanly managed data blocks up to a React virtual DOM layer, the platform showcases 
              how production-grade software frameworks can elegantly scale mathematical data products.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;