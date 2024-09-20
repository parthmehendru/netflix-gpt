import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        uid: null,
        email: null,
        displayName: null,
    },
    reducers: {
        addUser: (state, action) => {
            return {
                ...state,
                ...action.payload
            };
        },
        removeUser: (state, action) => {
            return {
                uid: null,
                email: null,
                displayName: null
            }
                
        }
    }
});

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;