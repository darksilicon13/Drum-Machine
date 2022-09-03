import React, { useEffect } from 'react';
import './Drum.css';
import Pads from './Pads';
import Control from './Control';
import { useDispatch, useSelector } from 'react-redux';
import { pressPad, setDisplay } from '../redux/modules/drumSlice';

const Drum = () => {

    const dispatch = useDispatch();

    const power = useSelector(state=>state.drum.power);

    const pads = useSelector(state => state.drum.sounds);

    const keys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];


    const handleKeyDown = e => {
        if (!keys.includes(e.key) || !power) return;
            const { src, name } = pads.find(pad => pad.alphakey === e.key.toUpperCase());
            dispatch(pressPad(src));
            dispatch(setDisplay(name));
            setTimeout(() => { dispatch(setDisplay('')) }, 2000)
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [dispatch, power, pads])

    return (
        // User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
        <div id="drum-machine">
            <Pads />
            <Control />
        </div>
    );
}

export default Drum;