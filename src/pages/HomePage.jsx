import MovieSection from '../components/MovieSection';
import movies from '../data/movies';

const HomePage = () => {
  return (
    <main>
      <h1>CineNova</h1>
      <p>Discover your next obsession.</p>
      <MovieSection movies={movies} />
    </main>
  );
};

export default HomePage;
