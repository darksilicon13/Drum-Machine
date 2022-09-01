import {configureStore} from '@reduxjs/toolkit';
import drumReducer from './modules/drumSlice';

const store = configureStore({
    reducer: {
        drum: drumReducer,
    }
})

export default store;