import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//==================================================
class Input extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            state1: 'state1'
        };
        this.testx = this.testx.bind( this );
    };
    testx() {
        this.props.xxx( document.querySelector( '#ipt_txt' ).value );
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