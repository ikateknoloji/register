import axios from "axios"
const API_URL = '/api/users'

export const registerController = async (userData) => {
  const response = await axios.post("http://localhost:5000/api/users", userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

