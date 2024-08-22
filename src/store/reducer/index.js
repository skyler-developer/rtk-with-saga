import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import userSlice from "./userSlice";

const reducers = { counter: counterSlice, user: userSlice };

const rootReducers = combineReducers(reducers);

export default rootReducers;
