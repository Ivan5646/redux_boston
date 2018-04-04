import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPostsRequest, fetchPostsSuccess, fetchPostsError, fetchPostsWithRedux, test} from '../actions/index';
 

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPostsWithRedux() //how do I handle this?
    }

    render() {
      var obj = this.props.posts;

      for(var property in obj) {
          console.log("(highest level object) " + property + ": " + obj[property]);
          var innerObj = obj[property];
          for(var x in innerObj) {
              console.log(innerObj[x].id + ". " + innerObj[x].title);
          }
      }

      function testFunction() {
        var x = "hey from testFunction";
        return x;
      }

      function iterateObject(object) {
        for(var property in object) {
          var innerObj = object[property];
          for(var x in innerObj) {
              return innerObj[x].title
          }
        }
      }

      return (
       <p>{iterateObject(obj)}</p>  
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