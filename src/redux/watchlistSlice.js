import { createSlice } from '@reduxjs/toolkit';

const LEGACY_STORAGE_KEY = 'cinenove_watchlist';

function getWatchlistFromLocalStorage() {
  try {
    const watchlist = localStorage.getItem('watchlist');
    if (watchlist) return JSON.parse(watchlist);

    // migrate movies saved under the old key, which had no type
    const legacyMovies = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!legacyMovies) return [];
    const migrated = JSON.parse(legacyMovies).map((movie) => ({
      ...movie,
      type: 'movie',
    }));
    updateLocalStorage(migrated);
    localStorage.removeItem(LEGACY_STORAGE_KEY);
    return migrated;
  } catch {
    return [];
  }
}

function updateLocalStorage(watchlist) {
  localStorage.setItem('watchlist', JSON.stringify(watchlist));
}

const initialState = { watchlist: getWatchlistFromLocalStorage() };

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist(state, action) {
      const { id, type } = action.payload;
      // check id and type present in watchlist
      const isInWatchlist = state.watchlist.some(
        (item) => item.id === id && item.type === type,
      );
      // if item not present add to watchlist
      if (!isInWatchlist) {
        state.watchlist.push(action.payload);
      }
      updateLocalStorage(state.watchlist);
    },
    removeFromWatchlist(state, action) {
      const { id, type } = action.payload;
      state.watchlist = state.watchlist.filter(
        (item) => !(item.id === id && item.type === type),
      );
      updateLocalStorage(state.watchlist);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;
