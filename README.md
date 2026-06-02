# 📈 Stock Market Prediction

A full-stack web application that predicts stock prices using a Deep Learning LSTM model. Users can search for any stock ticker symbol and receive historical analysis, moving averages, AI-generated predictions, and model evaluation metrics through a modern React dashboard powered by a Django REST Framework backend.

---

## 🚀 Features

### 📊 Stock Analysis
- Search stocks using ticker symbols (e.g., `AAPL`, `TSLA`, `GOOG`)
- Fetch up to 10 years of historical stock data
- Interactive historical closing price visualization

### 📈 Technical Indicators
- 100-Day Moving Average (MA100)
- 200-Day Moving Average (MA200)
- Trend analysis using moving averages

### 🤖 AI-Powered Prediction
- LSTM (Long Short-Term Memory) neural network
- Predicts stock prices using historical market patterns
- Actual vs Predicted price comparison chart

### 📐 Model Evaluation
- Mean Squared Error (MSE)
- Mean Absolute Error (MAE)
- R² Score

### 🔐 Authentication
- User Registration & Login
- JWT Authentication
- Protected Routes

---

## 🛠️ Tech Stack

**Backend**
- Python, Django, Django REST Framework
- TensorFlow / Keras, Scikit-Learn
- Pandas, NumPy, Matplotlib, yFinance

**Frontend**
- React.js, React Router, Axios, Vite, Tailwind CSS

**Machine Learning**
- LSTM Neural Network
- Time Series Forecasting
- MinMaxScaler Data Normalization

---

## 📁 Project Structure

```
Stock-Market-Prediction/
│
├── backend-drf_stock_prediction/
│   ├── accounts/
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── urls.py
│   │   └── views.py
│   │
│   ├── api/
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── serializers.py
│   │   ├── urls.py
│   │   ├── utils.py
│   │   └── views.py
│   │
│   ├── media/
│   ├── ml_models/
│   │   └── stock_prediction.keras
│   │
│   ├── stock_prediction/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   │
│   ├── db.sqlite3
│   └── manage.py
│
└── frontend-react_stock_prediction/
    ├── public/
    └── src/
        ├── assets/
        ├── components/
        │   ├── About.jsx
        │   ├── AuthProvider.jsx
        │   ├── axiosinstance.js
        │   ├── Dashboard.jsx
        │   ├── Footer.jsx
        │   ├── Login.jsx
        │   ├── MainSection.jsx
        │   ├── Navbar.jsx
        │   ├── PrivateRoute.jsx
        │   ├── PublicRoute.jsx
        │   └── Register.jsx
        ├── App.jsx
        ├── index.css
        └── main.jsx
```

---

## 🧠 How the Model Works

**1. Data Collection**
Historical stock data is downloaded from Yahoo Finance using the `yfinance` library.

**2. Data Preprocessing**
- Extract closing prices
- Normalize data using `MinMaxScaler`
- Create 100-day sequential windows

**3. Train/Test Split**
- 70% Training Data
- 30% Testing Data

**4. LSTM Model Architecture**
```python
model = Sequential()
model.add(Input(shape=(100, 1)))
model.add(LSTM(units=128, activation='tanh', return_sequences=True))
model.add(LSTM(units=64,  activation='tanh'))
model.add(Dense(25))
model.add(Dense(1))
```

**5. Prediction Pipeline**
1. Fetch stock data
2. Scale closing prices
3. Generate 100-day sequences
4. Load trained LSTM model
5. Generate predictions
6. Inverse-transform back to original scale
7. Evaluate performance & generate visualizations

---

## 📸 Screenshots
### HomePage
<img width="1720" height="1207" alt="image" src="https://github.com/user-attachments/assets/f5c9532e-3e95-4066-b4dc-f54220789115" />
<img width="2536" height="1110" alt="image" src="https://github.com/user-attachments/assets/f3b5c542-cab5-46b9-956a-49e39c79087a" />

### Login
<img width="1586" height="1063" alt="image" src="https://github.com/user-attachments/assets/f93628dc-5966-4c43-8f24-c929c1bef712" />

### Register
<img width="1381" height="1080" alt="image" src="https://github.com/user-attachments/assets/b799f94b-6b8e-4a13-af33-ff4722ffd296" />


### Dashboard
<img width="1522" height="1262" alt="image" src="https://github.com/user-attachments/assets/819def6e-b4a8-4110-8f62-8ccfd1a14c96" />
<img width="1588" height="1273" alt="image" src="https://github.com/user-attachments/assets/074f3c99-4aeb-46ab-83cc-2a981582aacd" />



### Footer
<img width="2526" height="340" alt="image" src="https://github.com/user-attachments/assets/2e30a807-20f8-48e6-8183-1b7a54243ec0" />


### About
<img width="1611" height="1299" alt="image" src="https://github.com/user-attachments/assets/8a8c8719-06b3-404f-9abb-ff674ce1cd93" />






---

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/shadows12-star/Stock-Market-Prediction.git
cd Stock-Market-Prediction
```

### 2. Backend Setup
```bash
cd backend-drf_stock_prediction

# Create and activate virtual environment
python -m venv env
source env/bin/activate        # Windows: env\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Apply migrations and run
python manage.py migrate
python manage.py runserver
```
Backend running at: `http://127.0.0.1:8000`

### 3. Frontend Setup
```bash
cd frontend-react_stock_prediction
npm install
npm run dev
```
Frontend running at: `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/predict/` | Predict stock price by ticker |
| `POST` | `/api/register/` | Register a new user |


### Predict Stock

**Request:**
```json
{
  "ticker": "AAPL"
}
```

**Response:**
```json
{
  "status": "success",
  "image_url": "/media/AAPL_close.png",
  "100_days_moving_average_image_url": "/media/AAPL_ma100.png",
  "200_days_moving_average_image_url": "/media/AAPL_ma200.png",
  "prediction_image_url": "/media/AAPL_prediction.png",
  "mse": 142.56,
  "mae": 9.34,
  "r2_score": 0.97
}
```

---

## 🎯 Future Improvements

- [ ] Real-time stock data streaming
- [ ] News sentiment analysis
- [ ] Portfolio management
- [ ] Multi-stock comparison
- [ ] Transformer-based forecasting models
- [ ] Cloud deployment (AWS / Azure)
- [ ] Email and price alerts

---

## ⚠️ Disclaimer

This project is intended for **educational and research purposes only**. The stock market predictions generated by this application should not be considered financial advice. Always conduct your own research before making investment decisions.

---
