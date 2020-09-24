import React from "react";
import NavBar from "./components/navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ThingsDemo from "./things/ThingsDemo";
import NoMatch from "./components/NoMatch";
import Stores from "./stores/Stores";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ThingsDemo" component={ThingsDemo} />
        <Route exact path="/stores" component={Stores} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
