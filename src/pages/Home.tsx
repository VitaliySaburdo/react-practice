import { useEffect, useState } from "react";
import { fetchMoviesData } from "../apiServices/apiServices";
import { MoviesList } from "../components/MoviesList/MoviesList";

const Home = () => {
const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMoviesData = async () => {
      const {results} = await fetchMoviesData();
      setMovies(results)
    };
    getMoviesData();
  }, []);

  return (
    <>
      <MoviesList movies={movies}/>
    </>
  );
};

export default Home;
