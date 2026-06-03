import axios from "axios"

const API_URL = "http://localhost:8080/api"

export const courseService = {
  async getCourses() {
    try {
      // Simulate API delay
      // await new Promise((resolve) => setTimeout(resolve, 500))

      // // Return mock courses
      // return {
      //   success: true,
      //   courses: MOCK_COURSES,
      // }

      // Real API call (commented out)

      const response = await axios.get(`${API_URL}/courses`)
      return response.data
    } catch (error) {
      throw error.response?.data || { error: "Failed to fetch courses" }
    }
  },

  async getAllCourses() {
    try {
      // Simulate API delay
      // await new Promise((resolve) => setTimeout(resolve, 500))

      // // Return mock all courses
      // return {
      //   success: true,
      //   courses: MOCK_ALL_COURSES,
      // }

      // Real API call (commented out)
      const response = await axios.get(`${API_URL}/courses`)
      return response.data
    } catch (error) {
      throw error.response?.data || { error: "Failed to fetch all courses" }
    }
  },
}
