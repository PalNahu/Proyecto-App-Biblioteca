
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { bookSlice } from "./book/bookSlice";
import { bibliotechSlice } from "./bibliotech/bibliotechSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        books: bookSlice.reducer,
        bibliotech: bibliotechSlice.reducer,
    },
})