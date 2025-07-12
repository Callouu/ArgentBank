import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router'
import Logo from "../../assets/argentBankLogo.png";
import { logout } from '../../store/userslice'

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
        <img src={Logo} alt="Argent Bank Logo" />
      </Link>
      <div>
        {isLoggedIn ? (
          <>
          <Link className="main-nav-item" to="/profile">
						<i className="fa fa-user-circle"></i>
						{user.profile?.firstName}
					</Link>
            {/* <span className="main-nav-item">
              <i className="fa fa-user-circle"></i> {user.profile?.firstName}
            </span> */}
            {/* <button className="main-nav-item" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i> Sign Out
            </button> */}
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