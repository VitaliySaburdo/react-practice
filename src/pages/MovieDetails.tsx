import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmDetails } from "../apiServices/apiServices";
import { MovieItem } from "../components/MovieItem/MovieItem";

const MovieDetails = () => {
  const [movie, setMovie] = useState();

  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchMovieDetails = async () => {
      if (movieId) {
        const movieData = await getFilmDetails(movieId);
        setMovie(movieData);
      }
    };
    fetchMovieDetails();
  }, [movieId]);


  return <>{movie && <MovieItem movie={movie} />}</>;
};

export default MovieDetails;
