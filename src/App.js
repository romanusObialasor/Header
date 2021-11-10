import React from "react";
import Header from "./HeaderNav/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Header} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
