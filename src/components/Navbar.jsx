import { Link } from 'react-router-dom';
import Container from './ui/Container';

const Navbar = () => {
  return (
    <nav className="bg-glass border-b border-glass-border px-4 py-4 backdrop-blur-md">
      <Container className="flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-text-primary">
          CineNova
        </Link>
        <div className="flex items-center gap-6">
          <Link
            className="text-text-secondary hover:text-text-primary transition-colors"
            to="/movies"
          >
            Movies
          </Link>
          <Link
            className="text-text-secondary hover:text-text-primary transition-colors"
            to="/tv"
          >
            TV
          </Link>
          <Link
            className="text-text-secondary hover:text-text-primary transition-colors"
            to="/search"
          >
            Search
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
