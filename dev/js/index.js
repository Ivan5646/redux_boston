import 'babel-polyfill'; 
import React from 'react';
import ReactDOM from "react-dom"; // all above imported from node modules
import {Provider} from 'react-redux';
import {createStore} from "redux"; // {} means import a var or function from package
import {applyMiddleware} from 'redux' // const {createStore, applyMiddleware} = Redux;  
import thunk from 'redux-thunk' // const thunk = ReduxThunk.default;
import logger from 'redux-logger'; //import {createLogger} from 'redux-logger'
import allReducers from "./reducers";
import App from './components/app';


const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  // middleware.push(createLogger()) // createLogger throwing error
}

// const store = createStore(allReducers);
const store = createStore(
  allReducers,
  applyMiddleware(...middleware, logger())
)

// here <Provider store={store}>  every component has access to store data now  
ReactDOM.render(
    <Provider store={store}>   
        <App/>
    </Provider>,
    document.getElementById('root')
);


