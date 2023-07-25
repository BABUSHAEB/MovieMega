import React, { useEffect, createContext, useState } from "react";
// import { API_BASEURL } from "./utils";
// require("dotenv").config();

const DataContext = createContext();

export default DataContext;

export const DataState = (props) => {
  const [movieName, setMovieName] = useState("avenger");
  const [movieData, setMovieData] = useState();
  // console.log(`${process.env.REACT_APP_API_KEY}`);

  const searchMovies = async (movieName) => {
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${movieName}`
    );
    const DataResponse = await response.json();
    setMovieData(DataResponse);
    // console.log(DataResponse);
    // `${process.env.REACT_APP_API_URL}&s=${movieName}`
    // `${API_BASEURL}&s=${movieName}`
  };
  useEffect(() => {
    if (movieName) {
      searchMovies(movieName);
    }
  }, [movieName]);

  return (
    <DataContext.Provider value={{ searchMovies, movieData, setMovieName }}>
      {props.children}
    </DataContext.Provider>
  );
};
