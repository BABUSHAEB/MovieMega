import React, { useEffect, createContext, useState } from "react";
// import { API_BASEURL } from "./utils";
// require("dotenv").config();

const DataContext = createContext();

export default DataContext;

export const DataState = (props) => {
  const [movieName, setMovieName] = useState("avenger");
  const [movieData, setMovieData] = useState();
  // console.log(`${process.env.REACT_APP_API_KEY}`);
  const REACT_APP_IMAGEPATH =
    "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTEyNjE1MWNhMzQ5YTE4ZmE5YzYyYmU5ZmQ1M2FiOSIsInN1YiI6IjY0YzBiMmI2ZGY4NmE4MDEyNTgyNDJhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kkFjAp0MViGwdN1RGVvXbx_EKdca_CCOa33Ndd1zci4",
    },
  };

  // fetch('https://api.themoviedb.org/3/trending/all/day', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

  const searchMovies = async (movieName) => {
    const response = await fetch(
      // `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${movieName}`
      //   "https://api.themoviedb.org/3/discover/movie",
      //   curl --request GET \
      //  --url
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${process.env.REACT_APP_API_KEY}`,
      options
    );
    const DataResponse = await response.json();
    setMovieData(DataResponse.results);
    console.log(DataResponse);
    // `${process.env.REACT_APP_API_URL}&s=${movieName}`
    // `${API_BASEURL}&s=${movieName}`
  };
  useEffect(() => {
    if (movieName === undefined) {
      searchMovies("avenger");
    }
  }, [movieName]);
  useEffect(() => {
    searchMovies("spider man");
  }, []);

  return (
    <DataContext.Provider value={{ searchMovies, movieData, setMovieName }}>
      {props.children}
    </DataContext.Provider>
  );
};
