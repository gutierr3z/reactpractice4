import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//--------------------------------------------------
import Input from './input';
import Textarea from './textarea';
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

        var x = this.state.counter + 1;
        this.setState({
            counter : x
        });
        console.log( 'hi', this.state.counter );
    };

    render() {

        return (
            <div>
            <Input btnVal = { this.state.btnVal } xxx = { this.inc } />
            <Textarea />
            </div>
        );
    };
};
//==================================================
export default Body;