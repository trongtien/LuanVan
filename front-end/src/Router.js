import React, {useState,Suspense, lazy }from 'react'
import PropTypes from "prop-types";
import { Route, Switch } from 'react-router-dom'

import Main from './Playout/Main'
import MainAdmin from './Playout/MainAdmin'
import Loading from './components/Client/Loading/Loading'
import Login from './components/Client/Login/LoginComponent'

// admin Views
import Auth from './pages/Admin/Login'
import Dashboard from './pages/Admin/DaboarePage.jsx'
import ProductPage from './pages/Admin/ProductPage'


// views
const Home = lazy(() => import('./pages/Client/Home'))
const Register = lazy(() => import('./pages/Client/Resister'))
const Introduction = lazy(() => import('./pages/Client/Introduction'))
const Cart = lazy(() => import('./pages/Client/Cart/index.jsx'))

Router.propTypes = {
  onClickLogin: PropTypes.func,
};
Router.defaultProps = {
  onClickLogin: null,
};
function Router(props){
  const { onClickLogin } = props;
  return (
    // <Router>
      <Switch>
        <Route path='/admin' exact component={Auth} />
        <Route path='/admin/:path?' exact >
          <MainAdmin>  
            <Switch>
              <Route path='/admin/Dashboard' exact component={Dashboard} />
              <Route path='/admin/setting' component={ProductPage} />
            </Switch>
          </MainAdmin>
        </Route>
        
        <Route>
          <Main>
            <Switch>
                <Route exact path='/'>
                    <Suspense fallback={<Loading />}>
                        <Home />
                    </Suspense>
                </Route>
                <Route  path="/Introduction">
                    <Suspense fallback={<Loading />}>
                        <Introduction />
                    </Suspense>
                </Route>
                <Route path="/register">
                    <Suspense fallback={<Loading />}>
                        <Register
                            onClickLogin={onClickLogin}
                        />
                    </Suspense>
                </Route>

                <Route path="/card">
                    <Suspense fallback={<Loading />}>
                        <Cart />
                    </Suspense>
                </Route>
            </Switch>
          </Main>
        </Route>


      </Switch>
    // </Router>
  )
}

export default Router;

// export default () => {
  
//   return (
//     // <Router>
//       <Switch>
//         {/* <Route path='/login' component={Login} /> */}
//         <Route path='/admin/:path?' exact>
//           <MainAdmin>
//             <Switch>
//               <Route path='/admin' exact component={Dashboard} />
//               <Route path='/admin/setting' component={ProductPage} />
//             </Switch>
//           </MainAdmin>
//         </Route>
        
//         <Route>
//           <Main>
//             <Switch>
//                 <Route exact path='/'>
//                     <Suspense fallback={<Loading />}>
//                         <Home />
//                     </Suspense>
//                 </Route>
//                 <Route  path="/Introduction">
//                     <Suspense fallback={<Loading />}>
//                         <Introduction />
//                     </Suspense>
//                 </Route>
//                 <Route path="/register">
//                     <Suspense fallback={<Loading />}>
//                         <Register
//                             onClickLogin={onClickLogin}
//                         />
//                     </Suspense>
//                 </Route>

//                 <Route path="/card">
//                     <Suspense fallback={<Loading />}>
//                         <Cart />
//                     </Suspense>
//                 </Route>
//             </Switch>
//           </Main>
//         </Route>


//       </Switch>
//     // </Router>
//   )

// }

