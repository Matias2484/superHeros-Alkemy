import React from "react";
import { Route, Switch } from "react-router-dom";
// import { useHistory } from "react-router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./Componentes/Home/Home";

import Detail from "./Componentes/Detail/Detail";
import Team from "./Componentes/Team/Team";
import Login from "./Componentes/Login/Login";
// const history = useHistory;
// const token = window.localStorage.getItem("token");

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route path="/home/:id" component={Detail} />
        <Route path="/team" component={Team} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
