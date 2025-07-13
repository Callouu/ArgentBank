import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserTransactions } from "../../store/userslice";
import EditProfile from "../../components/EditProfile";
import Card from "../../components/Card";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, profile, transactions } = useSelector(
    (state) => state.user
  );
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
    if (isAuthenticated && profile?.id) {
      dispatch(fetchUserTransactions(profile.id));
    }
  }, [isAuthenticated, profile, dispatch, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const userAccounts = transactions
    ? transactions
        .filter((account) => account.userId === profile?.id)
        .flatMap((userAccount) => userAccount.account || [])
    : [];

  // console.log("transactions:", transactions);
  // console.log("userAccounts:", userAccounts);
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br /> {profile?.firstName} {profile?.lastName}!
        </h1>
        {!showEdit && (
          <button
            className="edit-button"
            onClick={() => setShowEdit((v) => !v)}
          >
            Edit Name
          </button>
        )}
        {showEdit && <EditProfile onCancel={() => setShowEdit(false)} />}
      </div>
      <div className="account-list">
        {userAccounts.map((account, index) => (
          <Card
            key={account.title || index}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </div>
    </main>
  );
}

export default Profile;
