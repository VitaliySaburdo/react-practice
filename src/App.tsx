import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./layout/ShareLayout/ShareLayout";


const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {


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
