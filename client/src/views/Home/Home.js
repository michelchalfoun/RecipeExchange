import React from 'react';
import logo from '../../assets/social-media-icons/042-world grid.svg';
import './Home.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p></p>
                <p>
                    Welcome to Recipe Exchange. The world's simplest recipe sharing website.
                </p>
            </header>
            <div>
            </div>
        </div>
    );
}

export default Home;
