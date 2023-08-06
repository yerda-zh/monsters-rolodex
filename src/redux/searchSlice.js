import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchField: '',
}

export const searchFieldSlice = createSlice({
    name: 'searchField',
    initialState,
    reducers: {
        setSearchField: (state, action) => {
            state.searchField = action.payload;
        }
    },
})

export const {setSearchField} = searchFieldSlice.actions;
export default searchFieldSlice.reducer;