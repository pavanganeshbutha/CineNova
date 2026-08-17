import Container from '../components/ui/Container';

const MoviesPage = () => {
  return (
    <main>
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-text-primary font-display text-4xl md:text-5xl lg:text-6xl font-extrabold">
              Movies
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Explore latest movies.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default MoviesPage;
