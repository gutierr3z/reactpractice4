import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//==================================================
// const Input = ( props ) => {
class Input extends Component {
    
    constructor( props ) {

        super( props );
        this.state = {};

        this.test.bind( this );
    };

    test() {
        return typeof this.props.xxx;
    };

    render() {
        return (
            <div>
                <input type="text" id="ipt_txt" /> &nbsp;
                <button onClick = { this.test }>
                    { this.props.btnVal }
                </button>
            </div>
        );
    };
};
//==================================================
export default Input;