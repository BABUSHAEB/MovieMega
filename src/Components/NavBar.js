import React, { useContext, useState } from "react";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DataContext from "../AppContext/Context";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [requestname, setRequestName] = useState();
  const { searchMovies } = useContext(DataContext);
  //   console.log(setMovieName, name);

  return (
    <div>
      <Link to="/">
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "72px" },
            textAlign: "center",
            fontWeight: 800,
            color: "blueviolet",
            cursor: "pointer",
          }}
        >
          MovieMega
        </Typography>
      </Link>
      <Box
        component="form"
        sx={{
          p: "2rem 4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            p: "2px 4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: 400, md: 800 },
            bgcolor: "#ebedeb",
            borderRadius: "10px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "Enter Move Name" }}
            onChange={(e) => setRequestName(e.target.value)}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={(e) => {
              e.preventDefault();
              searchMovies(requestname);
              setRequestName("");
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};
