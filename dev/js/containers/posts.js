import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPostsRequest, fetchPostsSuccess, fetchPostsError} from '../actions/index';
 
function fetchPostsWithRedux() {
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

function fetchPosts() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPostsWithRedux()
    }

    render() {
      return (
        <ul>
            <li>test list item</li>
        {
            this.props.posts && 
            this.props.posts.map((post) =>{
                return(
                    <li>{post.title}</li>
                    )
            })
        }
        </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}

// function matchDispathToProps(dispatch){ 

// }

export default connect(mapStateToProps, {fetchPostsWithRedux})(Posts); // this is now a contanier