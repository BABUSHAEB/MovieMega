import {
  Box,
  CardContent,
  Chip,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MoviesDetails = () => {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = params;
  console.log(params);

  const moviesDetail = async (api) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${api}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setMovieDetail(data);

    console.log("details", data, movieDetail);
  };

  useEffect(() => {
    moviesDetail(id);
  }, [id]);

  const {
    poster_path,
    overview,
    genres = [],
    original_title,
    release_date,
    status,
    vote_average = "",
    runtime,
    production_countries = [],
    production_companies = [],
  } = movieDetail;

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={12} xl={12}>
          <Box
            sx={{
              width: "80vw",
              height: "fit-content",
              bgcolor: "#ebedeb",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={movieDetail.poster_path}
              style={{ width: "100%", height: "50%" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="p"
                sx={{ fontSize: { xs: "24px", md: "56px" } }}
              >
                {original_title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ my: "1rem" }}
              >
                {genres.map((gener, i) => (
                  <Chip
                    color="secondary"
                    key={i}
                    label={gener.name}
                    sx={{
                      mr: "1rem",
                      mb: "0.5rem",
                      height: { xs: "17px", md: "28px" },
                    }}
                  />
                ))}
              </Typography>
              <Typography
                variant="body2"
                color="secondary"
                sx={{
                  fontSize: { xs: "12px", md: "28px" },
                  fontWeight: 600,
                  mr: "1rem",
                  mb: "0.5rem",
                }}
              >
                Realese Date : {release_date} <br />
                Status : {status}
              </Typography>
              <Typography
                variant="body2"
                color="secondary"
                sx={{
                  fontSize: { xs: "12px", md: "28px" },
                  fontWeight: 600,
                  mr: "1rem",
                  mb: "0.5rem",
                }}
              >
                Duration: {runtime} min
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  color="secondary"
                  sx={{
                    fontSize: { xs: "12px", md: "28px" },
                    fontWeight: 600,
                    mr: "1rem",
                    mb: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  Rating :
                </Typography>
                <Rating
                  name="read-only"
                  value={Math.ceil(vote_average)}
                  readOnly
                  sx={{
                    fontSize: { xs: "21px", md: "39px" },
                    mr: "1rem",
                    mb: "0.5rem",
                    alignItems: "center",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  color="secondary"
                  sx={{
                    fontSize: { xs: "12px", md: "28px" },
                    fontWeight: 600,
                    mr: "1rem",
                    mb: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  Origin :
                </Typography>
                {production_countries.map((country, i) => (
                  <Chip
                    color="secondary"
                    key={i}
                    label={country.name}
                    sx={{
                      mr: "1rem",
                      mb: "0.5rem",
                      height: { xs: "17px", md: "28px" },
                    }}
                  />
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  color="secondary"
                  sx={{
                    fontSize: { xs: "12px", md: "28px" },
                    fontWeight: 600,
                    mr: "1rem",
                    mb: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  Production :
                </Typography>
                {production_companies.map((company, i) => (
                  <Chip
                    color="secondary"
                    key={i}
                    label={company.name}
                    sx={{
                      mr: "1rem",
                      mb: "0.5rem",
                      height: { xs: "17px", md: "28px" },
                    }}
                  />
                ))}
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: { xs: "12px", md: "28px" } }}
              >
                {overview}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
