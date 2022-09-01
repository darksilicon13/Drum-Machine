import React from 'react';
import './Pad.css';

const Pad = ({alphakey, name, src}) => {

    return (
        // User Story #4: Within each .drum-pad, 
        // there should be an HTML5 audio element which has a src attribute pointing to an audio clip, 
        // a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
        // User Story #5: When I click on a .drum-pad element, 
        // the audio clip contained in its child audio element should be triggered.
        <button className="drum-pad">{alphakey}
            <audio className="clip" src={src}/>
        </button>
    );
}

export default Pad;