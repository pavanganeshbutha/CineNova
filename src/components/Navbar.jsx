import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">CineNova</Link>
      <div>
        <Link to="/movies">Movies</Link>
        <Link to="/tv">TV</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
};

export default Navbar;
