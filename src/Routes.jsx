import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Category from './pages/Category/Category';

import Homepage from './pages/Homepage/Homepage';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      
      <Route path="/criticast">
        <Category category='CritiCast'/>
      </Route>

      <Route path="/series">
        <Category category='Séries'/>
      </Route>

      <Route path="/filmes">
        <Category category='Filmes'/>
      </Route>

      <Route path="/games">
        <Category category='Games'/>
      </Route>

      <Route path="/admin">
        <h1>Adm Login</h1>
      </Route>

    </Switch>
  );
}

export default Routes;