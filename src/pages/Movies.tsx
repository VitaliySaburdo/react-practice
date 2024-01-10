import { useSearchParams } from "react-router-dom";
import { SearchMovie } from "../components/SearchMovie/SearchMovie";
import { MoviesList } from "../components/MoviesList/MoviesList";
import { useEffect, useState, useMemo } from "react";
import { getFilmSearch } from "../apiServices/apiServices";
import { Movie } from "../types";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState<Movie[]>([]);

  const movieName = searchParams.get("name") ?? "";

  const visibleMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(movieName.toLowerCase())
    );
  }, [movieName, movies]);


  useEffect(() => {
    if (!movieName) {
      return;
    }
    const getMoviesByName = async (query: string) => {
      const { results } = await getFilmSearch(query);
      setMovies(results);
    };
    getMoviesByName(movieName);
  }, [movieName]);

  const updateQueryString = (name: string) => {
    const nextParams: { name?: string } = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchMovie value={movieName} onChange={updateQueryString} />
      <MoviesList movies={visibleMovies} />
    </>
  );
};

export default Movies;
