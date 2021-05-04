import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from '../identity/SignIn';
import Dashboard from './Dashboard';

function setUserToken(userToken) {
  localStorage.setItem('token', JSON.stringify(userToken));
}

function getUserToken() {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


function App() {
  const [token, setToken] = React.useState(getUserToken());  
  if(!token) {
    return <SignIn setToken={setToken}/>
  }

  
  
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/dashboard' > 
        <Dashboard></Dashboard>
      </Route> 
    </Switch>
    </BrowserRouter>
  );
}


export default App;
