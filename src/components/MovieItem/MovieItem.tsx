import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilmDetails } from "../../apiServices/apiServices";

export const MovieItem = () => {
  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovieDetails = async () => {
      if(movieId) {
        const movieData = await getFilmDetails(movieId);
        console.log(movieData)
      }
      
    };
    fetchMovieDetails()
  });
  return <></>;
};
