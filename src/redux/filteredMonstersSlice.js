import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filteredMonsters: [],
};

export const filteredMonstersSlice = createSlice({
    name: "filteredMonsters",
    initialState,
    reducers: {
        setFilteredMonsters: (state, action) => {
            state.filteredMonsters = action.payload;
        }
    },
})

export const {setFilteredMonsters} = filteredMonstersSlice.actions;
export default filteredMonstersSlice.reducer;