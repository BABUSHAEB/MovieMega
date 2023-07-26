import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import DataContext from "../AppContext/Context";
import { Link } from "react-router-dom";

export default function MovieCard() {
  const { movieData } = useContext(DataContext);

  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {movieData?.length > 0 &&
          movieData?.map((movieData, index) => (
            <Grid item key={index} xs={12} sm={5} md={4} lg={3}>
              <Card
                sx={{
                  maxWidth: "100%",
                  height: 431,
                  bgcolor: "#ebedeb",
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieData?.backdrop_path}`}
                  alt={movieData.poster_path}
                  style={{ width: "100%", height: "70%" }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pb: 0,
                    position: "relative",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {movieData.title}
                  </Typography>

                  <Button
                    component={Link}
                    to={`moviesdetails/${movieData.id}`}
                    variant="outlined"
                    color="secondary"
                    sx={{ position: "absolute", top: "5.5rem" }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
