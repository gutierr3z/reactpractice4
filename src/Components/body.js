import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//--------------------------------------------------

//==================================================
class Body extends Component {
    
    constructor( props ) {

        super( props );
        this.state = {};
    };

    render() {

        return (
            <div>
                <input type="text" id="ipt_txt" />
            </div>
        );
    };
};
//==================================================
export default Body;