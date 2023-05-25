import { createSlice } from "@reduxjs/toolkit";

const initialState={
    origin: null, 
    destination: null, 
    travelTimeInformation: null,
};
/* Data Layer*/
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin= action.payload;
        },
        setDestination: (state, action) => {
            state.destination= action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation= action.payload;
        },
        
    },
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// Selectors. Need one for each action
//debugging

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;


// Reduce in our store.js file. Initially wrote and now connecting it. 
export default navSlice.reducer;

