import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Client from './Client';
import Auth from './Auth';
import Loading from './components/Client/Loading/Loading'
const Admin = lazy(() => import('./Admin'))

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
              <Suspense fallback={<Loading />}>
                  <Admin />
              </Suspense>
        </Route>
      </Switch>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
