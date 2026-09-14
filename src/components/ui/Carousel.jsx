import { getTmdbImageUrl } from '../../utils/tmdbImage';
import Button from './Button';

export const Carousel = ({ data }) => {
  return (
    <div className="flex gap-5 overflow-x-auto scrollbar-none scroll-smooth snap-none">
      {data.map((item) => (
        <div className="shrink-0 grow-0 border-2 border-glass-border p-4 rounded-lg">
          <img
            src={getTmdbImageUrl(item.posterPath, 'w500')}
            className="rounded-lg border-2 border-glass-border size-80 w-fit"
          />
          <Button size="small" className=" w-full mt-4">
            More Info...
          </Button>
        </div>
      ))}
    </div>
  );
};
