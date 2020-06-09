import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import HeaderComponent from './components/Header/HeaderConponent'
import Loading from './components/Client/Loading/Loading'
import LoginComponent from './components/Client/Login/LoginComponent'
import SliderComponent from './components/Client/slider/SliderComponent'
import FooterComponent from './components/Client/Footer/FooterComponent'

const HeaderComponent = lazy(() => import('./components/Client/Header/HeaderConponent'))

// import HomePage from './pages/HomePage'
// import RegisterPage from './pages/RegisterPage'
// import IntroductionPage from './pages/IntroductionPage'

const HomePage = lazy(() => import('./pages/Client/HomePage'))
const RegisterPage = lazy(() => import('./pages/Client/RegisterPage'))
const IntroductionPage = lazy(() => import('./pages/Client/IntroductionPage'))
const CardPage = lazy(() => import('./pages/Client/CardPages'))

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
          <div className="container-fluid">

            <Switch>
              <Route exact path="/">
                <Suspense fallback={<Loading />}>
                  <HomePage />
                </Suspense>
              </Route>
              <Route path="/Introduction">
                <Suspense fallback={<Loading />}>
                  <IntroductionPage />
                </Suspense>
              </Route>
              <Route path="/register">
                <Suspense fallback={<Loading />}>
                  <RegisterPage
                    onClickLogin={handleLoginClick}
                  />
                </Suspense>

              </Route>
              <Route path="/card">
                <Suspense fallback={<Loading />}>
                  <CardPage />
                </Suspense>
              </Route>
            </Switch>

          </div>
          <FooterComponent />
        </div>
      </Suspense>

    </BrowserRouter>
  );
}

export default App;
