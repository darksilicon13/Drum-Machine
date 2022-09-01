import React from 'react';
import { useSelector } from 'react-redux';
import './Control.css';

const Control = () => {

    const {power, volume, display, bank} = useSelector(state=>state.drum);

    const onPowerChange = () => {
        
    }

    return (
        <div className="control">
            <div className="power">
                <p>Power</p>
                <div id='power-switch' className="switch" onClick={onPowerChange}>
                    <div className="lever"></div>
                </div>
            </div>
            {/* User Story #2: Within #drum-machine I can see an element with a corresponding id="display". */}
            {/* User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique). */}
            <div id="display">{display}</div>
            <div>
                <label htmlFor="volume">Volume</label><br />
                <input type="range" id="volume" name="volume" min="0" max="101" defaultValue={volume}/>
            </div>
            <div className="bank">
                <p>Bank</p>
                <div id='bank-switch' className="switch">
                    <div className="lever"></div>
                </div>
            </div>
        </div>
    )
}

export default Control;