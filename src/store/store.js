import { configureStore } from "@reduxjs/toolkit";

import wordReducer from "./slice/wordSlice";

export const store = configureStore({
    reducer: {
        word: wordReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
