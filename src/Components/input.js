import React from 'react';
//==================================================
const Input = ( props ) => {

    function test() {
        console.log( 'test' );
    }

    return (
        <div>
            <input type="text" id="ipt_txt" /> &nbsp;
            <input type="button" value={ props.btnVal } onClick = { props.counter } />
        </div>
    );
};
//==================================================    
export default Input;