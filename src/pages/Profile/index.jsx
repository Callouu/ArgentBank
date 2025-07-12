import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditProfile from "../../components/EditProfile";

function Profile() {
  const navigate = useNavigate();
  const { isAuthenticated, profile } = useSelector((state) => state.user);
    const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Optionally, show a loading spinner or nothing while redirecting
  }

  return (
    // <div>
    //   <EditProfile />
    //   <h1>Profile</h1>
    //   <p>
    //     <strong>First Name:{profile?.firstName}</strong>
    //   </p>
    //   <p>
    //     <strong>Last Name:</strong> {profile?.lastName}
    //   </p>
    //   <p>
    //     <strong>Email:</strong> {profile?.email}
    //   </p>
    //   <p>
    //     <strong>Total du compte :</strong> {profile?.accountTotal ?? 'Non disponible'} €
    //   </p>
    // </div>
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome {profile?.firstName}</h1>
        <button onClick={() => setShowEdit((v) => !v)}>
          {showEdit ? "Fermer le formulaire" : "Modifier mon profil"}
        </button>
        {showEdit && <EditProfile onCancel={() => setShowEdit(false)} />}
        {/* <EditProfile /> */}
      </div>
      <h2 className="title">Accounts</h2>
    </main>
  );
}

export default Profile;
