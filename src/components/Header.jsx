// src/components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Workout Logger
        </Typography>
        <Button color="inherit" component={Link} to="/workout-log">
          Workout Log
        </Button>
        <Button color="inherit" component={Link} to="/exercise-tracker">
          Exercise Tracker
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
