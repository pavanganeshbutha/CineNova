import { Link } from 'react-router-dom';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';

const MovieCard = ({ movie }) => {
  return (
    <GlassCard className="space-y-2 hover:bg-glass-hover">
      <h3 className="text-lg font-semibold text-text-primary">{movie.title}</h3>
      <p className="text-sm text-text-muted">{movie.year}</p>
      <Badge>⭐{movie.rating}</Badge>
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
