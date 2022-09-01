import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Control.css';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { changeVolume, setDisplay, toggleBank, togglePower } from '../redux/modules/drumSlice';



const Control = () => {
    const dispatch = useDispatch();

    const { power, volume, display, bank } = useSelector(state => state.drum);

    const onPowerChange = () => {
        dispatch(togglePower());
    }

    const onBankChange = () => {
        dispatch(toggleBank());
        if (bank) {
            dispatch(setDisplay('Piano'))
            setTimeout(() => { dispatch(setDisplay('')) }, 2000)
        } else {
            dispatch(setDisplay('Heatbox'))
            setTimeout(() => { dispatch(setDisplay('')) }, 2000)
        }
    }

    const onVolumeChange = e => {
        dispatch(changeVolume(e.target.value));
        dispatch(setDisplay(`Volume: ${e.target.value}`))
        setTimeout(() => { dispatch(setDisplay('')) }, 2000)
    }

    return (
        <div className="control">
            <div className="power">
                <label htmlFor="power">Power</label><br />
                <Switch id="power" checked={power} onChange={onPowerChange} />
            </div>
            {/* User Story #2: Within #drum-machine I can see an element with a corresponding id="display". */}
            {/* User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique). */}
            <div id="display">{display}</div>
            <div>
                <label htmlFor="volume">Volume</label><br />
                <VolumeDown />
                <Slider id="volume" aria-label="Volume" min={0} max={100} value={volume} onChange={onVolumeChange} disabled={!power} />
                <VolumeUp />
            </div>
            <div className="bank">
                <label htmlFor="bank">Bank</label><br />
                <Switch id="bank" checked={bank} disabled={!power} onChange={onBankChange} />
            </div>
        </div>
    )
}

export default Control;