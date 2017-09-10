import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//--------------------------------------------------
import Header from './Components/header';
import Body from './Components/body';
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
                <Header />
                
                <Body />

                <Footer />
            </div>
            
        );
    };
};
//==================================================
ReactDOM.render( <APP />, document.querySelector( '#main' ) );