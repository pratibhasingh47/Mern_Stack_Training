import { configureStore } from "@reduxjs/toolkit";
import countReducer from './slices/counterslice';

const store = configureStore({
    reducer : {
        counter : counterReducer
    }
});

export default store;