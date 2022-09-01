import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Pad.css';
import {setDisplay} from '../redux/modules/drumSlice'

const Pad = ({alphakey, name, src}) => {
    const dispatch = useDispatch();

    const {power, volume} = useSelector(state=>state.drum);

    const onPadClick = () => {
        if(!power) {
            return;
        }
        const audio = new Audio(document.getElementById(alphakey).src);
        audio.volume = volume/100;
        audio.play();
        
        dispatch(setDisplay(name));
        setTimeout(()=>{dispatch(setDisplay(''))},2000);
    }

    return (
        // User Story #4: Within each .drum-pad, 
        // there should be an HTML5 audio element which has a src attribute pointing to an audio clip, 
        // a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
        // User Story #5: When I click on a .drum-pad element, 
        // the audio clip contained in its child audio element should be triggered.
        <button className="drum-pad" onClick={onPadClick}>{alphakey}
            <audio id={alphakey} className="clip" src={src}/>
        </button>
    );
}

export default Pad;