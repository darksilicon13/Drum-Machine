import React from 'react';
import './Pads.css'
import Pad from './Pad';

const Pads = () => {
    return ( 
        <div className='drum-pads'>
                {this.props.sounds.map(sounds => 
                <Pad key={sounds.pad} power={this.props.power} padnum={sounds.pad} id={sounds.name}
                src={sounds.src} volume={this.props.volume} onDisplay={this.props.onDisplay} onPress={this.props.onPress}/>)}
            </div>
     );
}
 
export default Pads;