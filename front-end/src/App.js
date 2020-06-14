import React, { useState, Suspense, lazy } from 'react';
import { Switch,Route } from 'react-router-dom';
import Router from './Router'

function App(props) {
  const [isShowLogin, setIsShowLogin] = useState(false);

  function handleLoginClick() {
    // let newShowLogin = isShowLogin
    // if (newShowLogin === undefined) return
    // setIsShowLogin(!newShowLogin)
    // console.log('1')
  }

  // function onClickCloseLogin() {
  //   let newIsShowLogin = isShowLogin
  //   if (newIsShowLogin === undefined) return
  //   setIsShowLogin(!newIsShowLogin)
  // }
  return (
    <div className="App">
      <Router  
        onClickLogin={handleLoginClick}
      />
    </div>
  );
}
export default App;
