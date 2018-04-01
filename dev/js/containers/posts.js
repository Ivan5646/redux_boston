import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPostsRequest, fetchPostsSuccess, fetchPostsError, fetchPostsWithRedux, test} from '../actions/index';
 

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPostsWithRedux() //how do I handle this?
    }

    // logout() {
    //    var myArray = Object.values(this.props.fetchPostsWithRedux());
    //    console.log(myArray);
    // }

    // logout();

    render() {
        console.log("props.posts: " + this.props.posts);
      return (
       /* <p>{this.props.fetchPostsWithRedux().toString()}</p> */
       <p>{this.props.posts}</p>  /*Uncaught (in promise) Error: Objects are not valid as a React child */

       /* this.props.posts.map is not a function */
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