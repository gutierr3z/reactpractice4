import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//==================================================
// const Input = ( props ) => {
class Input extends Component {
    
    constructor( props ) {

        super( props );
        this.state = {
            state1: 'state1'
        };

        this.testx = this.testx.bind( this );
    };

    testx() {

        this.props.xxx( 5 );
    };

    render() {

        
        return (
            <div>
                <input type="text" id="ipt_txt" /> &nbsp;
                <button onClick = { this.testx }>
                    { this.props.btnVal }
                </button>
            </div>
        );
    };
};
//==================================================
export default Input;