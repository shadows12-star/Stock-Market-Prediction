import React from 'react'
import { useState, useEffect } from 'react';
import axiosInstance from './axiosinstance';
import Navbar from "./Navbar";
import Footer from "./Footer";
const Dashboard = () => {
  const[ticker, setTicker] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [days_100_plot, setDays100Plot] = useState(null);
  const [days_200_plot, setDays200Plot] = useState(null);
  const [plot,setPlot] = useState(null);
  const [mse, setMse] = useState(null);
  const [mae, setMae] = useState(null);
  const [r2Score, setR2Score] = useState(null);
  const handlesubmit = async (e) => {
    setLoading(true);
    setError(null);
    e.preventDefault();

    try{
        const response = await axiosInstance.post('/predict/', {ticker});
        const data = await response.data;
        console.log("Stock prediction:", data); 
       const backendRoot = import.meta.env.VITE_BACKEND_ROOT || 'http://127.0.0.1:8000';
        const imageUrl = backendRoot + data.image_url;
        const days100PlotUrl = backendRoot + data["100_days_moving_average_image_url"];
        const days200PlotUrl = backendRoot + data["200_days_moving_average_image_url"];
        const plotPredictionUrl = backendRoot + data["prediction_image_url"];
        const r2 = data.r2_score;
        const mae = data.mae;
        const mse = data.mse;
        console.log("Image URL:", imageUrl);
        console.log("100 Days Moving Average Image URL:", days100PlotUrl);
        console.log("200 Days Moving Average Image URL:", days200PlotUrl);
        console.log("Prediction Image URL:", plotPredictionUrl);
        setPlot(imageUrl);
        setDays100Plot(days100PlotUrl);
        setDays200Plot(days200PlotUrl);
        setPrediction(plotPredictionUrl);
        setMse(data.mse);
        setMae(data.mae);
        setR2Score(data.r2_score);
        setTicker("");
        setLoading(false);

    }
    catch(error){
        console.error("Error fetching stock prediction:", error);
        setError("Error fetching stock prediction. Please try again.");
    
        setTicker("");
    }
    finally{
        setLoading(false);
    }
  }

 
 useEffect(() => {
    const fetchProtectedData = async () => {
    try{
        const response = await axiosInstance.get('/protected-view/');
        const data = await response.data;
        console.log("Protected data:", data);
    }
    catch(error){
        console.error("Error fetching protected data:", error);
    }

}

fetchProtectedData();
 

    }, [])

  
  return (
    <>
    <Navbar />
     <div className="text-white p-8">
      <form onSubmit={handlesubmit}>
        <input
        required
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
          type="text"
          placeholder="Search stocks..."
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
       
        <button type="submit" className="mt-4 bg-cyan-400 hover:bg-cyan-300 text-[#0a0f1a] font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 tracking-wide">
         {loading ? "Predicting..." : "Predict Stock"}
        </button>
      </form>
      <div className="mt-8 bg-gray-800 p-4 rounded">
        {plot && <img src={plot} alt="Stock Plot" className="w-full h-auto rounded" />}
      </div>
      <div className="mt-8 bg-gray-800 p-4 rounded">
        {days_100_plot && <img src={days_100_plot} alt="100-Day Moving Average Plot" className="w-full h-auto rounded" />}
      </div>
      <div className="mt-8 bg-gray-800 p-4 rounded">
        {days_200_plot && <img src={days_200_plot} alt="200-Day Moving Average Plot" className="w-full h-auto rounded" />}
      </div>
      <div className="mt-8 bg-gray-800 p-4 rounded">
        {prediction && <img src={prediction} alt="Stock Price Prediction Plot" className="w-full h-auto rounded" />}
      </div>
     {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Stock Prices</h2>
          <p>View real-time stock prices and trends.</p>
        </div>
      </div>
    </div>
    <div className="text-white p-8">
      <h2 className="text-2xl font-bold mb-4">Model Evaluation Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-xl font-bold mb-2">Mean Squared Error (MSE)</h3>
          <p>{mse !== null ? mse.toFixed(4) : "N/A"}</p>
        </div>  
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-xl font-bold mb-2">Mean Absolute Error (MAE)</h3>
          <p>{mae !== null ? mae.toFixed(4) : "N/A"}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-xl font-bold mb-2">R² Score</h3>
          <p>{r2Score !== null ? r2Score.toFixed(4) : "N/A"}</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
   
  )
}

export default Dashboard