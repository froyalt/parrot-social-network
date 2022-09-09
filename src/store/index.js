import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./modules/user";

const store  = configureStore({
    reducer: {
        userReduce,
    },
})


export default store;