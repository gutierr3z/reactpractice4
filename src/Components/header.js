import React from 'react';
//==================================================
const Header = ( props ) => {

    return (
        <div>
            <header className="">

                <img src="./images/alum.gif" width="600" />

                <h1>
                    <img src="./images/earth2.gif" />
                    <strong><i>Welcome!</i></strong>
                    <img src="./images/earth2.gif" />
                </h1>

                <img src="./images/alum.gif" width="600" />
            </header>

            <div className="oo-resolution">

                <img src="./images/cube.gif" />

                Please Set Your Screen Resolution To <span>800x600</span> For Optimal Viewing

                <img src="./images/cube.gif" />
            </div>
            
            <img src="./images/rainbow.gif" width="600" />
        </div>
    );
};

//==================================================
export default Header;