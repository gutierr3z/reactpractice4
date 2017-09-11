import React from 'react';
//==================================================
const Input = ( props ) => {

    const test = () => {
        console.log( 'test test' );
    };

    return (
        <div>
            <input type="text" id="ipt_txt" /> &nbsp;
            <input type="button" value={ props.btnVal } onChange = { this.test } />
        </div>
    );
};
//==================================================    
export default Input;