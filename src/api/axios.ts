
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance:AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers:{
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
    function (response: AxiosResponse) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
});