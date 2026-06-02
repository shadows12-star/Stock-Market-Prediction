from rest_framework.views import APIView
from django.conf import settings
from rest_framework.response import Response
from sklearn.metrics import mean_absolute_error, r2_score
from .serializers import StockPredictionSerializer
from rest_framework import status
import yfinance as yf
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime, timedelta
from sklearn.preprocessing import MinMaxScaler
import os
from .utils import save_plot
from sklearn.preprocessing import MinMaxScaler
from keras.models import load_model
from sklearn.metrics import mean_squared_error, mean_absolute_error



class StockPredictionApiview(APIView):
    def post(self, request):
        serializer=StockPredictionSerializer(data=request.data)
        if serializer.is_valid():
            ticker=serializer.validated_data['ticker']
            now=datetime.now()
            start=datetime(now.year-10,now.month,now.day)
            end=now
            df=yf.download(ticker,start,end)
            if df.empty:
                return Response({"error": "Invalid ticker symbol or no data available."}, status=status.HTTP_400_BAD_REQUEST)
            df=df.reset_index()
            #generate a basic plot
            plt.switch_backend('Agg')  # Use a non-interactive backend for plotting
            plt.figure(figsize=(10, 5))
            plt.plot(df.Close,label='Closing Price')
            plt.title(f"closing price for {ticker}")
            plt.xlabel("Date")
            plt.ylabel("Price")
            plt.legend()
           #SAVE THE PLOT TO MEDIA FOLDER
            img_url = save_plot(f'{ticker}_close.png')
            #100 days moving average
            df['MA_100']=df.Close.rolling(100).mean()
            plt.switch_backend('Agg')  # Use a non-interactive backend for plotting
            plt.figure(figsize=(10, 5))
            plt.plot(df.MA_100,label='100-Day Moving Average')
            plt.title(f"100-Day Moving Average for {ticker}")
            plt.xlabel("Date")
            plt.ylabel("Price")
            plt.legend()
            #SAVE THE PLOT TO MEDIA FOLDER
            days_100_img_url = save_plot(f'{ticker}_ma100.png')
             #200 days moving average
            df['MA_200']=df.Close.rolling(200).mean()
            plt.switch_backend('Agg')  # Use a non-interactive backend for plotting
            plt.figure(figsize=(10, 5))
            plt.plot(df.MA_200,label='200-Day Moving Average')
            plt.plot(df.MA_100,label='100-Day Moving Average')
            plt.title(f"200-Day Moving Average for {ticker}")
            plt.xlabel("Date")
            plt.ylabel("Price")
            plt.legend()
            #SAVE THE PLOT TO MEDIA FOLDER
            days_200_img_url = save_plot(f'{ticker}_ma200.png')
            #splitting the data
            close_data = df['Close']
            training_size = int(len(close_data) * 0.70)
            train_data = close_data[:training_size]
            test_data = close_data[training_size:]
            #minmaxscaler
            scaler = MinMaxScaler(feature_range=(0, 1))
            
            #load the model
            MODEL_PATH = os.path.join(
               settings.BASE_DIR,
               "ml_models",
                "stock_prediction.keras"
                  )
            model = load_model(MODEL_PATH)
            #prepare the test data
            past_100_days = train_data.tail(100)
            final_df = pd.concat([past_100_days, test_data], ignore_index=True)
            input_data = scaler.fit_transform(final_df.values.reshape(-1, 1))
            x_test = []
            y_test = []

            for i in range(100, len(input_data)):
             x_test.append(input_data[i-100:i])
             y_test.append(input_data[i,0])

            x_test = np.array(x_test)
            y_test = np.array(y_test)
            #make predictions
            y_predicted=model.predict(x_test)
            #reverting back to original scale
            y_predicted=scaler.inverse_transform(y_predicted.reshape(-1,1)).flatten()
            y_test=scaler.inverse_transform(y_test.reshape(-1,1)).flatten()
            #plot the final prediction
            plt.switch_backend('Agg')  # Use a non-interactive backend for plotting
            plt.figure(figsize=(12, 5))
            plt.plot(y_test,'b',label='original price')
            plt.plot(y_predicted,'r',label='predicted price')
            plt.title(f"Stock Price Prediction for {ticker}")
            plt.xlabel("Date")
            plt.ylabel("Price")
            plt.legend()
                #SAVE THE PLOT TO MEDIA FOLDER
            plot_prediction_img_url = save_plot(f'{ticker}_prediction.png')
            #model EVALUATION
            mse = mean_squared_error(y_test, y_predicted)
            mae = mean_absolute_error(y_test, y_predicted)
            r2=r2_score(y_test, y_predicted)
            

            return Response({
                "status": "success",
                "image_url": img_url,
                "100_days_moving_average_image_url": days_100_img_url,
                "200_days_moving_average_image_url": days_200_img_url,  
                "mse": mse,
                "mae": mae,
                "r2_score": r2,
                "prediction_image_url": plot_prediction_img_url
            }, status=status.HTTP_200_OK)
             