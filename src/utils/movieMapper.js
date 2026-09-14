export const mapMovie = (movie) => {
  return {
    id: movie.id,
    title: movie.title,
    year: movie.release_date?.slice(0, 4),
    rating: movie.vote_average,
    posterPath: movie.poster_path,
    backdropPath: movie.backdrop_path,
    overview: movie.overview,
  };
};

export const mapMovieDetails = (movie) => {
  return {
    id: movie.id,
    title: movie.title,
    tagline: movie.tagline,
    overview: movie.overview,
    year: movie.release_date?.slice(0, 4),
    runtime: movie.runtime,
    rating: movie.vote_average,
    posterPath: movie.poster_path,
    backdropPath: movie.backdrop_path,
    genres: movie.genres?.map((genre) => genre.name) ?? [],
  };
};
