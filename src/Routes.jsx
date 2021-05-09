import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Category from "./pages/Category/Category";
import Post from "./pages/Post/Post";
import Login from "./pages/Login/Login";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />

      <Route path="/criticast">
        <Category category="criticast" />
      </Route>

      <Route path="/series">
        <Category category="series" />
      </Route>

      <Route path="/filmes">
        <Category category="filmes" />
      </Route>

      <Route path="/games">
        <Category category="games" />
      </Route>

      <Route path="/post/:slug" component={Post} />
      <Route path="/admin" exact component={Login} />
    </Switch>
  );
}

export default Routes;
