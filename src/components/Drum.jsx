import React from 'react';
import './Drum.css';
import Pads from './Pads';
import Control from './Control';

const Drum = () => {

    // console.log(this.state.pads);
    return (
        // User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
        <div id="drum-machine">
            <Pads />
            <Control />
        </div>
    );
}

export default Drum;