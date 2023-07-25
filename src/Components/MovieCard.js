import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import DataContext from "../AppContext/Context";

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
        {movieData?.Search?.length > 0 &&
          movieData?.Search.map((movieData) => (
            <Grid item key={movieData.imdbID} xs={12} sm={5} md={4} lg={3}>
              <Card
                sx={{
                  maxWidth: "100%",
                  height: 480,
                  // boxShadow: "10px 10px 10px #f3e4f5, 0px 50px  100px #f3e4f5 ",
                  bgcolor: "#56b7ca",
                }}
              >
                <img
                  src={movieData.Poster}
                  alt={movieData.Title}
                  style={{ width: "100%", height: "70%" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movieData.Title}
                  </Typography>
                  <Box sx={{ mb: "12px" }}>
                    <Chip
                      label={movieData.Type}
                      sx={{
                        mr: 2,
                        fontSize: "12px",
                        textTransform: "capitalize",
                        fontWeight: 600,
                        bgcolor: "#f3e4f5",
                      }}
                    />
                    <Chip
                      label={movieData.Year}
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        bgcolor: "#f3e4f5",
                      }}
                    />
                  </Box>

                  {/* <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
