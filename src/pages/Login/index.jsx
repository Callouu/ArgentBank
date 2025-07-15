import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  fetchUserProfile
} from "../../store/userSlice";

/**
 * Login component
 *
 * Handles user authentication.
 * - Allows users to enter their email and password.
 * - Supports "Remember me" functionality to persist login.
 * - Redirects to the profile page upon successful authentication.
 * - Displays error messages on failed login attempts.
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */
export default function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { loading, error, isAuthenticated, profile } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    // Vérifie si un token est stocké en localStorage
    const remembered = localStorage.getItem("rememberMe");
    if (remembered === "true" && localStorage.getItem("token")) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch]);

  useEffect(() => {
    // console.log("isAuthenticated:", isAuthenticated);
    if (isAuthenticated && profile?.id) {
      navigate("/profile");
    }
  }, [isAuthenticated, profile, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser({ email, password, rememberMe }));
    if (loginUser.fulfilled.match(resultAction)) {
      dispatch(fetchUserProfile());
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }
    }
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="input-remember">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe((user) => !user)}
              />
              Remember me
            </label>
          </div>
          <button type="submit" className="sign-in-button" disabled={loading}>
            Sign In
          </button>
          {error && <p>{error}</p>}
        </form>
      </section>
    </main>
  );
}
