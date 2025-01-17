import axios from 'axios';
import { toast } from 'react-toastify';
import { createBrowserHistory } from 'history';
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const { backendUrl } = useContext(AppContext)

// Create Axios instance
const api = axios.create({
  baseURL: backendUrl,
  withCredentials: true, // Include cookies
});

// Custom browser history for redirection
export const history = createBrowserHistory();

// Request interceptor to include Authorization header (if needed)
api.interceptors.request.use(
  (config) => {
    // Tokens are automatically handled by cookies; nothing to add here.
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling and token refreshing
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If token has expired and the request hasn't been retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Attempt to refresh the token
        await api.post(backendUrl + 'api/auth/refresh-token'); // Backend handles refreshing via cookies

        // Retry the original request
        return api(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);

        // Clear session cookies and redirect to login
        toast.error('Session expired. Please log in again.');
        history.push('/login'); // Redirect to login
      }
    }

    return Promise.reject(error);
  }
);

export default api;
