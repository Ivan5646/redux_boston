export const selectUser = (user) => { // this is an Action Creator
    console.log("You clicked on user: ", user.first);
    return { // this is the action itself or object
        type: "USER_SELECTED",
        payload: user
    }
}