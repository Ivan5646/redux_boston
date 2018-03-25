import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {testAction} from '../actions/index';

class KittiesList extends Component { 

    createListItems() {
        return this.props.kitties.map((kitty) => { 
            return (
                <li 
                    key={kitty.id}
                    onClick={() => this.props.testAction(kitty)} 
                > 
                    {kitty.name}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.createListItems()}
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