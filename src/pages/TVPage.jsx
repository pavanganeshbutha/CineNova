import Container from '../components/ui/Container';

const TVPage = () => {
  return (
    <main>
      <section className="py-12 md:py-16">
        <Container className="max-w-2xl">
          <h1 className="text-text-primary font-display font-extrabold text-4xl md:text-5xl lg:text-6xl">
            TV Shows
          </h1>
          <p className="mt-4 text-text-secondary text-lg">
            Choose your next binge watch
          </p>
        </Container>
      </section>
    </main>
  );
};

export default TVPage;
