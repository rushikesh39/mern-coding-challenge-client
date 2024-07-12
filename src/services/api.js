import axios from 'axios';

const API_BASE_URL = 'https://mern-coding-challenge-backend.onrender.com/api';

export const initializeDatabase = () => axios.get(`${API_BASE_URL}/initialize`);
export const getTransactions = (params) => axios.get(`${API_BASE_URL}/transactions`, { params });
export const getStatistics = (params) => axios.get(`${API_BASE_URL}/statistics`, { params });
export const getBarChartData = (params) => axios.get(`${API_BASE_URL}/barchart`, { params });
export const getPieChartData = (params) => axios.get(`${API_BASE_URL}/piechart`, { params });
