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

        this.inc = this.inc.bind( this );
    };

    inc() {

        console.log( 'hi', this.state.counter );
    };

    render() {

        return (
            <Input btnVal = { this.state.btnVal } xxx = { this.inc } />
        );
    };
};
//==================================================
export default Body;