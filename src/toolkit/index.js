import { combineReducers,configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./todoSlice";

const rootReducer = combineReducers({
    toolkit:toolkitSlice
})

export const store = configureStore({
    reducer:rootReducer
})