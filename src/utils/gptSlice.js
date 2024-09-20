import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null,
        loading: 0
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },

        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;
        },
        toggleLoading: (state, action) => {
            state.loading = action.payload
        }
    },
});

export const { toggleGptSearchView, addGptMovieResult, toggleLoading } = gptSlice.actions;

export default gptSlice.reducer;