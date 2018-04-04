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
              // console.log("innerObj: " + x + ": " + innerObj[x]);
              console.log(innerObj[x].id + ". " + innerObj[x].title);
              var innerObj2 = innerObj[x];
              // for(var y in innerObj2) {
              //     console.log("innerObj2: " + y + ": " + innerObj2[y]);
              // }
          }
      }

      return (
       <p>hey</p>  
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