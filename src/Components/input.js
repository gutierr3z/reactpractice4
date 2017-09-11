import React from 'react';
//==================================================
const Input = ( props ) => {

    function test() {
        console.log( 'test' );
        props.counter();
    }

    return (
        <div>
            <input type="text" id="ipt_txt" /> &nbsp;
            <input type="button" value={ props.btnVal } onClick = { test } />
        </div>
    );
};
//==================================================   
export default Input;