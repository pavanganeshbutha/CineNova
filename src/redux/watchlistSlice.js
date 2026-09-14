import { createSlice } from '@reduxjs/toolkit';

const STORAGE_KEY = 'cinenove_watchlist';

function getInitialMovies() {
  try {
    const storedMovies = localStorage.getItem(STORAGE_KEY);
    return storedMovies ? JSON.parse(storedMovies) : [];
  } catch {
    return [];
  }
}

const initialState = {
  movies: getInitialMovies(),
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      const exists = state.movies.some(
        (movie) => movie.id === action.payload.id,
      );

      if (!exists) {
        state.movies.push(action.payload);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.movies));
      }
    },
    removeFromWatchlist: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload,
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.movies));
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
