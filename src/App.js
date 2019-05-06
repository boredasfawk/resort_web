import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Pages/Home";
import Rooms from "./Components/Pages/Rooms";
import SingleRoom from "./Components/Pages/SingleRoom";
import Error from "./Components/Pages/Error";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
