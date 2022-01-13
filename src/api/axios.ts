import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || new Error(error))
);

export default axiosInstance;