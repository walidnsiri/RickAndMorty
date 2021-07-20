import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "./utils/UserContext";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

const Login = React.lazy(() => import("./Components/Login"));
const Home = React.lazy(() => import("./Components/Home"));


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);


function App() {
  return (
    <>
    <React.Suspense fallback={loading}>
    <Home/>
    <BrowserRouter>
    <Route path='/Home' name="Home" component={Home} />
    </BrowserRouter>
    </React.Suspense>
    </>
  );
}

export default App;

const SecretRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  return (<Route {...rest} render={(props) => (
    isAuthenticated
      ? <Component {...props} />
      : <Redirect to="/Login"/>
  )} />)
      };



