import logo from "./logo.svg";
import "./App.css";
import CharacterComponent from "./Components/CharacterComponent";
import EpisodeComponent from "./Components/EpisodeComponent";
import CharacterDetailsComponent from "./Components/CharacterDetailsComponent";
import EpisodeDetails from "./Components/EpisodeDetails";
const Login = React.lazy(() => import("./Components/Login"));
const Logout = React.lazy(() => import("./Components/Logout"));
const Profile = React.lazy(() => import("./Components/Profile"));

import React, { useState, useEffect } from "react";
import { Router, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "./utils/UserContext";

import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
function App() {
  const [userState, setUser] = useState(null);
  const { user } = useAuth0();

  const isLoggedin = () => {
    if (user) setUser(user);
  };

  useEffect(() => {
    isLoggedin();
  }, [user]);

  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={[userState, setUser]}>
          {userState && (
            <Route
              exact
              path="/Profile"
              name="Profile"
              render={(props) => <Profile {...props} />}
            />
          )}
          {!userState && (
            <>
              <Route
                exact
                path="/Login"
                name="Login"
                render={(props) => <Login {...props} />}
              />
              <Redirect to="/Login" />
            </>
          )}
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

/* <Route exact path="/Logout" component={Logout}/>
      
      <Route exact path="/Episodes" component={EpisodeComponent} />
      <Route exact path="/" component={CharacterComponent} />
      <Route exact path="/CharacterDetails/:id" component={CharacterDetailsComponent} />
      <Route exact path="/EpisodeDetails/:id" component={EpisodeDetails} />*/
