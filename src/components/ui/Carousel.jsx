import { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MediaCard } from './MediaCard';

const arrowClass =
  'hidden md:grid absolute top-1/2 -translate-y-1/2 z-10 size-14 place-items-center rounded-full bg-black/80 border border-glass-border text-text-primary hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer';

export const Carousel = ({ data = [], type }) => {
  // Pauses while the mouse is over the carousel (including the arrow buttons)
  // and resumes on leave, even after the user has dragged or clicked an arrow.
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 3000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      }),
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      dragFree: true,
      containScroll: 'trimSnaps',
    },
    [autoplay],
  );
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback((api) => {
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    queueMicrotask(() => updateButtons(emblaApi));
    emblaApi
      .on('select', updateButtons)
      .on('scroll', updateButtons)
      .on('reInit', updateButtons);
    return () => {
      emblaApi
        .off('select', updateButtons)
        .off('scroll', updateButtons)
        .off('reInit', updateButtons);
    };
  }, [emblaApi, updateButtons]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-5">
          {data.map((item) => (
            <MediaCard key={item.id} item={item} type={type} />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canPrev}
        aria-label="Previous"
        className={`${arrowClass} left-2`}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canNext}
        aria-label="Next"
        className={`${arrowClass} right-2`}
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};
