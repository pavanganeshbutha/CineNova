import { Link, NavLink } from 'react-router-dom';
import Container from './ui/Container';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `transition-colors hover:text-text-primary  ${isActive ? 'text-text-primary bg-glass border-2 border-glass-border py-1 px-6 rounded-full' : 'text-text-secondary'}`;

  return (
    <nav className="bg-glass border-b border-glass-border px-4 py-4 backdrop-blur-md ">
      <Container className="flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-text-primary">
          CineNova
        </Link>
        <button
          className="text-text-primary md:hidden"
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
          {isMenuOpen && <MobileMenu />}
        </button>
        <div className=" hidden md:flex items-center gap-6">
          <NavLink className={navLinkClass} to="/">
            Home
          </NavLink>
          <NavLink className={navLinkClass} to="/movies">
            Movies
          </NavLink>
          <NavLink className={navLinkClass} to="/tv">
            TV
          </NavLink>
          <NavLink className={navLinkClass} to="/search">
            Search
          </NavLink>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
