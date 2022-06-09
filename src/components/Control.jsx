import React, { Component } from 'react';
import './Control.css';

class Control extends Component {
    state = {}

    handlePower = () => {
        this.props.onPower();
        let element = document.getElementById('power-switch');
        element.style.justifyContent = (element.style.justifyContent === 'flex-end' ? 'flex-start' : 'flex-end');
    }

    handleBank = () => {
        if (this.props.power) {
            this.props.onBank();
            let element = document.getElementById('bank-switch');
            element.style.justifyContent = (element.style.justifyContent === 'flex-end' ? 'flex-start' : 'flex-end');
            if(element.style.justifyContent === 'flex-start') {
                this.props.onDisplay('Header Kit')
            }
            else {
                this.props.onDisplay('Smooth Piano Kit')
            }
        }
    }

    handleVolume = (e) => {
        if (this.props.power) {
            this.props.onVolume(e)
            setTimeout(() => {this.props.onDisplay('');}, "1000")
        }
    }

    render() {
        const disabled = (this.props.power === 0 ? true : false);
        return (
            <div className="control">
                <div className="power">
                    <p>Power</p>
                    <div id='power-switch' className="switch" onClick={this.handlePower}>
                        <div className="lever"></div>
                    </div>
                </div>
                {/* User Story #2: Within #drum-machine I can see an element with a corresponding id="display". */}
                <div id="display">{this.props.display}</div>
                <div>
                    <label htmlFor="volume">Volume</label><br />
                    <input type="range" id="volume" name="volume" min="0" max="101" value={this.props.volume} disabled={disabled} onChange={this.handleVolume} />
                </div>
                <div className="bank">
                    <p>Bank</p>
                    <div id='bank-switch' className="switch" onClick={this.handleBank}>
                        <div className="lever"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Control;