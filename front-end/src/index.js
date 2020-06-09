import React, {lazy} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Client from './Client';
import Admin from './Admin';
import Auth from './Auth';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <Client />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/admin">
            <Auth />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/admin/dashboare">
            <Admin />
        </Route>
      </Switch>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
