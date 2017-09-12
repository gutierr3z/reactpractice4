import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//==================================================
// const Input = ( props ) => {
class Input extends Component {
    
    constructor( props ) {

        super( props );
        this.state = {};

        this.testx.bind( this );
    };

    testx() {
        // return typeof this.props.xxx;
        // console.log( 'aaa', typeof this.props.xxx );
        console.log( 'aaa', this );
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