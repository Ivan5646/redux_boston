import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPostsRequest, fetchPostsSuccess, fetchPostsError, fetchPostsWithRedux} from '../actions/index';
 

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPostsWithRedux() //how do I handle this?
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