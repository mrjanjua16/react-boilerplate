import axios from 'axios';

import { useAuthStore } from '../store/auth.store';

const apiInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

// Request interceptor
apiInstance.interceptors.request.use(
	(config) => {
		const token = useAuthStore.getState().accessToken;
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// Response interceptor
apiInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		if (error.response?.status === 401) {
			useAuthStore.getState().logout();
			window.location.href = '/login';
		}
		return Promise.reject(error);
	}
);

export default apiInstance;
