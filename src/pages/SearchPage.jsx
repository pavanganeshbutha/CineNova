import Container from '../components/ui/Container';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  return (
    <main>
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-text-primary font-extrabold font-display text-4xl md:text-5xl lg:text-6xl">
              Search Movies
            </h1>
            <div className="mt-6">
              <SearchBar />
            </div>
            {query && (
              <p className="mt-4 text-text-primary">Searching for:{query}</p>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default SearchPage;
