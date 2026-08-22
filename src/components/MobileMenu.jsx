import { NavLink } from 'react-router-dom';
import Container from './ui/Container';
import { House, Clapperboard, Tv, Search } from 'lucide-react';

const MobileMenu = () => {
  const navLinkClass = ({ isActive }) =>
    `transition-colors hover:text-text-primary  ${isActive ? 'text-text-primary bg-glass border-2 border-glass-border py-1 px-6 rounded-full' : 'text-text-secondary'}`;

  return (
    <nav
      className="absolute left-0 top-16 py-1 border w-full bg-glass
     border-glass-border rounded-2xl backdrop-blur-md"
    >
      <Container className="flex items-center justify-between">
        <NavLink className={navLinkClass} to="/">
          <House />
        </NavLink>
        <NavLink className={navLinkClass} to="/movies">
          <Clapperboard />
        </NavLink>
        <NavLink className={navLinkClass} to="/tv">
          <Tv />
        </NavLink>
        <NavLink className={navLinkClass} to="/search">
          <Search />
        </NavLink>
      </Container>
    </nav>
  );
};

export default MobileMenu;
