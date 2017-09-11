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

    const xx = () => {
        consel.log( 'xxx', this.state.counter );
        return this.state.counter++;
    };

    render() {

        return (
            <Input btnVal = { this.state.btnVal } counter = { xx } />
        );
    };
};
//==================================================
export default Body;