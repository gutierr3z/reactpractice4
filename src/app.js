import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//--------------------------------------------------
import Footer from './Components/footer';
//==================================================
class APP extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
    };

    render() {
        return (
            <div className="container oo-main">
                <h1><i>Welcome!</i></h1>
                <img src="./images/rainbow.gif" width="600" />
                <Footer />
            </div>
            
        );
    };
};

ReactDOM.render( <APP />, document.querySelector( '#main' ) );