import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_BASE_API || 'http://127.0.0.1:8000/api';
const axiosInstance = axios.create({
       baseURL: baseURL,
         headers: {
        'Content-Type': 'application/json',

         }
     
      


} 
);

//request interceptor to add access token to headers
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }

);
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refreshToken = localStorage.getItem("refresh_token");
                const response = await axios.post(`${baseURL}/token/refresh/`, {
                    refresh: refreshToken,
                });
                const { access } = response.data;
                localStorage.setItem("access_token", access);
                axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${access}`;
                originalRequest.headers["Authorization"] = `Bearer ${access}`;
                return axiosInstance(originalRequest);
            } catch (err) {
              
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                return Promise.reject(err);
            }


          }
        return Promise.reject(error);
    }
);
export default axiosInstance;