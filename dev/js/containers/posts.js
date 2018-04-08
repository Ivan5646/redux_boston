import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {fetchPostsRequest, fetchPostsSuccess, fetchPostsError, fetchPostsWithRedux, test} from '../actions/index';
import {test, fetchTweets} from '../actions/index';
 

class Posts extends Component {

    // componentDidMount(){
    //     this.props.fetchPostsWithRedux() //how do I handle this?
    // }

    // fetchTweets() {
    //   this.props.fetchTweets()
    // }

    componentWillMount(){
        this.props.fetchTweets()
    }


    render() {
      // console.log(this.props.posts)

      return (
       <p>{this.props.posts[0].title}</p>  
      )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}

function matchDispathToProps(dispatch){
    return bindActionCreators({test: test, fetchTweets: fetchTweets}, dispatch)
}

export default connect(mapStateToProps, matchDispathToProps)(Posts); // this is now a contanier