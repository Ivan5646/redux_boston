export const selectUser = (chlen) => { // this is an Action Creator. How the fuck the argument is referred to user object? The function receives its argument in onClick in containers/user-list.js
    console.log("You clicked on user: ", chlen.first);
    return { // this is the action itself or object
        type: "USER_SELECTED", 
        payload: chlen
    }
}

export const testAction = (arg) => {
    console.log(arg.name);
    return {
        type: "TEST_ACTION",
        payload: arg
    }
}