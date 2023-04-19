import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers.js";

export default configureStore({
    reducer: reducers,
});