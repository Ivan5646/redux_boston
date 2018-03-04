// this code below gonna listen to selectUser action
// by "default" all actions are sent to reducers/index.js allReducers

export default function(state={}, action) {
    switch(action.type) {
        case "USER_SELECTED":
        return action.payload;
        break;
    }
    return state;
}