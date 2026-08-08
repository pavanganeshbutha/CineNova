import { useState, useEffect } from 'react';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="min-h-20 flex items-center justify-center text-4xl font-bold bg-purple-400">
        <h1>CineNova</h1>
      </header>
      <main className="flex-1">
        <Banner />
      </main>
      <footer>footer</footer>
    </div>
  );
};

function Banner() {
  const [movieDetails, setMovieDetails] = useState({});
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTg5NmNmMGU3M2I4ODJlMjVlMjU0MDYwYTVjNzAyNyIsIm5iZiI6MTc2ODA3MDQ0MS43NDEsInN1YiI6IjY5NjI5ZDI5ZDA3YmQ3MTAxNGQxNGQwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A6g_6OcmaBJyTBcY-SvQj2lNzGWA9SbdKm3_zbLE5Bg',
    },
  };

  useEffect(function () {
    async function fetchMovieDetails() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/27205?language=en-US`,
        options,
      );
      const data = await response.json();
      setMovieDetails(data);
      console.log(data);
    }

    fetchMovieDetails();
  }, []);

  return (
    <section className="min-h-96 bg-black bg-[url(https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg)] bg-center bg-no-repeat bg-cover p-4 bg-blend-luminosity">
      <h1 className="text-6xl font-extrabold text-white">
        {movieDetails.title}
      </h1>
      <h4 className="text-4xl font-semibold text-white mt-5">
        {movieDetails.tagline}
      </h4>
      <p className="text-2xl text-white mt-5">{movieDetails.overview}</p>
    </section>
  );
}

export default App;
