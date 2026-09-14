import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from './tmdbApi';
import watchlistReducer from './watchlistSlice';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    watchlist: watchlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
