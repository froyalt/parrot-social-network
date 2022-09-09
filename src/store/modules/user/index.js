import { createSlice } from "@reduxjs/toolkit"


const userReduce = createSlice({
    name: "user",
    initialState: {
        isLogged: false,
    },

    reducers: {
        setUser(state, action){
            Object.assign(state, {
                token: action.payload.token,
                email: action.payload.email,
                isLogged: true,
            });
        },

        removeUser(state, action) {
            Object.assign(state, {
                token: undefined,
                email: undefined,
                isLogged: false,
            });
        },
    },
});

export const {setUser, removeUser} = userReduce.actions;

export default userReduce.reducer;