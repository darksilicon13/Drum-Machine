import React, { Component } from 'react';
import './Drum.css';
import Pads from './Pads';
import Control from './Control';
import sounds from '../sounds/sources'

class Drum extends Component {
    state = {
        power: 0,
        bank: 0,
        sounds: sounds,
        volume: 50,
        display: ''
    }

    handleDisplay = (string) => {
        this.setState({ display: string });
    }

    handlePower = () => {
        this.setState({ power: (this.state.power + 1) % 2 });
    }

    handleBank = () => {
        this.setState({ bank: (this.state.bank + 1) % 2 });
    }

    handleVolume = (e) => {
        this.setState({ volume: e.target.value });
        this.setState({ display: 'Volume: ' + this.state.volume });
        // console.log(this.state.volume);
    }



    componentDidMount() {
        document.addEventListener('keydown', (event) => {
            
        })
    }

    render() {
        // console.log(this.state.pads);
        return (
            // User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
            <div id="drum-machine">
                <Pads power={this.state.power} sounds={this.state.sounds[this.state.bank]} volume={this.state.volume} 
                onDisplay={this.handleDisplay} />
                <Control power={this.state.power} bank={this.state.bank} display={this.state.display}
                 volume={this.state.volume} onPower={this.handlePower} onBank={this.handleBank} 
                 onVolume={this.handleVolume} onDisplay={this.handleDisplay} />
            </div>
        );
    }
}

export default Drum;