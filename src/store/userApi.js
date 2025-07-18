import axios from 'axios'
import transactions from '../data/transactions.json'

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

export const updateProfileRequest = async (token, { firstName, lastName }) => {
  const response = await axios.put(
    'http://localhost:3001/api/v1/user/profile',
    { firstName, lastName },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return response.data.body
}

export const fetchTransactionsRequest = async (userId) => {
  // Simule une requête API en filtrant les transactions du fichier JSON
  return transactions.filter((tx) => tx.userId === userId)
}