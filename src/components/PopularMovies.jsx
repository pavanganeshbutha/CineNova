import Container from './ui/Container';
import { useGetPopularMoviesQuery } from '../redux/tmdbApi';
import Loading from './ui/Loading';
import { mapMovie } from '../utils/movieMapper';
import { Carousel } from './ui/Carousel';

export const PopularMovies = () => {
  const { data, isLoading, isError } = useGetPopularMoviesQuery();
  const popularMovies = data?.results?.map(mapMovie);
  return (
    <section className="py-8">
      <Container>
        <h2 className="text-text-primary text-2xl font-bold mb-6">
          Popular Movies
        </h2>
        {isLoading && <Loading />}
        {isError && (
          <p className="text-text-secondary">Failed to popular movies...</p>
        )}
        {!isLoading && !isError && <Carousel data={popularMovies} />}
      </Container>
    </section>
  );
};
