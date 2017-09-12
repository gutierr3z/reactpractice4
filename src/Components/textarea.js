import React, { Component } from 'react';
//==================================================
const Textarea = ( props ) => {
    return (

        <div>
            <textarea>
                { props.defaultValue }
            </textarea>
        </div>
    );
};
//==================================================
export default Textarea;