import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//--------------------------------------------------
import Input from './input';
//==================================================
class Body extends Component {
    
    constructor( props ) {

        super( props );
        this.state = {
            btnVal : 'XXX'
        };
    };

    render() {

        return (
            <Input btnVal = { this.state.btnVal } />
        );
    };
};
//==================================================
export default Body;