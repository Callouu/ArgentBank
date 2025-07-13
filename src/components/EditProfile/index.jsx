import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../store/userslice";

export default function EditProfile({ onCancel }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [firstName, setFirstName] = useState(profile?.firstName || "");
  const [lastName, setLastName] = useState(profile?.lastName || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await dispatch(updateUserProfile({ firstName, lastName })).unwrap();
      if (onCancel) onCancel(); // Ferme le formulaire après sauvegarde
    } catch (err) {
      setError(err.message || "Erreur lors de la mise à jour");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="new-name-form" onSubmit={handleSave}>
        <div className="input-group">
          <div className="input-wrapper">
            <label className="hidden">First Name:</label>
            <input
              className="input-wrapper-value"
              value={firstName}
              id="firstname"
              onChange={(e) => setFirstName(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="input-wrapper">
            <label className="hidden">Last Name:</label>
            <input
              className="input-wrapper-value"
              value={lastName}
              id="lastname"
              onChange={(e) => setLastName(e.target.value)}
              disabled={loading}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div className="input-group input-center">
          <button type="submit" className="edit-button" disabled={loading}>
            Save
          </button>
          <button
            type="button"
            className="edit-button"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
