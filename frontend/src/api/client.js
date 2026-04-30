import axios from 'axios';
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://nibras-backend-wheat.vercel.app';

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
