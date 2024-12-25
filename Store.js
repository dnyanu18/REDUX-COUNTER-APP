import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../components/counterSlice";

const store=configureStore({
    reducer:{
        counter:counterReducer,
    },
});
export default store;