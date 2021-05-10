import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "../identity/SignIn";
import Dashboard from "./Dashboard";

function getUserToken() {
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function App() {
  const [token, setToken] = React.useState(getUserToken());
  if(!token) {
    return <SignIn setToken={setUserToken}/>
  }

  function setUserToken(userToken) {
    console.log(userToken);
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Dashboard></Dashboard>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
