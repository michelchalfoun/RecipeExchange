import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Home from "./views/Home/Home"
import Login from "./views/Login/Login"
import Profile from "./views/Profile/Profile"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"


const App = () => { //Git test
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <ProtectedRoute exact path="/Login" component={Login} />
        <ProtectedRoute exact path="/Profile" component={Profile} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
