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
        var obj = this.props.posts;
        console.log("before converting to object: " + obj);

        // for(var property in obj) {
        //     console.log("(for in statement) " + property + ": " + obj[property]);
        //     var innerObj = obj[property];
        //     for(var x in innerObj) {
        //         console.log("innerObj: " + x + ": " + innerObj[x]);
        //         var innerObj2 = innerObj[x];
        //         for(var y in innerObj2) {
        //             console.log("innerObj2: " + y + ": " + innerObj2[y]);
        //         }
        //     }
        // }


        for(var property in obj) {
            var innerObj = obj[property];
            for(var x in innerObj) {
                var innerObj2 = innerObj[x];
                var renderElx = innerObj[x];
                for(var y in innerObj2) {
                    var renderEl = innerObj2[y];
                }
            }
        }

      return (
            <p>{renderEl}</p>
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