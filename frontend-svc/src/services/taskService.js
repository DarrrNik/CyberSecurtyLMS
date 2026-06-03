import axios from "axios"

const API_URL = "http://localhost:8080/api"

export const taskService = {
  courseId: null,

  setCourseId(id) {
    this.courseId = id
  },
  async getTasksByVulnerability(vulnerability) {
    try {
      const response = await axios.get(`${API_URL}/courses/${vulnerability}`)
      return response.data
    } catch (error) {
      throw error.response?.data || { error: "Failed to fetch tasks" }
    }
  },

  async getAllTasks() {
    try {
      const response = await axios.get(`${API_URL}/tasks`)
      return response.data
    } catch (error) {
      throw error.response?.data || { error: "Failed to fetch all tasks" }
    }
  },
}
