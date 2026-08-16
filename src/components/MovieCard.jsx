import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <article>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <p>⭐{movie.rating}</p>
      <Link to={`movie/${movie.id}`}>Movie Details</Link>
    </article>
  );
};

export default MovieCard;
