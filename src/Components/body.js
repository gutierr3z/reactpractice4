import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//--------------------------------------------------
import Input from './input';
//==================================================
class Body extends Component {
    
    constructor( props ) {

        super( props );
        this.state = {};
    };

    render() {

        return (
            <Input btnVal = 'Entersss' />
        );
    };
};
//==================================================
export default Body;