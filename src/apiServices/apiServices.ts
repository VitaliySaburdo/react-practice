import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "ab57a8d74b0df3fdba80a78e42f32d17";

export const fetchMoviesData = async () => {
  const params = new URLSearchParams({
    api_key: `${API_KEY}`,
    page: "1",
    language: "en",
  });

  try {
    const url = `${BASE_URL}trending/movie/week?${params}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Запрос детальной информации по id
export const getFilmDetails = async (id: string) => {
  const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(url);
  return response.data;
};

// Запрос информации о актерах по id
export const getFilmCast = async (id: string) => {
  const url = `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(url);
  return response.data;
};

// Запрос описания по id
export const getFilmReviews = async (id: string) => {
  const url = `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(url);
  return response.data;
};

// Запрос описания по query
export const getFilmSearch = async (query: string) => {
  const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1&language=en-US`;
  const response = await axios.get(url);
  return response.data;
};
