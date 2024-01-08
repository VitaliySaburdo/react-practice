import { Link, useLocation  } from 'react-router-dom';
import {MovieData} from '../../types'
import {Container, Img, ProductName} from './MovieList.styled'
import noPoster from '../../images/No_image_poster.png'

interface MoviesListProps {
    movies: MovieData[]
}

export const MoviesList: React.FC<MoviesListProps> = ({movies}) => {
    const location = useLocation();
    return (
        <Container>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <Img
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : noPoster}
                  alt={movie.title}
                  width="395"
                  height="574"
                />
                <ProductName>{movie.title}</ProductName>
              </Link>
            </li>
          ))}
        </Container>
      );
}