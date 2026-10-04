import { Link } from 'react-router-dom';
import { getTmdbImageUrl } from '../../utils/tmdbImage';
import Button from './Button';

export const MediaCard = ({ item, type, children }) => {
  return (
    <div className="shrink-0 grow-0 border-2 border-glass-border p-4 rounded-lg">
      <img
        src={getTmdbImageUrl(item.posterPath, 'w500')}
        alt={item.title ? `${item.title} poster` : ''}
        className="rounded-lg border-2 border-glass-border size-80 w-fit"
      />
      <Link to={`/${type}/${item.id}`}>
        <Button size="small" className=" w-full mt-4 cursor-pointer">
          More Info...
        </Button>
      </Link>
      {children}
    </div>
  );
};
