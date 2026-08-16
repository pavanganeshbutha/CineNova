import { useParams } from 'react-router-dom';
import movies from '../data/movies';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id === Number(movieId));

  if (!movie) {
    return (
      <main>
        <h1>Movie not found</h1>
        <p>The requested movie could not be found.</p>
      </main>
    );
  }
  return (
    <main>
      <h1>Movie Details </h1>
      <p>Movie id: {movieId}</p>
    </main>
  );
};

export default MovieDetailsPage;
