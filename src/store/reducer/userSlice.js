import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "join",
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const { changeName } = userSlice.actions;
export default userSlice.reducer;
