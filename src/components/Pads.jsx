import React from 'react';
import { useSelector } from 'react-redux';
import Pad from './Pad';
import './Pads.css'

const Pads = () => {

    const pads = useSelector(state => state.drum.sounds);

    const renderPads = pads.map(pad => (
        <Pad key={pad.alphakey} {...pad} />
    ))

    return (
        <div className='drum-pads'>
            {renderPads}
        </div>
    );
}

export default Pads;