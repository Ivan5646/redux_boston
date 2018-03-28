export const selectUser = (chlen) => { // this is an Action Creator. How the fuck the argument is referred to user object?
    console.log("You clicked on user: ", chlen.first);
    return { // this is the action itself or object
        type: "USER_SELECTED", 
        payload: chlen
    }
}

// fetch server data process
export const fetchPostsRequest = () => {
  return {
    type: "FETCH_REQUEST"
  }
}

export const fetchPostsSuccess = (payload) => {
  return {
    type: "FETCH_SUCCESS",
    payload
  }
}

export const fetchPostsError = ()  => {
  return {
    type: "FETCH_ERROR"
  }
}

export const fetchPostsWithRedux = () => {
    return (dispatch) => {
    dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) =>{
        if(response.status === 200){
        dispatch(fetchPostsSuccess(json))
      }
      else{
        dispatch(fetchPostsError())
      }
    })
  }
}

export const fetchPosts = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}

export const test = () => {
  console.log("hi from action test function");
  return { 
    type: "TEST_FIRED", 
    payload: "test function"
  }
}