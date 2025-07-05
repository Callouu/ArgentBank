import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router'
import Logo from "../../assets/argentBankLogo.png";
// import your logo image
// import { logout } from '../../store/userSlice' // Uncomment if you have a logout action

function Header() {
  // const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const isLoggedIn = user && user.isAuthenticated

  const handleSignOut = () => {
    // dispatch(logout()) // Uncomment if you have a logout action
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        {/* Replace with your logo image */}
        <img src={Logo} alt="Argent Bank Logo" />
      </Link>
      <div>
        {isLoggedIn ? (
          <>
            <span className="main-nav-item">
              <i className="fa fa-user-circle"></i> {user.firstName}
            </span>
            <button className="main-nav-item" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i> Sign Out
            </button>
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