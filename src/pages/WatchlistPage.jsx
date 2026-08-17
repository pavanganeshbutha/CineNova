import Container from '../components/ui/Container';
import EmptyState from '../components/ui/EmptyState';

const WatchlistPage = () => {
  return (
    <main>
      <section className="py-12 md:py-16">
        <Container>
          <EmptyState>
            <div>
              <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
                My WatchList
              </h1>
              <p className="mt-4 text-text-secondary">
                Your saved movies will appear here.
              </p>
            </div>
          </EmptyState>
        </Container>
      </section>
    </main>
  );
};

export default WatchlistPage;
