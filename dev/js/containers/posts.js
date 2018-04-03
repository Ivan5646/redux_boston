import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPostsRequest, fetchPostsSuccess, fetchPostsError, fetchPostsWithRedux, test} from '../actions/index';
 

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPostsWithRedux() //how do I handle this?
    }

    render(){
      // var obj = this.props.posts;

      function getValue(key, index) {
        return myObject[key];
      }

      return (
        <div>
        hey
        {
            Object.keys(this.props.posts).map((key) => {
                return <div>Key: {key}, Value: {this.props.posts[key]}</div>;
            })
        }
        </div>
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