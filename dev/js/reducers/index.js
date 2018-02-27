import {combineReducers} from "redux";
import UserReducer from "./reducer-users"; // UserReducer - the name of the variable that holds reducer-users

export default const allReducers = combineReducers({ // that will be thrown to the Store
    users: UserReducer // equals to object in reduser-users
});