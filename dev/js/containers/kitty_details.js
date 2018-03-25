import React, {Component} from 'react';
import {connect} from 'react-redux';

class KittyDetails extends Component {
    render() {
        if (!this.props.kitty) {
            return (<h4>Kitty was not clicked</h4>);
        }
        return (
            <div>
                <p>{this.props.kitty.name} {this.props.kitty.color}</p>
            </div>
        );
    }
}

function mapStateToProps(state){ 
    return {
        kitty: state.activeKitty
    };
}

export default connect(mapStateToProps)(KittyDetails);  // this is now a contanier