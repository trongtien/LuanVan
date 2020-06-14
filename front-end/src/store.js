// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";

// export default () => {
//   const store = createStore(rootReducer, applyMiddleware(thunk));
//   return store;
// };
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = {
  
}

const store = configureStore({
  reducer:rootReducer
})

export default store