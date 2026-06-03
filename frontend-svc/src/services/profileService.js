import axios from "axios"

const API_URL = "http://localhost:8080/api"

export const profileService = {
  async getProfile() {
    try {
      // Simulate API delay
      // await new Promise((resolve) => setTimeout(resolve, 500))

      // // Get username from localStorage (set during login)
      // const username = localStorage.getItem("username") || MOCK_PROFILE.username

      // // Return mock profile with actual username
      // return {
      //   success: true,
      //   profile: {
      //     ...MOCK_PROFILE,
      //     username,
      //   },
      // }

      // Real API call (commented out)

      const response = await axios.get(`${API_URL}/profile`)
      return response.data
    } catch (error) {
      throw error.response?.data || { error: "Failed to fetch profile" }
    }
  },

  async updateProfile(profileData) {
    try {
      // Simulate API delay
      // await new Promise((resolve) => setTimeout(resolve, 500))

      // // Update mock data
      // MOCK_PROFILE = {
      //   ...MOCK_PROFILE,
      //   ...profileData,
      // }

      // // Return success response
      // return {
      //   success: true,
      //   profile: MOCK_PROFILE,
      // }

      // Real API call (commented out)

      const response = await axios.put(`${API_URL}/profile`, profileData)
      return response.data
    } catch (error) {
      throw error.response?.data || { error: "Failed to update profile" }
    }
  },
}
