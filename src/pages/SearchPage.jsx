import Container from '../components/ui/Container';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
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
          </div>
        </Container>
      </section>
    </main>
  );
};

export default SearchPage;
