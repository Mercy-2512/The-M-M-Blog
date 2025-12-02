// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul className="flex space-x-4">
                <li className="text-sm">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-sm">
                    <Link to="/content">Content</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
