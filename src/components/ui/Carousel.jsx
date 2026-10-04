import { MediaCard } from './MediaCard';

export const Carousel = ({ data, type }) => {
  return (
    <div className="flex gap-5 overflow-x-auto scrollbar-none scroll-smooth snap-none">
      {data.map((item) => (
        <MediaCard key={item.id} item={item} type={type} />
      ))}
    </div>
  );
};
