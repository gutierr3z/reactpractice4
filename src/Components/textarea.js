import React, { Component } from 'react';
//==================================================
const Textarea = ( props ) => {

    return (

        <div>
            <textarea>
                { props.hello }
            </textarea>
        </div>
    );
};
//==================================================
export default Textarea;