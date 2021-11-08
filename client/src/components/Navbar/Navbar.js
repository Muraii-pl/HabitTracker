import React from 'react';
import {Link} from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navigation">
            <Link to='/'>Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </div>
    )
};

export default Navbar