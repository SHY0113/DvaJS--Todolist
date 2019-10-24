import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Input from "./routes/input"
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Input} /> 
      </Switch>
    </Router>
  );
}

export default RouterConfig;
