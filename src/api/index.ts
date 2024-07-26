import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});
export const useGet = <T>(url: string) => {
  return api.get<T>(url);
};
export const usePost = <T>(url: string, data: any) => {
  return api.post<T>(url, data);
};

export const usePut = <T>(url: string) => {
  return api.put<T>(url);
};

// Add a request interceptor to attach the access token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers["x-access-token"] = token;
  }
  return config;
});

// Add a response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refresh_token");
      const response: any = await usePost("/api/auth/refreshtoken", {
        refreshToken,
      });
      if (response.status === 200) {
        localStorage.setItem("access_token", response.data.accessToken);
        localStorage.setItem("refresh_token", response.data.refreshToken);
        originalRequest.headers["x-access-token"] = response.data.accessToken;
        return api(originalRequest);
      }
    }
    if (error.response.status === 403 && !originalRequest._retry) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export default api;
