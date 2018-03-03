import 'babel-polyfill'; 
import React from 'react';
import ReactDOM from "react-dom"; // all above imported from node modules
import Provider from 'react-redux';
import {createStore} from "redux"; // {} means import a var or function from package
import allReducers from "./reducers";
import App from './components/app';

const store = createStore(allReducers);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
