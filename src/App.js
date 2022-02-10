import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './components/Details';
import Login from './components/Login';

const App = () => {
  return (
  <>
  <Router>
  <Header/>
  <Switch>
  <Route path ="/login">
    <Login/>
   </Route>
  <Route path="/detail/:id">
      <Details/>
  </Route>
  <Route path ="/">
    <Home/>
  </Route>
   
  </Switch>

  </Router>
    
  
  
  </>)
};

export default App;
