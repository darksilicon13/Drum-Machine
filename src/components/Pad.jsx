import React, { Component } from 'react';
import './Pad.css';

class Pad extends Component {

    render() {
        // console.log(this.props.padnum);
        return (
            // User Story #4: Within each .drum-pad, 
            // there should be an HTML5 audio element which has a src attribute pointing to an audio clip, 
            // a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
            // User Story #5: When I click on a .drum-pad element, 
            // the audio clip contained in its child audio element should be triggered.
            <button onClick={() => this.props.onPress(this.props.padnum, this.props.id)} id={this.props.id} className="drum-pad">{this.props.padnum}
                <audio id={this.props.padnum} src={this.props.src} className="clip"/>
            </button>
        );
    }
}

export default Pad;