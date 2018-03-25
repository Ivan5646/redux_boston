import {combineReducers} from "redux";
import UserReducer from "./reducer-users"; // UserReducer - the name of the variable that holds reducer-users
import ActiveUserReducer from "./reducer-active-user";
import Kitties from "./reducer-kitties";
import activeKittyReducer from "./reducer-kitties-active.js";

const allReducers = combineReducers({ // that will be thrown to the Store
    users: UserReducer, // equals to object in reducer-users
    activeUser: ActiveUserReducer,
    kitties: Kitties,
    activeKitty: activeKittyReducer
});

export default allReducers;