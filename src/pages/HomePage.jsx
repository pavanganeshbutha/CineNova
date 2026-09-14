import { HeroSection } from '../components/HeroSection';
import { TrendingMovies } from '../components/TrendingMovies';
import { TrendingTvShows } from '../components/TrendingTvShows';
import { PopularMovies } from '../components/PopularMovies';
import { PopularTvShows } from '../components/PopularTvShow';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <TrendingMovies />
      <TrendingTvShows />
      <PopularMovies />
      <PopularTvShows />
    </main>
  );
};

export default HomePage;
