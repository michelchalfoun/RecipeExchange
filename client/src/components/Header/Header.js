import React, { useEffect, useState } from 'react';
import AuthenticationButton from '../Auth/AuthenticationButton';
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import mainLogo from'../../assets/Logo-whisk-right.png';

const Header = () => {

    const { user, isAuthenticated } = useAuth0();


    return (
        <div className='topnav'>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="/Home">
                    <img  src={mainLogo} height={70} width={70} alt="fireSpot"/>
                </Navbar.Brand>
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
                        {isAuthenticated &&
                            <Nav.Link className="mr-auto" href={"/Profile/" + user.email}>My Profile</Nav.Link>
                        }
                        <AuthenticationButton></AuthenticationButton>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
