import React, { useState } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';


import HeaderComponent from '../components/Client/Header/HeaderConponent'
// import Loading from '../components/Client/Loading/Loading'
import Login from '../components/Client/Login/LoginComponent'
import SliderComponent from '../components/Client/slider/SliderComponent'
import FooterComponent from '../components/Client/Footer/FooterComponent'

// const Home = lazy(() => import('../pages/Client/Home'))
// const Register = lazy(() => import('../pages/Client/Resister'))
// const Introduction = lazy(() => import('../pages/Client/Introduction'))
// const Cart = lazy(() => import('../pages/Client/Cart/index.jsx'))

function Main({children}){
  return (
    <div>
        {/* {isShowLogin === true ? <Login hanldeClickClose={onClickCloseLogin} /> : ""} */}
        <HeaderComponent />
        <SliderComponent />
        {/* {React.Children.map(children, child => {
          return child;
        })} */}
        {children}
        <FooterComponent />
    </div>
)
}

export default Main;



// export default ({ children }) => {
 
//   // console.log(children)
//   return (
//       <div>
//           {/* {isShowLogin === true ? <Login hanldeClickClose={onClickCloseLogin} /> : ""} */}
//           <HeaderComponent />
//           <SliderComponent />
//           {/* {React.Children.map(children, child => {
//             return child;
//           })} */}
//           {children}
//           <FooterComponent />
//       </div>
//   )
// }



// function Main(props) {
  // const [isShowLogin, setIsShowLogin] = useState(false);

  // function handleLoginClick() {
  //   let newShowLogin = isShowLogin
  //   if (newShowLogin === undefined) return
  //   setIsShowLogin(!newShowLogin)
    
  // }

  // function onClickCloseLogin() {
  //   let newIsShowLogin = isShowLogin
  //   if (newIsShowLogin === undefined) return
  //   setIsShowLogin(!newIsShowLogin)
  // }

//   return (
//     <BrowserRouter>
//       <Suspense fallback={<Loading />}>
//         <div className="main">

//           {isShowLogin === true ? <LoginComponent hanldeClickClose={onClickCloseLogin} /> : ""}
//           <HeaderComponent
//             onClickLogin={handleLoginClick}
//           />
//           <SliderComponent />
//             <Switch>
//               <Route exact path='/'>
//                 <Suspense fallback={<Loading />}>
//                   <Home />
//                 </Suspense>
//               </Route>

//               <Route  path="/Introduction">
//                 <Suspense fallback={<Loading />}>
//                   <Introduction />
//                 </Suspense>
//               </Route>

//               <Route path="/register">
//                 <Suspense fallback={<Loading />}>
//                   <Register
//                     onClickLogin={handleLoginClick}
//                   />
//                 </Suspense>
//               </Route>

//               <Route path="/card">
//                 <Suspense fallback={<Loading />}>
//                   <Cart />
//                 </Suspense>
//               </Route>
//             </Switch>

//           </div>
//           <FooterComponent />
//         {/* </div> */}
//       </Suspense>

//     </BrowserRouter>
//   );
// }

// export default Main;
