import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import { SharedLayout } from "./layout/ShareLayout/ShareLayout";
import { fetchMoviesData } from "./apiServices/apiServices";

const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  useEffect(() => {
    const getMoviesData = async () => {
      const moviesData = await fetchMoviesData();
      console.log(moviesData);
    };
    getMoviesData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
