import React from 'react';

import './NavMenu.css';
const NavMenu = ({ isLoggedIn }) => {
  return (
    <div className="horizontal-nav-menu">
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <a href="/" className="text-xl font-bold">
            Sam-React-Demo-App
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-gray-400">
                Privacy
              </a>
            </li>
            {!isLoggedIn && (
              <li>
                <a href="/login" className="hover:text-gray-400">
                  Login
                </a>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <a href="/signup" className="hover:text-gray-400">
                  SignUp
                </a>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <a href="/logout" className="hover:text-gray-400">
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
