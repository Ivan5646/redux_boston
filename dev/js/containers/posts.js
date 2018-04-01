import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPostsRequest, fetchPostsSuccess, fetchPostsError, fetchPostsWithRedux, test} from '../actions/index';
 

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPostsWithRedux() //how do I handle this?
    }

    render() {
      return (
        <p>{this.props.fetchPostsWithRedux().toString()}</p>
        /*<ul>
            <li onClick={() => this.props.test()}>test list item</li>
        {
            this.props.posts && 
            this.props.posts.map((post) =>{
                return(
                    <li>{post.title}</li>
                    )
            })
        }
        </ul>*/
        )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}

function matchDispathToProps(dispatch){
    return bindActionCreators({test: test, fetchPostsWithRedux: fetchPostsWithRedux}, dispatch)
}

export default connect(mapStateToProps, matchDispathToProps)(Posts); // this is now a contanier