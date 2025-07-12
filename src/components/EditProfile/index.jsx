import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserProfile } from '../../store/userslice'

export default function EditProfile({ onCancel }) {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.user.profile)
  const [firstName, setFirstName] = useState(profile?.firstName || '')
  const [lastName, setLastName] = useState(profile?.lastName || '')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  

  const handleSave = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await dispatch(updateUserProfile({ firstName, lastName })).unwrap()
      if (onCancel) onCancel() // Ferme le formulaire après sauvegarde
    } catch (err) {
      setError(err.message || 'Erreur lors de la mise à jour')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSave}>
      <div>
        <label>First Name:</label>
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          disabled={loading}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          disabled={loading}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={loading}>Save</button>
      <button type="button" onClick={onCancel} disabled={loading}>Cancel</button>
    </form>
  )
}