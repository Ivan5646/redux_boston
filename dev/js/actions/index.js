export const selectUser = (chlen) => { // this is an Action Creator. How the fuck the argument is referred to user object?
    console.log("You clicked on user: ", chlen.first);
    return { // this is the action itself or object
        type: "USER_SELECTED", 
        payload: chlen
    }
}