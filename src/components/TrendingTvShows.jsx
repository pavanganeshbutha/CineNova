import Container from './ui/Container';
import { useGetTrendingTvShowsQuery } from '../redux/tmdbApi';
import Loading from './ui/Loading';
import { mapMovie } from '../utils/movieMapper';
import { Carousel } from './ui/Carousel';

export const TrendingTvShows = () => {
  const { data, isLoading, isError } = useGetTrendingTvShowsQuery();
  const trendingTvShows = data?.results?.map(mapMovie);
  return (
    <section className="py-8">
      <Container>
        <h2 className="text-text-primary text-2xl font-bold mb-6">
          Trending Tv Shows
        </h2>
        {isLoading && <Loading />}
        {isError && (
          <p className="text-text-secondary">Failed to load Tv Shows...</p>
        )}
        {!isLoading && !isError && <Carousel data={trendingTvShows} />}
      </Container>
    </section>
  );
};
