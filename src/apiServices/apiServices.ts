import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ab57a8d74b0df3fdba80a78e42f32d17';

export const fetchMoviesData = async() => {
    try {
        const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=1&language=en`;
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.log(error);
      }
}

fetchMoviesData()