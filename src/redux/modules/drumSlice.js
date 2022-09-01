// drumSlice.js
import {createSlice} from '@reduxjs/toolkit';
import sounds from '../../sounds/sources'

const initialState = {
    power: false,
    bank: false,
    dislay: '',
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
            state.dislay = action.payload;
        },
        pressPad: (state, action) => {

        }
    }
})

export const {loadSounds, togglePower, changeVolume, setDisplay, pressPad} = drumSlice.actions;

export default drumSlice.reducer;