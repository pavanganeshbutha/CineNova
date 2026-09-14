import { Link } from 'react-router-dom';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';
import { getTmdbImageUrl } from '../utils/tmdbImage';

const MovieCard = ({ movie, className }) => {
  return (
    <GlassCard className={`space-y-2 hover:bg-glass-hover ${className}`}>
      {movie.posterPath ? (
        <img
          src={getTmdbImageUrl(movie.posterPath, 'w185')}
          alt={movie.title}
          className="size-80 w-full rounded-lg object-contain"
        />
      ) : (
        <div className="aspect-2/3w-full rounded-lg bg-glass-hover flex items-center justify-center">
          <span className="text-text-muted">No poster</span>
        </div>
      )}
      <h3 className="text-lg font-semibold text-text-primary">{movie.title}</h3>
      <p className="text-sm text-text-muted">{movie.year}</p>
      <Badge>⭐{movie.rating.toFixed(1)}</Badge>
      <Link
        className="text-primary text-sm font-medium transition-colors hover:text-accent"
        to={`movie/${movie.id}`}
      >
        Movie Details
      </Link>
    </GlassCard>
  );
};

export default MovieCard;
