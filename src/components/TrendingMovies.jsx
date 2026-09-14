import Container from './ui/Container';
import { useGetTrendingMoviesQuery } from '../redux/tmdbApi';
import Loading from './ui/Loading';
import { mapMovie } from '../utils/movieMapper';
import { Carousel } from './ui/Carousel';

export const TrendingMovies = () => {
  const { data, isLoading, isError } = useGetTrendingMoviesQuery();
  const trendingMovies = data?.results?.map(mapMovie);
  return (
    <section className="py-8">
      <Container>
        <h2 className="text-text-primary text-2xl font-bold mb-6">
          Trending Movies
        </h2>
        {isLoading && <Loading />}
        {isError && (
          <p className="text-text-secondary">Failed to load movies...</p>
        )}
        {!isLoading && !isError && <Carousel data={trendingMovies} />}
      </Container>
    </section>
  );
};
