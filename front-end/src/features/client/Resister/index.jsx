import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MainPage from './pages/Main';

function Resister(props) {
  const match = useRouteMatch();
  console.log({ match });
  console.log(match.url)

  return (
    // <MainPage/>
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      {/* <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:photoId`} component={AddEditPage} /> */}

      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

export default Resister;