import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//--------------------------------------------------
import Header from './Components/header';
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
                
                <img src="./images/rainbow.gif" width="600" />
                <br />
                <div className="oo-babies">
                    <img src="./images/baby.gif" />
                    <img src="./images/baby.gif" />
                    <img src="./images/baby.gif" />
                </div>
                <Footer />
            </div>
            
        );
    };
};
//==================================================
ReactDOM.render( <APP />, document.querySelector( '#main' ) );