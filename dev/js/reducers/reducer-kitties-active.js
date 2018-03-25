export default function(state=null, action) {
    switch(action.type) {
        case "TEST_ACTION": // type of the action. It was created in actions
        return action.payload;
        break;
    }
    return state;
}