// drumSlice.js
import {createSlice} from '@reduxjs/toolkit';
import sounds from '../../sounds/sources'

const initialState = {
    power: false,
    bank: false,
    display: '',
    volume: 50,
    sounds: [],
}

const drumSlice = createSlice({
    name: 'drum',
    initialState,
    reducers: {
        loadSounds: state => {
            if(!state.bank) {
                state.sounds = [...sounds[0]];
            } else {
                state.sounds = [...sounds[1]];
            }
        },
        togglePower: state => {
            state.power = !state.power;
        },
        changeVolume: (state, action) => {
            state.volume = action.payload;
        },
        setDisplay: (state, action) => {
            state.display = action.payload;
        },
        toggleBank: state => {
            state.bank = !state.bank;
            state.sounds = state.bank ? [...sounds[1]] : [...sounds[0]];
        },
        pressPad: (state, action) => {

        }
    }
})

export const {loadSounds, togglePower, toggleBank, changeVolume, setDisplay, pressPad} = drumSlice.actions;

export default drumSlice.reducer;