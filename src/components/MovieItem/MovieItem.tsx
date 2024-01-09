import { Link, Outlet, useLocation } from "react-router-dom";
import { Suspense, useRef } from "react";
import noPoster from "../../images/No_image_poster.png";
import { Img, Container, Box } from "./MovieItem.styled";
import { MovieDetailsProps } from "../../types";


export const MovieItem: React.FC<{ movie: MovieDetailsProps }> = ({
  movie,
}) => {
  const location = useLocation();

  const { poster_path, overview, title, release_date, vote_average, genres } =
    movie;
  const year = release_date ? release_date.slice(0, 4) : "Unknown";
  const userScore = vote_average && vote_average * 10;
  const genresList = genres && genres.map((genre) => genre.name + ", ");

  const backToUrl = useRef<string>(location.state?.from ?? "/movies");

  return (
    <>
      <Link to={backToUrl.current}> Go back</Link>
      <Container>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : noPoster
          }
          alt={title}
          width={300}
        />
        <div>
          <h2>
            {title} ({year})
          </h2>
          <p>User Score: {`${userScore}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresList}</p>
        </div>
      </Container>
      <Box>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </Box>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
