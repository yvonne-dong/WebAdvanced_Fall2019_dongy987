import React from 'react';
import './Tatami.css';

// center text area
const Tatami = (props) => {
    return (
        // notClicked: show title of the text area
        <canvas className="tatamiCanvas" id={props.id}></canvas>
    );
}

export default Tatami;