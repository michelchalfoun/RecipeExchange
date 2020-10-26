import React from 'react';
import { Link } from 'react-router-dom';
import AuthenticationButton from '../Auth/AuthenticationButton';
import './Header.css';

const Header = () => {
    return (
        <div className='topnav'>
            {/* Logo */}
            <Link id="logo-link" to="/">
                <img className="topnav-logo" src={ "/logo192.png" } alt="React logo" />
            </Link>

            {/* Page Links */}
            <div className="topnav-right">
                <Link className="topnav-link" to='/Home'>Home</Link>
                <AuthenticationButton></AuthenticationButton>
            </div>
        </div>
    )
}

export default Header;
