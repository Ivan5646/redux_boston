import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {
    render() {
        return (
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>
        )
    }
}

function mapStateToProps(state){ //takes a piece of state which is part of the Store and sends it to the Component as props
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(UserList); // this is now a contanier