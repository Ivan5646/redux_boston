import {combineReducers} from "redux";
import UserReducer from "./reducer-users"; // UserReducer - the name of the variable that holds reducer-users
import ActiveUserReducer from "./reducer-active-user";
import Kitties from "./reducer-kitties";

const allReducers = combineReducers({ // that will be thrown to the Store
    users: UserReducer, // equals to object in reducer-users
    activeUser: ActiveUserReducer,
    kitties: Kitties
});

export default allReducers;