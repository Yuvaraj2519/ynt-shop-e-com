import axios from 'axios';

function AxiosInstance() {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    validateStatus: (status) => {
      return status >= 200 && status < 500; // default
    }
  });

  instance.interceptors.request.use(
    (config) => {
      const token = sessionStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
}

export default AxiosInstance;