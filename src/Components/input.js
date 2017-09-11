import React from 'react';
//==================================================
const Input = ( props ) => {

    function test() {
        // console.log( 'hello', props );
        props.counter();
    };

    return (
        <div>
            <input type="text" id="ipt_txt" /> &nbsp;
            <button onClick = { test }>
                { props.btnVal }
            </button>
        </div>
    );
};
//==================================================
export default Input;