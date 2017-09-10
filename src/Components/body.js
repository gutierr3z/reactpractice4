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

                <div className="oo-resolution">
                    <img src="./images/cube.gif" />
                    Please Set Your Screen Resolution To <span>800x600</span> For Optimal Viewing
                    <img src="./images/cube.gif" />
                </div>

                <img src="./images/rainbow.gif" width="600" />

                <br />

                <div className="oo-babies">
                    <img src="./images/baby.gif" />
                    <img src="./images/baby.gif" />
                    <img src="./images/baby.gif" />
                </div>
            </div>
        );
    };
};
//==================================================
export default Body;