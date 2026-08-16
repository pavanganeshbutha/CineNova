import MovieCard from './MovieCard';

const MovieSection = ({ movies }) => {
  return (
    <section>
      <h2>Popular movies</h2>
      <div>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
