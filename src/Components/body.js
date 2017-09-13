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
            counter: 0,
            forText: 'hi hi'
        };
        this.inc = this.inc.bind( this );
    };

    inc( txt ) {
        console.log( 'counter', txt );
        var x = this.state.counter + 1;
        this.setState({
            counter : x
        });
    };

    render() {
        return (
            <div>
                <Input btnVal = { this.state.btnVal } xxx = { this.inc } />
                <Textarea hello = { this.state.forText } />
            </div>
        );
    };
};
//==================================================
export default Body;