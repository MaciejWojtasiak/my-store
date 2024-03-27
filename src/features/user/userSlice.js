import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: 'User',
    number: '',
    address: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        create: {
            prepare(username, number, address) {
                return { payload: { username, number, address } }
            },
            reducer(state, action) {
                state.username = action.payload.username;
                state.number = action.payload.number;
                state.address = action.payload.address;
            },
        },
        remove(state, action) {
            state.username = '';
            state.number = '';
            state.address = '';
        }
    }
});

export const { create, remove } = userSlice.actions;
export default userSlice.reducer;