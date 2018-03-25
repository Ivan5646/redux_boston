export const selectUser = (chlen) => { // this is an Action Creator. How the fuck the argument is referred to user object?
    console.log("You clicked on user: ", chlen.chlen);
    return { // this is the action itself or object
        type: "USER_SELECTED", // wtf is this?
        payload: chlen
    }
}

export const testAction = () => {
    console.log("hi from testAction");
    return {
        type: "TEST_ACTION"
    }
}