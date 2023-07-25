import React from "react";
import MovieCard from "./Components/MovieCard";
import { NavBar } from "./Components/NavBar";
import { DataState } from "./AppContext/Context";

const App = () => {
  return (
    <DataState>
      <NavBar />
      <MovieCard />
    </DataState>
  );
};

export default App;
