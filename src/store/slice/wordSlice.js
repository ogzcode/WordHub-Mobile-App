import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { getWordsByUserId } from "../../services/word";

export const fetchWords = createAsyncThunk("word/fetchWords", async (userId) => {
    const result = await getWordsByUserId(userId)
    return result.data
})

export const wordSlice = createSlice({
    name: "word",
    initialState: {
        words: [],
        loading: true,
        error: null,
        selectedWord: null,
        selectedTab: ""
    },
    reducers: {
        setWords: (state, action) => {
            state.words = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setSelectedWordAndTab: (state, action) => {
            state.selectedWord = action.payload.word
            state.selectedTab = action.payload.tab
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchWords.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchWords.fulfilled, (state, action) => {
                state.loading = false
                state.words = action.payload
            })
            .addCase(fetchWords.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export const { setWords, setLoading, setError, setSelectedWordAndTab } = wordSlice.actions

export default wordSlice.reducer