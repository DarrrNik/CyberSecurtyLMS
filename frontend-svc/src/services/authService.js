import axios from "axios"

const API_URL = "http://localhost:8080/api"

// Add request interceptor to add token to all requests
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Add response interceptor to handle token expiration
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token")
      window.location.href = "/auth"
    }
    return Promise.reject(error)
  }
)

export const authService = {
  async register(userData) {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        username: userData.username,
        email: userData.email,
        fullName: userData.fullName,
        password: userData.password,
        IsTeacher: userData.isTeacher,
      })
      return response.data
    } catch (error) {
      throw error.response?.data || { error: "Registration failed" }
    }
  },

  async login(credentials) {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username: credentials.username,
        password: credentials.password,
      })
      return response.data
    } catch (error) {
      throw error.response?.data || { error: "Login failed" }
    }
  },

  logout() {
    localStorage.removeItem("token")
  },

  isAuthenticated() {
    return !!localStorage.getItem("token")
  },

  getToken() {
    return localStorage.getItem("token")
  },
}
