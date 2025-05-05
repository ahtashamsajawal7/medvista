// import React from 'react'
// import './Navbar.css'
// import { assets } from './../../assets/assets';

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//         <img className='logo' src={assets.logo} alt="" />
//         <img src={assets.profile_image} alt="" className="profile" />
//     </div>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import './Navbar.css';
import { assets } from './../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setIsLoggedIn }) => {
  const [isLogoutVisible, setIsLogoutVisible] = useState(false); // To control the logout button visibility
  const navigate = useNavigate();

  // Handle profile icon click
  const handleProfileClick = () => {
    setIsLogoutVisible(prevState => !prevState); // Toggle logout visibility
  };

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear token
    setIsLoggedIn(false); // Update logged-in state
    navigate('/'); // Redirect to login
  };

  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="Logo" />
      <div className="navbar-right">
        <img
          src={assets.profile_image}
          alt="Profile"
          className="profile"
          onClick={handleProfileClick} // Toggle logout button on profile click
        />
        
        {/* Conditionally render logout button */}
        {isLogoutVisible && (
          <div className="logout-dropdown">
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
