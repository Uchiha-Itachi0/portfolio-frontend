import { configureStore } from "@reduxjs/toolkit";
import { authentication } from "../reducer/userReducer"
export const store = configureStore({
    reducer : {
        authentication
    }
});