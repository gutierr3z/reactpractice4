import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//--------------------------------------------------
import Input from './input';
//==================================================
class Body extends Component {
    
    constructor( props ) {

        super( props );
        this.state = {
            btnVal : 'XXX',
            counter: 0
        };
    };

    render() {

        return (
            <Input btnVal = { this.state.btnVal } counter = { this.state.counter } />
        );
    };
};
//==================================================
export default Body;