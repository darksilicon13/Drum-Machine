import React, { Component } from 'react';
import './Pad.css';

class Pad extends Component {

    render() {
        // console.log(this.props.padnum);
        return (
            <button onClick={() => this.props.onPress(this.props.padnum, this.props.id)} id={this.props.id} className="drum-pad">{this.props.padnum}
                <audio id={this.props.padnum} src={this.props.src} />
            </button>
        );
    }
}

export default Pad;