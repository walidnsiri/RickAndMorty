import logo from './logo.svg';
import './App.css';
import CharacterComponent from './Components/CharacterComponent';
import EpisodeComponent from './Components/EpisodeComponent';
import CharacterDetailsComponent from './Components/CharacterDetailsComponent';
import EpisodeDetails from './Components/EpisodeDetails';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Profile from './Components/Profile'
import React,{useState,useEffect} from 'react';
import { Router,useHistory } from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react'
import { UserContext } from "./utils/UserContext";


import { Switch, Route,BrowserRouter,Redirect } from 'react-router-dom';
function App() {
  const [userState,setUser] = useState(null);
  const {user} = useAuth0();

  const isLoggedin = () => {
    if(user) setUser(user);
  }

  useEffect(() => {
    isLoggedin()
  }, [user])

  return (    
<BrowserRouter>
    <Switch>
    
      {userState && <Route exact path="/Profile" component={Profile}/>}
      {!userState && (<>
       <Route exact path="/Login" component={Login}/>
       <Redirect to="/Login" />
       </>)}
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