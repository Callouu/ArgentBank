import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router'
import Logo from "../../assets/argentBankLogo.png";
import { logout } from '../../store/userSlice'

/**
 * Header component
 *
 * Renders the main navigation bar with the Argent Bank logo.
 * Displays user information and navigation links based on authentication status.
 * Shows "Sign In" when not authenticated, and "Profile" and "Sign Out" when logged in.
 *
 * @category Components
 * @component
 * @returns {JSX.Element} The rendered header navigation bar
 */
function Header() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const isLoggedIn = user && user.isAuthenticated

  const handleSignOut = () => {
    dispatch(logout())
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img src={Logo} className="main-nav-logo-image" alt="Argent Bank Logo" />
      </Link>
      <div>
        {isLoggedIn ? (
          <>
          <Link className="main-nav-item" to="/profile">
						<i className="fa fa-user-circle"></i>
						{user.profile?.firstName}
					</Link>
            <Link onClick={handleSignOut} className="main-nav-item" to="/">
						<i className="fa fa-sign-out"></i>
						Sign Out
					</Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Header