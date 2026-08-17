import Container from '../components/ui/Container';
import MovieSection from '../components/MovieSection';
import movies from '../data/movies';

const HomePage = () => {
  return (
    <main>
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-text-primary font-display text-4xl md:text-5xl lg:text-6xl font-extrabold">
              CineNova
            </h1>
            <p className="text-text-secondary text-lg mt-4">
              Discover your next obsession.
            </p>
          </div>
        </Container>
      </section>

      <MovieSection movies={movies} />
    </main>
  );
};

export default HomePage;
