import React from 'react';
//==================================================
const Input = ( props ) => {

    return (
        <div>
            <input type="text" id="ipt_txt" /> &nbsp;
            <input type="button" value={ props.btnVal } onClick = { console.log( 'zzzzz', props.counter ) } />
        </div>
    );
};
//==================================================
export default Input;