// this code below gonna listen to selectUser action
// by "default" all actions are sent to reducers/index.js allReducers

export default function(state=null, action) {
    switch(action.type) {
        case "USER_SELECTED": // type of the action. It was created in actions
        return action.payload;
        break;
    }
    return state;
}