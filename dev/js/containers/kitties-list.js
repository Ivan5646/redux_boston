import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {testAction} from '../actions/index';

class KittiesList extends Component { 

    render() {
        return (
            <ul onClick={() => this.props.testAction(this.props.kitties[0].color)}>
                <li>{this.props.kitties[0].name} </li>
                <li>{this.props.kitties[1].name}</li>
                <li>{this.props.kitties[2].name}</li>
            </ul>

        )
    }
}

function mapStateToProps(state){ //takes a piece of state which is part of the Store and sends it to the Component as props
    return {
        kitties: state.kitties
    };
}

function matchDispathToProps(dispatch){
    return bindActionCreators({testAction: testAction}, dispatch)
}

export default connect(mapStateToProps, matchDispathToProps)(KittiesList); // this is now a contanier