import React, { Component } from 'react';
import './Pad.css';

class Pad extends Component {

    handleClick = () => {
        if (this.props.power) {
            let sound = document.getElementById(this.props.padnum);
            sound.volume = this.props.volume/100;
            sound.play();
            this.props.onDisplay(this.props.id);
            setTimeout(() => {this.props.onDisplay('');}, "1000")
        }
    }

    render() {
        // console.log(this.props.padnum);
        return (
            <button onClick={this.handleClick} id={this.props.id} className="drum-pad">{this.props.padnum}
                <audio id={this.props.padnum} src={this.props.src} />
            </button>
        );
    }
}

export default Pad;