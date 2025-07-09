import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import EditProfile from '../../components/EditProfile'

function Profile() {
  const navigate = useNavigate()
  const { isAuthenticated, firstName, lastName, email, profile } = useSelector((state) => state.user)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return null // Optionally, show a loading spinner or nothing while redirecting
  }

  return (
    <div>
      <EditProfile />
      <h1>Profile</h1>
      <p>
        <strong>First Name:{profile?.firstName}</strong> 
      </p>
      <p>
        <strong>Last Name:</strong> {profile?.lastName}
      </p>
      <p>
        <strong>Email:</strong> {profile?.email}
      </p>
      <p>
        <strong>Total du compte :</strong> {profile?.accountTotal ?? 'Non disponible'} €
      </p>
    </div>
  )
}

export default Profile