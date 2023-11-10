import React from 'react';
import { NavLink } from 'react-router-dom';
import cbit from '../assets/cbit.png';

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">

                    {/* Logo and Heading */}
                    <div className="flex items-center space-x-2">
                        <img src={cbit} alt="Logo" className="h-8 w-8" />
                        <NavLink to="/" className="text-white font-bold hover:text-gray-400">
                            Online Voting System
                        </NavLink>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-2"> {/* Adjusted spacing here */}
                        <NavLink to="/about-us" className="text-white hover:text-gray-400 w-32 text-center" activeClassName="text-yellow-500">About Us</NavLink>
                        <NavLink to="/guidelines" className="text-white hover:text-gray-400 w-32 text-center" activeClassName="text-yellow-500">Guidelines</NavLink>
                        <NavLink to="/vote" className="text-white hover:text-gray-400 w-32 text-center" activeClassName="text-yellow-500">Vote Now</NavLink>
                        <NavLink to="/register" className="text-white hover:text-gray-400 w-32 text-center" activeClassName="text-yellow-500">Register</NavLink>
                        <NavLink to='/admin_login' className="text-white hover:text-gray-400 w-32 text-center" activeClassName="text-yellow-500">Admin</NavLink>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
