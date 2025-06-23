import axios from "axios";
import { authService } from "./auth";
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,

    withCredentials: true,

    headers:{
        "Content-Type": "application/json",
    }
})
api.interceptors.response.use(
    (response) => {
      return response;
    },
 
    async (error) => {
   
      const originalRequest = error.config;
  
      if (
        error.response.status === 401 &&
        error.response.data.message === "Access token expired" &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
  
        try {
    
          await authService.refresh();
  
          return api.request(originalRequest);
        } catch {
      
          await authService.logout();
  
          window.location.href = "/login";
  
          return Promise.reject(error);
        }
      }
  
      return Promise.reject(error);
    }
  );
export default api;