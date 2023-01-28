import { combineReducers } from "@reduxjs/toolkit";
import dummyReducer from "./dummyReducer";

const reducer = combineReducers({
    users: dummyReducer,
});

export default reducer;