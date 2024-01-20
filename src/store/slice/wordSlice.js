import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { getWordsByUserId, deleteWordById, updateSentencesByWordId } from "../../services/word";

export const fetchWords = createAsyncThunk("word/fetchWords", async (userId) => {
    const result = await getWordsByUserId(userId)
    return result.data
})

export const deleteWord = createAsyncThunk("word/deleteWord", async (id) => {
    const result = await deleteWordById(id)
    return id
})

export const updateSentences = createAsyncThunk("word/updateSentences", async (data) => {
    const { id, sentences } = data
    const result = await updateSentencesByWordId(id, sentences)
    return {
        id: id,
        sentences: sentences
    }
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
            .addCase(deleteWord.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deleteWord.fulfilled, (state, action) => {
                state.loading = false
                state.words = state.words.filter(word => word.id !== action.payload)
            })
            .addCase(deleteWord.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(updateSentences.pending, (state, action) => {
                state.loading = true
            })
            .addCase(updateSentences.fulfilled, (state, action) => {
                state.loading = false
                const { id, sentences } = action.payload
                const index = state.words.findIndex((item) => item.id === id)
                state.words[index].sentences = sentences
            })
            .addCase(updateSentences.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export const { setWords, setLoading, setError, setSelectedWordAndTab } = wordSlice.actions

export default wordSlice.reducer