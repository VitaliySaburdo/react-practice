import { useEffect } from "react";
import { getFilmCast } from "../../apiServices/apiServices";
import { useParams } from "react-router-dom";

export const Cast = () => {
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getCast = async () => {
      const data = await getFilmCast(movieId);
      console.log(data);
    };
    getCast();
  }, [movieId]);
  return (
    <>
      <h2>Cast</h2>
    </>
  );
};
