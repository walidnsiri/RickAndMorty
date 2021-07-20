import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "./utils/UserContext";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import CharacterComponent from "./Components/CharacterComponent";
import EpisodeComponent from "./Components/EpisodeComponent";
import CharacterDetailsComponent from "./Components/CharacterDetailsComponent";
import EpisodeDetails from "./Components/EpisodeDetails";
const Login = React.lazy(() => import("./Components/Login"));
const Logout = React.lazy(() => import("./Components/Logout"));
const Profile = React.lazy(() => import("./Components/Profile"));


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);


function App() {
  return (
    <BrowserRouter>
    <React.Suspense fallback={loading}>
      <Switch>
            <SecretRoute path='/Profile' component={Profile} />
              <Route
                path="/Login"
                name="Login"
                render={(props) => <Login {...props} />}
              />
              <Route
                path="/Logout"
                name="Logout"
                render={(props) => <Logout {...props} />}
              />
              <Route render={() => (<div> Sorry, this page does not exist. </div>)} />
      </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;

const SecretRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth0();
  return (<Route {...rest} render={(props) => (
    user!= false
      ? <Component {...props} />
      : <Redirect to={{
          pathname: 'Login',
          state: { from: props.location }
        }} />
  )} />)
      };




/* <Route exact path="/Logout" component={Logout}/>
      
      <Route exact path="/Episodes" component={EpisodeComponent} />
      <Route exact path="/" component={CharacterComponent} />
      <Route exact path="/CharacterDetails/:id" component={CharacterDetailsComponent} />
      <Route exact path="/EpisodeDetails/:id" component={EpisodeDetails} />*/
