import { useState } from 'react';
import Input from './ui/Input';
import Button from './ui/Button';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
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
