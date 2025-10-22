import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'http://192.168.1.108:4000/api/v1';
const api = axios.create({ baseURL, timeout: 10000 });

api.interceptors.response.use(
  (r) => r,
  (err) => {
    const msg = err?.response?.data?.message || err.message || "Error de red";
    return Promise.reject(Object.assign(new Error(msg), { status: err?.response?.status }));
  }
);

export default api;



