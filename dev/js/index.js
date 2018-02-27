import 'babel-polyfill'; 
import React from 'react';
import ReactDOM from "react-dom"; // all imported from node modules
import {createStore} from "redux"; // {} means import a var or function from package
import allReducers from "./reducers";

const Store = createStore(allReducers);

ReactDOM.render(<h1>hey now</h1>, document.getElementById('root'));
