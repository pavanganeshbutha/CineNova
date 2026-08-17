import Container from './ui/Container';
import MovieCard from './MovieCard';

const MovieSection = ({ movies }) => {
  return (
    <section className="py-8">
      <Container>
        <h2 className="text-text-primary text-2xl font-bold mb-6">
          Popular movies
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MovieSection;
