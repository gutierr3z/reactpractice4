import React, { Component } from 'react';
//==================================================
const Textarea = ( props ) => {
    return (

        <div>
            <textarea>
                { props.value }
            </textarea>
        </div>
    );
};
//==================================================
export default Textarea;