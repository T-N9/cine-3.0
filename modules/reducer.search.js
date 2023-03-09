import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name : 'searchInfo',
    initialState : {
        query : '',
        pageNo : 1
    },
    reducers : {
        setSearchQuery : (state, action) => {
            state.query = action.payload;
        },
        setPageNumber : (state, action) => {
            state.pageNo = action.payload
        }
    }
});

export const { setSearchQuery, setPageNumber } = searchSlice.actions;
export default searchSlice.reducer;