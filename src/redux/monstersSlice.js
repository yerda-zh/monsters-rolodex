import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    monsters: [],
};

export const monstersSlice = createSlice({
    name: "monsters",
    initialState,
    reducers: {
        setMonsters: (state, action) => {
            state.monsters = action.payload;
        }
    },
})

export const {setMonsters} = monstersSlice.actions;
export default monstersSlice.reducer;