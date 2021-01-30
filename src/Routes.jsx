import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
    </Switch>
  );
}

export default Routes;