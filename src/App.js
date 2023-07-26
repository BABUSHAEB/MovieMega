import React from "react";
import MovieCard from "./Components/MovieCard";
import { NavBar } from "./Components/NavBar";
import { DataState } from "./AppContext/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesDetails } from "./Components/MoviesDetails";
import { NoMatch } from "./Components/NoMatch";

const App = () => {
  return (
    <BrowserRouter>
      <DataState>
        <NavBar />
        {/* <MovieCard /> */}
        <Routes>
          <Route path="/" element={<MovieCard />} />

          <Route path="/moviesdetails/:id" element={<MoviesDetails />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </DataState>
    </BrowserRouter>
  );
};

export default App;
