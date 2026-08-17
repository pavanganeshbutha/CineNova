import { useParams } from 'react-router-dom';
import movies from '../data/movies';
import Container from '../components/ui/Container';
import EmptyState from '../components/ui/EmptyState';
import GlassCard from '../components/ui/GlassCard';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id === Number(movieId));

  if (!movie) {
    return (
      <main>
        <section className="py-12 md:py-16">
          <Container>
            <EmptyState>
              <h1 className="text-text-primary font-bold font-display text-3xl md:text-4xl">
                ❗Movie not found
              </h1>
              <p className="text-text-secondary text-lg mt-4">
                The requested movie could not be found.
              </p>
            </EmptyState>
          </Container>
        </section>
      </main>
    );
  }
  return (
    <main>
      <section className="py-12 md:py-16">
        <Container>
          <GlassCard>
            <h1 className="text-text-primary font-bold font-display text-3xl md:text-4xl">
              Movie Details
            </h1>
            <p className="text-text-secondary text-lg mt-4">
              Movie id: {movieId}
            </p>
            <div className="text-text-secondary mt-6 space-y-2">
              <p>Year: {movie.year}</p>
              <p>Rating: ⭐{movie.rating}</p>
            </div>
          </GlassCard>
        </Container>
      </section>
    </main>
  );
};

export default MovieDetailsPage;
