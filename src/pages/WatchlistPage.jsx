import { Link } from 'react-router-dom';
import { Bookmark, Film, Trash2, Tv } from 'lucide-react';
import Container from '../components/ui/Container';
import EmptyState from '../components/ui/EmptyState';
import Button from '../components/ui/Button';
import { MediaCard } from '../components/ui/MediaCard';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWatchlist } from '../redux/watchlistSlice';

const WatchlistPage = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.watchlist);

  if (watchlist.length === 0) {
    return (
      <main>
        <section className="py-12 md:py-16">
          <Container>
            <EmptyState>
              <div className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/15 p-4 text-primary">
                  <Bookmark size={28} />
                </div>
                <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
                  My Watchlist
                </h1>
                <p className="mt-4 text-text-secondary">
                  Your saved movies and TV shows will appear here.
                </p>
                <Link
                  to="/"
                  className="mt-6 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
                >
                  Browse titles
                </Link>
              </div>
            </EmptyState>
          </Container>
        </section>
      </main>
    );
  }

  const movieCount = watchlist.filter((item) => item.type === 'movie').length;
  const tvCount = watchlist.length - movieCount;

  return (
    <main>
      <section className="py-12 md:py-16">
        <Container>
          <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
                My{' '}
                <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  Watchlist
                </span>
              </h1>
              <p className="mt-2 text-text-secondary">
                {watchlist.length} {watchlist.length === 1 ? 'title' : 'titles'}{' '}
                saved
              </p>
            </div>

            <div className="flex gap-2 text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-glass-border bg-glass px-3 py-1 text-text-secondary">
                <Film size={14} /> {movieCount}{' '}
                {movieCount === 1 ? 'Movie' : 'Movies'}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-glass-border bg-glass px-3 py-1 text-text-secondary">
                <Tv size={14} /> {tvCount} {tvCount === 1 ? 'Show' : 'Shows'}
              </span>
            </div>
          </header>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] justify-items-center gap-5">
            {watchlist.map((item) => (
              <MediaCard
                key={`${item.type}-${item.id}`}
                item={item}
                type={item.type}
              >
                <Button
                  size="small"
                  variant="secondary"
                  className="w-full mt-2 cursor-pointer inline-flex items-center justify-center gap-2 hover:text-error"
                  onClick={() =>
                    dispatch(
                      removeFromWatchlist({ id: item.id, type: item.type }),
                    )
                  }
                >
                  <Trash2 size={14} />
                  Remove
                </Button>
              </MediaCard>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default WatchlistPage;
