import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Home from "./views/Home/Home";
import Signup from "./views/Signup/Signup";
import Profile from "./views/Profile/Profile";
import EditProfile from "./views/EditProfile/EditProfile";
import Create from "./views/Create/Create";
import Search from "./views/Search/Search";
import Donate from "./views/Donate/Donate";
import Favorite from "./views/Favorite/Favorite";
import NotFound from "./views/NotFound";
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => { //Git test
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/"><Redirect to="/Home" /></Route>
        <Route exact path="/Home" component={Home} />
        <ProtectedRoute exact path="/Signup" component={Signup} />
        <ProtectedRoute exact path="/Profile" component={Profile} />
        <ProtectedRoute exact path="/EditProfile" component={EditProfile} />
        <ProtectedRoute exact path="/Create" component={Create} />
        <ProtectedRoute exact path="/Search" component={Search} />
        <ProtectedRoute exact path="/Donate" component={Donate} />
        <ProtectedRoute exact path="/Favorite" component={Favorite} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
