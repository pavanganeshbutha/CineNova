import { Link, useParams } from 'react-router-dom';
import { useGetMovieDetailsQuery } from '../redux/tmdbApi';
import { mapMovieDetails } from '../utils/movieMapper';
import { getTmdbImageUrl } from '../utils/tmdbImage';
import Container from '../components/ui/Container';
import Loading from '../components/ui/Loading';
import EmptyState from '../components/ui/EmptyState';
import { ArrowLeft, Check, Plus } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../redux/watchlistSlice';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.movies);

  const {
    data: movieData,
    isLoading,
    isError,
  } = useGetMovieDetailsQuery(movieId);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <EmptyState>
        Failed to load movie details. Please try again later
      </EmptyState>
    );
  }

  if (!movieData) {
    return null;
  }

  const movie = mapMovieDetails(movieData);
  const isInWatchlist = watchlist.some(
    (watchlistMovie) => watchlistMovie.id === movie.id,
  );

  return (
    <main>
      {movie.backdropPath && (
        <section className="relative min-h-[420px] overflow-hidden">
          <img
            src={getTmdbImageUrl(movie.backdropPath, 'w1280')}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <Container className="relative flex min-h-[420px] items-end py-12">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-display text-4xl font-extrabold text-text-primary md:text-5xl">
                {movie.title}
              </h1>

              {movie.tagline && (
                <p className="text-lg italic text-text-secondary">
                  {movie.tagline}
                </p>
              )}

              <div className="flex flex-wrap gap-2 text-sm text-text-muted">
                <span>{movie.year}</span>
                <span>•</span>
                <span>{movie.runtime} min</span>
                <span>•</span>
                <span>⭐ {movie.rating}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-glass-hover px-3 py-1 text-sm text-text-secondary"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="bg-primary rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent cursor-pointer"
                onClick={() => {
                  if (isInWatchlist) {
                    dispatch(removeFromWatchlist(movie.id));
                  } else {
                    dispatch(addToWatchlist(movie));
                  }
                }}
              >
                <span className="flex items-center justify-center gap-1">
                  {isInWatchlist ? <Check size={16} /> : <Plus size={16} />}
                  {isInWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
                </span>
              </button>
            </div>
          </Container>
        </section>
      )}

      <section className="py-12 md:py-16">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
        <Container>
          <div className="grid gap-8 md:grid-cols-[280px_1fr]">
            {movie.posterPath ? (
              <img
                src={getTmdbImageUrl(movie.posterPath)}
                alt={`${movie.title} poster`}
                className="w-full rounded-lg object-cover"
              />
            ) : (
              <div className="flex aspect-[2/3] items-center justify-center rounded-lg bg-glass-hover">
                <span className="text-text-muted">No poster</span>
              </div>
            )}

            <div>
              <h2 className="mb-3 text-2xl font-bold text-text-primary">
                Overview
              </h2>

              <p className="leading-7 text-text-secondary">
                {movie.overview || 'No overview available.'}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default MovieDetailsPage;
