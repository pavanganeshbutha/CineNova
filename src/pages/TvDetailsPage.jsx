import { useParams } from 'react-router-dom';
import { useGetTvDetailsQuery } from '../redux/tmdbApi';
import Loading from '../components/ui/Loading';
import EmptyState from '../components/ui/EmptyState';
import { getTmdbImageUrl } from '../utils/tmdbImage';
import Container from '../components/ui/Container';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Plus } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../redux/watchlistSlice';

export default function TvDetailsPage() {
  const { tvId } = useParams();
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.watchlist);
  const isInWatchlist = watchlist.some(
    (item) => item.id === Number(tvId) && item.type === 'tv',
  );
  const { data: tvShowData, isLoading, isError } = useGetTvDetailsQuery(tvId);
  const backdropPath = tvShowData?.backdrop_path;
  const lastAirDate = tvShowData?.last_episode_to_air?.air_date;
  const seasonNumber = tvShowData?.last_episode_to_air?.season_number;
  const episodeNumber = tvShowData?.last_episode_to_air?.episode_number;
  const genres = tvShowData?.genres;
  const posterPath = tvShowData?.poster_path;

  /*
   *payload:{id, type, title, year, rating, posterPath, genres}
   */
  const payload = {
    id: tvShowData?.id,
    type: 'tv',
    title: tvShowData?.name,
    year: tvShowData?.first_air_date?.slice(0, 4),
    rating: tvShowData?.vote_average,
    posterPath,
    genres: genres?.map((genre) => genre.name),
  };

  if (isLoading) return <Loading />;
  if (isError || !tvShowData)
    return (
      <EmptyState>
        Failed to load the tv show details. Please try again later...
      </EmptyState>
    );

  return (
    <main>
      <section
        className="min-h-[420px] bg-cover bg-center bg-black/70 bg-blend-color py-12"
        style={{
          backgroundImage: `url(${getTmdbImageUrl(backdropPath, 'w1280')})`,
        }}
      >
        <Container className="relative flex items-end  min-h-[420px]">
          <div className="max-w-3xl space-y-4">
            <h1 className="font-display text-4xl text-text-primary font-extrabold md:text-5xl">
              {tvShowData.original_name}
            </h1>
            <p className="text-text-secondary text-lg italic">
              {tvShowData.tagline}
            </p>

            <div className="flex flex-wrap gap-2 text-sm text-text-muted">
              <span>{lastAirDate}</span>
              <span>•</span>
              <span>Season {seasonNumber}</span>
              <span>•</span>
              <span>Episodes {episodeNumber}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <span className="text-text-secondary text-sm px-3 py-1 bg-glass-hover rounded-full">
                  {genre.name}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="bg-primary rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent cursor-pointer"
              onClick={() =>
                isInWatchlist
                  ? dispatch(removeFromWatchlist(payload))
                  : dispatch(addToWatchlist(payload))
              }
            >
              <div className="flex items-center justify-center gap-1">
                <span>
                  {isInWatchlist ? <Check size={16} /> : <Plus size={16} />}
                </span>
                <span>
                  {isInWatchlist ? 'Added to Watchlist' : 'Add to Watchlist'}
                </span>
              </div>
            </button>
          </div>
        </Container>
      </section>
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
            {posterPath ? (
              <img
                src={getTmdbImageUrl(posterPath)}
                alt={'poster'}
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
                {tvShowData.overview || 'No overview available.'}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
