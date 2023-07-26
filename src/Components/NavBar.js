import React, { useContext, useState } from "react";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DataContext from "../AppContext/Context";
import { Link } from "react-router-dom";
import logo from "./Images/logo.svg";

export const NavBar = () => {
  const [requestname, setRequestName] = useState();
  const { searchMovies } = useContext(DataContext);
  //   console.log(setMovieName, name);

  return (
    <Box>
      <Link to="/">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              width: { xs: "80vw", sm: "40vw", md: "25vw", lg: "24vw" },
              height: "fit-content",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ background: "black", height: "100%", width: "100%" }}
            />
          </Box>
        </Box>
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
    </Box>
  );
};
