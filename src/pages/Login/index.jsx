import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, fetchUserProfile } from '../../store/userslice'

export default function Login() {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loading, error, isAuthenticated } = useSelector((state) => state.user)

  useEffect(() => {
    console.log('isAuthenticated:', isAuthenticated)
    // If the user is already authenticated, redirect to the profile page
    if (isAuthenticated) {
      navigate('/profile')
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const resultAction = await dispatch(loginUser({ email, password }))
    if (loginUser.fulfilled.match(resultAction)) {
      dispatch(fetchUserProfile())
    }
  }

  if (isAuthenticated) {
    return null // Optionally, show a loading spinner or nothing while redirecting
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" disabled={loading}>
        Login
      </button>
      {error && <p>{error}</p>}
    </form>
  )
}