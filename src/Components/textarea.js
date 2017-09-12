import React, { Component } from 'react';
//==================================================
const Textarea = ( props ) => {
    console.log( 'props', props.hello.defaultValue );
    return (

        <div>
            <textarea>
                { props.hello }XXX
            </textarea>
        </div>
    );
};
//==================================================
export default Textarea;