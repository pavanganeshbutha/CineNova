import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import EmptyState from '../components/ui/EmptyState';

const NotFoundPage = () => {
  return (
    <main>
      <section className="py-12 md:py-16">
        <Container>
          <EmptyState>
            <div>
              <p className="text-text-primary font-bold text-4xl font-display">
                404
              </p>
              <h1 className="text-text-primary font-semibold text-xl mt-2">
                Page not Found
              </h1>
              <p className="text-text-secondary mt-2">
                The page you're looking for doesn't exist.
              </p>
              <Link
                className="text-primary inline-block mt-6 hover:text-accent transition-colors"
                to="/"
              >
                Go back to Home
              </Link>
            </div>
          </EmptyState>
        </Container>
      </section>
    </main>
  );
};

export default NotFoundPage;
