import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import LoginButton from '../../components/Auth/LoginButton'
import SignupButton from '../../components/Auth/SignupButton'
import AuthenticationButton from '../../components/Auth/AuthenticationButton';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <AuthenticationButton></AuthenticationButton>
            </header>
        </div>
    );
}

export default Home;
