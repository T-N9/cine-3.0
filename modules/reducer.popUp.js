import { createSlice } from "@reduxjs/toolkit";

export const popUpSlice = createSlice({
    name : 'popUp',
    initialState : {
        isYTPopUp : false,
    },
    reducers : {
        openYTPopUp : (state) => {
            state.isYTPopUp = true;
        },
        closeYTPopUp : (state) => {
            state.isYTPopUp = false;
        }
    }
});

export const { openYTPopUp, closeYTPopUp } = popUpSlice.actions;
export default popUpSlice.reducer;