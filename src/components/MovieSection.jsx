import Container from './ui/Container';
import MovieCard from './MovieCard';

const MovieSection = ({ movies }) => {
  return (
    <section className="py-8">
      <Container>
        <h2 className="text-text-primary text-2xl font-bold mb-6">
          Popular movies
        </h2>
        <div className="flex overflow-x-auto scroll-smooth gap-6 snap-none md:snap-x snap-mandatory scrollbar-none">
          {movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              className={' shrink-0 grow-0  '}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MovieSection;
