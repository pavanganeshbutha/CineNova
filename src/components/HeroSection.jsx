import Container from './ui/Container';
import { useGetHeroSectionBannerQuery } from '../redux/tmdbApi';
import { mapMovie } from '../utils/movieMapper';
import { getTmdbImageUrl } from '../utils/tmdbImage';

export const HeroSection = () => {
  const { data } = useGetHeroSectionBannerQuery();

  const trending = data?.results?.map(mapMovie)[0];
  const heroSectionBackdropPath = getTmdbImageUrl(
    trending?.backdropPath,
    'w1280',
  );

  return (
    <section
      className="py-20 md:py-28 bg-center bg-cover"
      style={{ backgroundImage: `url(${heroSectionBackdropPath})` }}
    >
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-text-primary font-display text-6xl md:text-7xl lg:text-9xl font-extrabold text-shadow-lg">
            Cinenova
          </h1>
          <p className="text-text-secondary text-3xl mt-4 text-shadow-lg">
            Discover your next obsession.
          </p>
        </div>
      </Container>
    </section>
  );
};
