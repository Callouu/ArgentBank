import axios from 'axios'

export const loginRequest = async ({ email, password }) => {
  const response = await axios.post('http://localhost:3001/api/v1/user/login', {
    email,
    password,
  })
  return response.data.body.token
}

export const fetchProfileRequest = async (token) => {
  const response = await axios.post(
    'http://localhost:3001/api/v1/user/profile',
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return response.data.body
}