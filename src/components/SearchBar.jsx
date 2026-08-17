import { useState } from 'react';
import Input from './ui/Input';
import Button from './ui/Button';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3">
      <Input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="search movie"
      />
      <Button type="submit" disabled={query === '' ? true : false}>
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
