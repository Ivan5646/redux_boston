import axios from "axios";

export const selectUser = (chlen) => { // this is an Action Creator. How the fuck the argument is referred to user object?
    console.log("You clicked on user: ", chlen.first);
    return { // this is the action itself or object
        type: "USER_SELECTED", 
        payload: chlen
    }
}

// fetch server data process
// export const fetchPostsRequest = () => {
//   return {
//     type: "FETCH_REQUEST"
//   }
// }

// export const fetchPostsSuccess = (posts) => {
//   return {
//     type: "FETCH_SUCCESS",
//     payload: posts
//   }
// }

// export const fetchPostsError = ()  => {
//   return {
//     type: "FETCH_ERROR"
//   }
// }

// export const fetchPostsWithRedux = () => {
//     return (dispatch) => {
//     dispatch(fetchPostsRequest());
//     return fetchPosts().then(([response, json]) =>{
//         if(response.status === 200){
//         dispatch(fetchPostsSuccess(json))
//       }
//       else{
//         dispatch(fetchPostsError())
//       }
//     })
//   }
// }

// export const fetchPosts = () => {
//   const URL = "https://jsonplaceholder.typicode.com/posts";
//   return fetch(URL, { method: 'GET'})
//      .then( response => Promise.all([response, response.json()]));
// }

// export const test = () => {
//   console.log("hi from action test function");
//   return { 
//     type: "TEST_FIRED", 
//     payload: "test function"
//   }
// }


// fetch with axios
export function fetchTweets() {
  return function(dispatch) {
    dispatch({type: "FETCH_TWEETS"});
    
    /* 
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
    */
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      })
  }
}

export function addTweet(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTweet(id) {
  return { type: 'DELETE_TWEET', payload: id}
}
