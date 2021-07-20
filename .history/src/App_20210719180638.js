import logo from './logo.svg';
import './App.css';
import CharacterComponent from './Components/CharacterComponent';
import EpisodeComponent from './Components/EpisodeComponent';
import CharacterDetailsComponent from './Components/CharacterDetailsComponent';

import React from 'react';
import { Router,useHistory } from 'react-router-dom';

import { Switch, Route,BrowserRouter,Redirect } from 'react-router-dom';
function App() {
  return (
    
      
<BrowserRouter>
     

    
      
    <Switch>
     <Route exact path="/Episodes" component={EpisodeComponent} />
      <Route exact path="/" component={CharacterComponent} />
      <Route exact path="/CharacterDetails/:id" component={CharacterDetailsComponent} />
      

      
    </Switch>
    </BrowserRouter>
    
     
     
   
  );
}

export default App;
