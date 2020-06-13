import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HeaderComponent from './components/Client/Header/HeaderConponent'
import Loading from './components/Client/Loading/Loading'
import LoginComponent from './components/Client/Login/LoginComponent'
import SliderComponent from './components/Client/slider/SliderComponent'
import FooterComponent from './components/Client/Footer/FooterComponent'

const Home = lazy(() => import('./features/client/Home/index'))
const Register = lazy(() => import('./features/client/Resister'))
const Introduction = lazy(() => import('./features/client/Introduction/index'))
const Cart = lazy(() => import('./features/client/Cart'))

function App(props) {

  const [isShowLogin, setIsShowLogin] = useState(false);

  function handleLoginClick() {
    let newShowLogin = isShowLogin
    if (newShowLogin === undefined) return
    setIsShowLogin(!newShowLogin)
  }

  function onClickCloseLogin() {
    let newIsShowLogin = isShowLogin
    if (newIsShowLogin === undefined) return
    setIsShowLogin(!newIsShowLogin)
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <div className="App">

          {isShowLogin === true ? <LoginComponent hanldeClickClose={onClickCloseLogin} /> : ""}
          <HeaderComponent
            onClickLogin={handleLoginClick}
          />
          <SliderComponent />
          {/* <div className="container-fluid"> */}

            <Switch>
              <Route exact path="/">
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              </Route>
              
              <Route path="/Introduction">
                <Suspense fallback={<Loading />}>
                  <Introduction />
                </Suspense>
              </Route>

              <Route path="/register">
                <Suspense fallback={<Loading />}>
                  <Register
                    onClickLogin={handleLoginClick}
                  />
                </Suspense>
              </Route>

              <Route path="/card">
                <Suspense fallback={<Loading />}>
                  <Cart />
                </Suspense>
              </Route>
            </Switch>

          </div>
          <FooterComponent />
        {/* </div> */}
      </Suspense>

    </BrowserRouter>
  );
}

export default App;
