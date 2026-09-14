const tmdbImageBaseUrl = 'https://image.tmdb.org/t/p';

export const getTmdbImageUrl = (path, size = 'w500') => {
  if (!path) return;

  return `${tmdbImageBaseUrl}/${size}${path}`;
};
