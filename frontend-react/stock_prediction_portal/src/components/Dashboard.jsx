import React, { useState, useEffect } from "react";
import axiosInstance from "./axiosinstance";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dashboard = () => {
  const [ticker, setTicker] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [prediction, setPrediction] = useState(null);
  const [days_100_plot, setDays100Plot] = useState(null);
  const [days_200_plot, setDays200Plot] = useState(null);
  const [plot, setPlot] = useState(null);

  const [mse, setMse] = useState(null);
  const [mae, setMae] = useState(null);
  const [r2Score, setR2Score] = useState(null);

  const handlesubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post("/predict/", {
        ticker,
      });

      const data = response.data;

      const backendRoot =
        import.meta.env.VITE_BACKEND_ROOT ||
        "http://127.0.0.1:8000";

      setPlot(backendRoot + data.image_url);
      setDays100Plot(
        backendRoot +
          data["100_days_moving_average_image_url"]
      );
      setDays200Plot(
        backendRoot +
          data["200_days_moving_average_image_url"]
      );
      setPrediction(
        backendRoot + data["prediction_image_url"]
      );

      setMse(data.mse);
      setMae(data.mae);
      setR2Score(data.r2_score);

      setTicker("");
    } catch (error) {
      console.error(error);
      setError(
        "Unable to analyze this stock. Please try another ticker."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        await axiosInstance.get("/protected-view/");
      } catch (error) {
        console.error(error);
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#0a0f1a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">
              AI Stock Prediction Dashboard
            </h1>

            <p className="text-gray-400 max-w-3xl text-lg">
              Analyze historical stock performance,
              explore technical indicators, and
              generate AI-powered forecasts using a
              Long Short-Term Memory (LSTM) neural
              network trained on historical market
              data.
            </p>
          </div>

          {/* Search Form */}
          <form
            onSubmit={handlesubmit}
            className="bg-[#111827] border border-white/10 rounded-2xl p-6 mb-10"
          >
            <label className="block text-lg font-semibold mb-4">
              Enter Stock Ticker Symbol
            </label>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                required
                type="text"
                value={ticker}
                onChange={(e) =>
                  setTicker(e.target.value.toUpperCase())
                }
                placeholder="GOOG, AAPL, TSLA..."
                className="flex-1 bg-[#1f2937] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-black font-bold px-8 py-3 rounded-xl transition-all"
              >
                {loading
                  ? "Analyzing..."
                  : "Predict Stock"}
              </button>
            </div>
          </form>

          {/* Error */}
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 p-4 rounded-xl mb-8">
              {error}
            </div>
          )}

          {/* Loading Spinner */}
          {loading && (
            <div className="flex justify-center py-12">
              <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-cyan-400"></div>
            </div>
          )}

          {/* Metrics */}
          {(mse !== null ||
            mae !== null ||
            r2Score !== null) && (
            <>
              <h2 className="text-3xl font-bold mb-6">
                Model Performance
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                  <p className="text-gray-400">
                    Mean Squared Error
                  </p>

                  <h3 className="text-3xl font-bold mt-2 text-cyan-400">
                    {mse?.toFixed(4)}
                  </h3>
                </div>

                <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                  <p className="text-gray-400">
                    Mean Absolute Error
                  </p>

                  <h3 className="text-3xl font-bold mt-2 text-cyan-400">
                    {mae?.toFixed(4)}
                  </h3>
                </div>

                <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                  <p className="text-gray-400">
                    R² Score
                  </p>

                  <h3 className="text-3xl font-bold mt-2 text-cyan-400">
                    {r2Score?.toFixed(4)}
                  </h3>
                </div>
              </div>
            </>
          )}

          {/* Closing Price */}
          {plot && (
            <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Historical Closing Price
              </h2>

              <img
                src={plot}
                alt="Closing Price"
                className="w-full rounded-xl"
              />
            </div>
          )}

          {/* Moving Averages */}
          {(days_100_plot || days_200_plot) && (
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {days_100_plot && (
                <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                  <h2 className="text-xl font-bold mb-4">
                    100-Day Moving Average
                  </h2>

                  <img
                    src={days_100_plot}
                    alt="100 Day Moving Average"
                    className="w-full rounded-xl"
                  />
                </div>
              )}

              {days_200_plot && (
                <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                  <h2 className="text-xl font-bold mb-4">
                    200-Day Moving Average
                  </h2>

                  <img
                    src={days_200_plot}
                    alt="200 Day Moving Average"
                    className="w-full rounded-xl"
                  />
                </div>
              )}
            </div>
          )}

          {/* AI Prediction */}
          {prediction && (
            <div className="bg-[#111827] border border-cyan-400/20 rounded-2xl p-6 mb-12">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                AI Prediction vs Actual Price
              </h2>

              <p className="text-gray-400 mb-6">
                Compare actual stock prices with
                predictions generated by the trained
                LSTM deep learning model.
              </p>

              <img
                src={prediction}
                alt="Stock Prediction"
                className="w-full rounded-xl"
              />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;