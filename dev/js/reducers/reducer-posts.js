export default function(state = {}, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return state;
    case "FETCH_SUCCESS": 
      return {...state, posts: action.payload};
    default:
      return state;
  }
}

// original code
// const reducer = (state = {}, action) => {
//   switch (action.type) {
//     case "FETCH_REQUEST":
//       return state;
//     case "FETCH_SUCCESS": 
//       return {...state, posts: action.payload};
//     default:
//       return state;
//   }
// }