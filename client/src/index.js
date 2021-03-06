import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as config from "./utils/authConfig.json";
import { Auth0Provider } from "@auth0/auth0-react";
import createHistory from './utils/history';

const history = createHistory;

ReactDOM.render(
    <Router history={history}>
        <Auth0Provider
            domain={config.domain}
            clientId={config.clientId}
            //Go to utils/authConfig.js and change the redirectURI to change the page that the user is brought to when first logged in.
            redirectUri={window.location.origin + "/Signup"} //window.location.origin
        >
            <App />
        </Auth0Provider>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
