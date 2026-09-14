import Container from './ui/Container';
import { useGetPopularTvShowsQuery } from '../redux/tmdbApi';
import Loading from './ui/Loading';
import { mapMovie } from '../utils/movieMapper';
import { Carousel } from './ui/Carousel';

export const PopularTvShows = () => {
  const { data, isLoading, isError } = useGetPopularTvShowsQuery();
  const popularTvShows = data?.results?.map(mapMovie);
  return (
    <section className="py-8">
      <Container>
        <h2 className="text-text-primary text-2xl font-bold mb-6">
          Popular Tv Shows
        </h2>
        {isLoading && <Loading />}
        {isError && (
          <p className="text-text-secondary">Failed to popular movies...</p>
        )}
        {!isLoading && !isError && <Carousel data={popularTvShows} />}
      </Container>
    </section>
  );
};
