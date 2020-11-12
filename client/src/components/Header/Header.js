import React from 'react';
import AuthenticationButton from '../Auth/AuthenticationButton';
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    return (
        <div className='topnav'>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="/Home">Recipe Exchange</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Dashboard">Home</Nav.Link>
                        <Nav.Link href="/Favorite">Favorites</Nav.Link>
                        <Nav.Link href="/Donate">Donate</Nav.Link>
                        <Nav.Link href="/CreateRecipe">Create</Nav.Link>
                        <Nav.Link href="/Search">Search</Nav.Link>
                    </Nav>
                    <Nav inline>
                        <Nav.Link className="mr-auto" href="/Profile">My Profile</Nav.Link>
                        <AuthenticationButton></AuthenticationButton>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
